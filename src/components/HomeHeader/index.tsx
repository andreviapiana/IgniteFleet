import React from 'react'
import { Container, Greeting, Message, Name } from './styles'

import { TouchableOpacity } from 'react-native'

import theme from '@theme'
import { Power } from 'phosphor-react-native'

export function HomeHeader() {
  return (
    <Container>
      <Greeting>
        <Message>Olá</Message>

        <Name>Rodrigo</Name>
      </Greeting>

      <TouchableOpacity>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  )
}
