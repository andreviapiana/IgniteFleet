import 'react-native-get-random-values'
import './src/libs/dayjs'

import { StatusBar } from 'react-native'

import { SignIn } from '@screens/SignIn'
import { Routes } from '@routes/index'
import { Loading } from '@components/Loading'
import { TopMessage } from '@components/TopMessage'

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

import { WifiSlash } from 'phosphor-react-native'

import { useNetInfo } from '@react-native-community/netinfo'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  const netInfo = useNetInfo()

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider style={{ backgroundColor: theme.COLORS.GRAY_800 }}>
          {!netInfo.isConnected && (
            <TopMessage title="Você está off-line" icon={WifiSlash} />
          )}

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
