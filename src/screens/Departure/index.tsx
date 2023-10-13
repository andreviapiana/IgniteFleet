import { Container, Content } from './styles'

import { Header } from '@components/Header'
import { LicensePlateInput } from '@components/LicensePlateInput'

export function Departure() {
  return (
    <Container>
      <Container>
        <Header title="Saída" />

        <Content>
          <LicensePlateInput label="Placa do veículo" placeholder="BRA1234" />
        </Content>
      </Container>
    </Container>
  )
}
