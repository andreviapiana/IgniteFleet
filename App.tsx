import 'react-native-get-random-values'
import './src/libs/dayjs'

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
import { RealmProvider, syncConfig } from './src/libs/realm'
import { REALM_APP_ID } from '@env'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
        <SafeAreaProvider style={{ backgroundColor: theme.COLORS.GRAY_800 }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <UserProvider fallback={SignIn}>
            <RealmProvider sync={syncConfig} fallback={Loading}>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
