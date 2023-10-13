import { Container, Content } from './styles'

import { Header } from '@components/Header'
import { LicensePlateInput } from '@components/LicensePlateInput'
import { TextAreaInput } from '@components/TextAreaInput'
import { Button } from '@components/Button'

import { useRef, useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native'
import { licensePlateValidate } from '@utils/licensePlateValidate'

const keyboardAvoidingViewBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const [description, setDescription] = useState('')
  const [licensePlate, setLicensePlate] = useState('')

  const descriptionRef = useRef<TextInput>(null)
  const licensePlateRef = useRef<TextInput>(null)

  function handleDepartureRegister() {
    if (!licensePlateValidate(licensePlate)) {
      licensePlateRef.current?.focus()
      return Alert.alert(
        'Placa inválida',
        'A placa é inválida. Por favor, informe a placa correta.',
      )
    }
  }

  return (
    <Container>
      <Container>
        <Header title="Saída" />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={keyboardAvoidingViewBehavior}
        >
          <ScrollView>
            <Content>
              <LicensePlateInput
                ref={licensePlateRef}
                label="Placa do veículo"
                placeholder="BRA1234"
                onSubmitEditing={() => {
                  descriptionRef.current?.focus()
                }}
                returnKeyType="next"
                onChangeText={setLicensePlate}
              />

              <TextAreaInput
                ref={descriptionRef}
                label="Finalizade"
                placeholder="Vou utilizar o veículo para..."
                onSubmitEditing={handleDepartureRegister}
                returnKeyType="send"
                blurOnSubmit
                onChangeText={setDescription}
              />

              <Button
                title="Registrar Saída"
                onPress={handleDepartureRegister}
              />
            </Content>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    </Container>
  )
}
