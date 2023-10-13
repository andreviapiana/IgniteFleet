import { Container, Content } from './styles'

import { Header } from '@components/Header'
import { LicensePlateInput } from '@components/LicensePlateInput'
import { TextAreaInput } from '@components/TextAreaInput'
import { Button } from '@components/Button'

import { useRef } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native'

const keyboardAvoidingViewBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function Departure() {
  const descriptionRef = useRef<TextInput>(null)

  function handleDepartureRegister() {
    console.log('OK!')
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
                label="Placa do veículo"
                placeholder="BRA1234"
                onSubmitEditing={() => {
                  descriptionRef.current?.focus()
                }}
                returnKeyType="next"
              />

              <TextAreaInput
                ref={descriptionRef}
                label="Finalizade"
                placeholder="Vou utilizar o veículo para..."
                onSubmitEditing={handleDepartureRegister}
                returnKeyType="send"
                blurOnSubmit
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
