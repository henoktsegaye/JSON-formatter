import { ChakraProvider } from "@chakra-ui/react";
import { Page } from ".";

function App() {
  return (
    <ChakraProvider>
      <Page />
    </ChakraProvider>
  );
}

export default App;
