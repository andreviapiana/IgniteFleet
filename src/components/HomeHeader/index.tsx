import React from 'react'
import { Container, Greeting, Message, Name, Picture } from './styles'

import { TouchableOpacity } from 'react-native'

import theme from '@theme'
import { Power } from 'phosphor-react-native'

import { useApp, useUser } from '@realm/react'

export function HomeHeader() {
  const user = useUser()
  const app = useApp()

  function handleLogOut() {
    app.currentUser?.logOut()
  }

  return (
    <Container>
      <Picture
        source={{ uri: user?.profile.pictureUrl }}
        placeholder="L184i9ofbHof00ayjsay~qj[ayj@"
      />

      <Greeting>
        <Message>Olá</Message>

        <Name>{user?.profile.name}</Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogOut}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  )
}
