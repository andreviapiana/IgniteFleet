import { StatusBar, Text } from 'react-native'
import { SignIn } from '@screens/SignIn'

import { ThemeProvider } from 'styled-components/native'
import theme from '@theme'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <SignIn /> : <Text>Hello World</Text>}
    </ThemeProvider>
  )
}
