import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";

const CustomSlider = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Slider
      defaultValue={props.default}
      min={props.min}
      max={props.max}
      colorScheme="gray"
      onChange={(v) => props.setValue(v)}
      onChangeStart={() => setShowTooltip(true)}
      onChangeEnd={() => setShowTooltip(false)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="gray.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={String(props.value)}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export default CustomSlider;
