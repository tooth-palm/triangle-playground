import { Box, Flex } from "@chakra-ui/react";
import Canvas from "./Components/Canvas";
import sketch from "./sketch";

function App() {
  return (
    <Flex flexDirection="column" h="100vh">
      <Box w="100%" h={64} bg="tomato"></Box>
      <Flex w="100%" h="100%">
        <Box w={480} h="100%" bg="purple"></Box>
        <Box w="100%" h="100%" bg="teal" id="canvasArea">
          <Canvas sketch={sketch} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
