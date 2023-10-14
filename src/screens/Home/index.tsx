import { Container, Content } from './styles'

import { HomeHeader } from '@components/HomeHeader'
import { CarStatus } from '@components/CarStatus'

import { useNavigation } from '@react-navigation/native'

import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { useQuery, useRealm } from '../../libs/realm'
import { Historic } from '../../libs/realm/schemas/Historic'

export function Home() {
  const historic = useQuery(Historic)
  const realm = useRealm()
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)

  const { navigate } = useNavigation()

  function handleRegisterMoviment() {
    if (vehicleInUse?._id) {
      navigate('arrival', { id: vehicleInUse._id.toString() })
    } else {
      navigate('departure')
    }
  }

  function fetchVehicleInUse() {
    try {
      const vehicle = historic.filtered("status='departure'")[0]
      setVehicleInUse(vehicle)
    } catch (error) {
      Alert.alert(
        'Veículo em uso',
        'Não foi possível carregar o veículo em uso.',
      )
      console.log(error)
    }
  }

  function fetchHistoric() {
    const response = historic.filtered("status='arrival' SORT(created_at DESC)")
    console.log(response)
  }

  useEffect(() => {
    fetchHistoric()
  }, [historic])

  useEffect(() => {
    realm.addListener('change', () => fetchVehicleInUse())
    return () => realm.removeListener('change', fetchVehicleInUse)
  }, [])

  return (
    <Container>
      <HomeHeader />

      <Content>
        <CarStatus
          licensePlate={vehicleInUse?.license_plate}
          onPress={handleRegisterMoviment}
        />
      </Content>
    </Container>
  )
}
