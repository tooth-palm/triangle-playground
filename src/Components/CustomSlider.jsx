import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";

const CustomSlider = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isPicked, setIsPicked] = useState(false);
  return (
    <Box>
      <Text color="whiteAlpha.700">{props.label}</Text>
      <Slider
        defaultValue={props.default}
        min={props.min}
        max={props.max}
        colorScheme="teal"
        onChange={(v) => props.setValue(v)}
        onChangeStart={() => setIsPicked(true)}
        onChangeEnd={() => setIsPicked(false)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={isHover || isPicked}
          label={String(props.value)}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};

export default CustomSlider;
