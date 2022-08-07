import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import { Principal } from "./components/Principal"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Principal/>
  </ChakraProvider>
)
