import { Box, Button } from "@chakra-ui/react";

import Canvas from "./Canvas";

const CanvasArea = () => {
  return (
    <>
      <Canvas />
      <Box pos="fixed" right={8} bottom={8}>
        <Button borderRadius="100vh">Save</Button>
      </Box>
    </>
  );
};

export default CanvasArea;
