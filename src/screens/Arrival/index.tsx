import { useNavigation, useRoute } from '@react-navigation/native'

import {
  AsyncMessage,
  Container,
  Content,
  Description,
  Footer,
  Label,
  LicensePlate,
} from './styles'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Map } from '@components/Map'

import { X } from 'phosphor-react-native'

import { useObject, useRealm } from '../../libs/realm'
import { Historic } from '../../libs/realm/schemas/Historic'
import { BSON } from 'realm'
import { Alert } from 'react-native'
import { useEffect, useState } from 'react'

import { getLastAsyncTimestamp } from '../../libs/asyncStorage/syncStorage'
import { getStorageLocations } from '../../libs/asyncStorage/locationStorage'

import { stopLocationTask } from '../../tasks/backgroundLocationTask'

import { LatLng } from 'react-native-maps'

type RouteParamProps = {
  id: string
}

export function Arrival() {
  const [dataNotSynced, setDataNotSynced] = useState(false)
  const [coordinates, setCoordinates] = useState<LatLng[]>([])

  const route = useRoute()

  const { id } = route.params as RouteParamProps

  const realm = useRealm()
  const { goBack } = useNavigation()

  const historic = useObject(Historic, new BSON.UUID(id) as unknown as string)

  const title = historic?.status === 'departure' ? 'Chegada' : 'Detalhes'

  function handleRemoveVehicleUsage() {
    Alert.alert('Cancelar', 'Cancelar a utilização do veículo?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removeVehicleUsage() },
    ])
  }

  async function removeVehicleUsage() {
    realm.write(() => {
      realm.delete(historic)
    })

    await stopLocationTask()

    goBack()
  }

  async function handleArrivalRegister() {
    try {
      if (!historic) {
        return Alert.alert(
          'Erro',
          'Não foi possível obter os dados para registrar a chegada do veículo.',
        )
      }

      const locations = await getStorageLocations()

      realm.write(() => {
        historic.status = 'arrival'
        historic.updated_at = new Date()
        historic.coords.push(...locations)
      })

      await stopLocationTask()

      Alert.alert('Chegada', 'Chegada registrada com sucesso.')
      goBack()
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível registar a chegada do veículo.')
    }
  }

  async function getLocationsInfo() {
    if (!historic) {
      return
    }

    const lastSync = await getLastAsyncTimestamp()
    const updatedAt = historic!.updated_at.getTime()
    setDataNotSynced(updatedAt > lastSync)

    const locationsStorage = await getStorageLocations()
    setCoordinates(locationsStorage)
  }

  useEffect(() => {
    getLocationsInfo()
  }, [historic])

  return (
    <Container>
      <Header title={title} />

      {coordinates.length > 0 && <Map coordinates={coordinates} />}

      <Content>
        <Label>Placa do veículo</Label>

        <LicensePlate> {historic?.license_plate}</LicensePlate>

        <Label>Finalidade</Label>

        <Description>{historic?.description}</Description>
      </Content>

      {historic?.status === 'departure' && (
        <Footer>
          <ButtonIcon icon={X} onPress={handleRemoveVehicleUsage} />

          <Button title="Registrar chegada" onPress={handleArrivalRegister} />
        </Footer>
      )}

      {dataNotSynced && (
        <AsyncMessage>
          Sincronização da{' '}
          {historic?.status === 'departure' ? 'partida' : 'chegada'} pendente
        </AsyncMessage>
      )}
    </Container>
  )
}
