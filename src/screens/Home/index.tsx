import { Container, Content } from './styles'

import { HomeHeader } from '@components/HomeHeader'
import { CarStatus } from '@components/CarStatus'

import { useNavigation } from '@react-navigation/native'

import { useEffect } from 'react'

import { useQuery } from '../../libs/realm'
import { Historic } from '../../libs/realm/schemas/Historic'

export function Home() {
  const historic = useQuery(Historic)

  const { navigate } = useNavigation()

  function handleRegisterMoviment() {
    navigate('departure')
  }

  function fetchVehicle() {
    console.log(historic)
  }

  useEffect(() => {
    fetchVehicle()
  }, [])

  return (
    <Container>
      <HomeHeader />

      <Content>
        <CarStatus licensePlate="XXX-1234" onPress={handleRegisterMoviment} />
      </Content>
    </Container>
  )
}
