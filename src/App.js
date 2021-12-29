import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import MediaQuery from "react-responsive";
import Canvas from "./Components/Canvas";

import Tools from "./Components/Tools";

function App() {
  const [sketchValues, setSketchValues] = useState({
    strokeWeight: 2,
    strokeAlpha: 100,
    fillAlpha: 0,
    density1: 10,
    density2: 3,
  });
  console.log(sketchValues);
  return (
    <Flex flexDirection="column" h="100vh">
      <Box
        w="100%"
        h="10%"
        pl="4"
        display="flex"
        alignItems="center"
        bg="teal.700"
      >
        <Text fontSize="2xl" color="white">
          Generative Art Playground
        </Text>
      </Box>
      <MediaQuery query="(min-width: 620px)">
        <Flex w="100%" h="90%" alignItems="stretch">
          <Box width="30%" bg="#333333">
            <Tools padding={5} setValues={setSketchValues} />
          </Box>
          <Box
            width="70%"
            py="5%"
            bg="black"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="flex-start"
            overflowY="scroll"
          >
            <Box
              width="100%"
              display="flex"
              flexWrap="Wrap"
              justifyContent="center"
              id="canvasArea"
            >
              <Canvas values={sketchValues} />
            </Box>
          </Box>
        </Flex>
      </MediaQuery>
      <MediaQuery query="(max-width: 620px)">
        <Flex
          w="100%"
          h="90%"
          overflowY="scroll"
          flexDirection="column"
          alignItems="stretch"
          bg="#333333"
        >
          <Box
            width="100%"
            height="50%"
            bg="black"
            display="flex"
            overflowX="scroll"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="300px" display="flex" flexWrap="noWrap" id="canvasArea">
              <Canvas values={sketchValues} />
            </Box>
          </Box>
          <Box height="50%" bg="#333333">
            <Tools padding={10} setValues={setSketchValues} />
          </Box>
        </Flex>
      </MediaQuery>
    </Flex>
  );
}

export default App;
