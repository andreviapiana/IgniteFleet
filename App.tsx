import { StatusBar } from 'react-native'

import { SignIn } from '@screens/SignIn'
import { Routes } from '@routes/index'
import { Loading } from '@components/Loading'

import { ThemeProvider } from 'styled-components/native'
import theme from '@theme'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { AppProvider, UserProvider } from '@realm/react'
import { REALM_APP_ID } from '@env'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <UserProvider fallback={SignIn}>
          <UserProvider fallback={SignIn}>
            <Routes />
          </UserProvider>
        </UserProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
