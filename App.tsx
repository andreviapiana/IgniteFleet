import { StatusBar } from 'react-native'
import { SignIn } from '@screens/SignIn'

import { ThemeProvider } from 'styled-components/native'
import theme from '@theme'

export default function App() {
  return (
<ThemeProvider theme={theme}>
  <StatusBar
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
  />

  <SignIn />
</ThemeProvider>
  )
}
