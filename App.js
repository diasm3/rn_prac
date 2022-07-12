import { TailwindProvider } from "tailwindcss-react-native"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import Main from "./pages/Main"

export default function App() {
  return (
    <TailwindProvider>
      {/* <Main></Main> */}
      <View>
        <Text>Hello World</Text>
      </View>
      <StatusBar style="auto" />
    </TailwindProvider>
  )
}
