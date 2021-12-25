import { Box, Flex, Text } from "@chakra-ui/react";
import MediaQuery from "react-responsive";

import Canvas from "./Components/Canvas";
import sketch from "./sketch";

function App() {
  return (
    <Flex flexDirection="column" h="100vh">
      <Box
        w="100%"
        h={16}
        pl="4"
        display="flex"
        alignItems="center"
        bg="tomato"
      >
        <Text fontSize="2xl" color="white">
          Generative Art Playground
        </Text>
      </Box>
      <MediaQuery query="(min-width: 820px)">
        <Flex w="100%" h="100%" alignItems="stretch">
          <Box flexBasis={320} flexGrow={0} bg="purple"></Box>
          <Box flexGrow={1} bg="teal" id="canvasArea">
            {/* <Canvas sketch={sketch} /> */}
          </Box>
        </Flex>
      </MediaQuery>
      <MediaQuery query="(max-width: 820px)">
        <Flex w="100%" h="100%" flexDirection="column">
          <Box flexBasis="300" flexGrow={0} bg="teal" id="canvasArea">
            {/* <Canvas sketch={sketch} /> */}
          </Box>
          <Box flexGrow={1} bg="purple"></Box>
        </Flex>
      </MediaQuery>
    </Flex>
  );
}

export default App;
