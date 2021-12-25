import { Box, Button, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import MediaQuery from "react-responsive";

import CustomSlider from "./CustomSlider";

const Tools = (props) => {
  const [strokeWeight, setStrokeWeight] = useState(2);
  const [strokeAlpha, setStrokeAlpha] = useState(100);
  const [fillAlpha, setFillAlpha] = useState(0);
  const [density1, setDensity1] = useState(10);
  const [density2, setDensity2] = useState(3);

  const sliders = [
    {
      label: "Stroke Weight",
      min: 1,
      max: 5,
      value: strokeWeight,
      setValue: setStrokeWeight,
    },
    {
      label: "Stroke Alpha",
      min: 0,
      max: 255,
      value: strokeAlpha,
      setValue: setStrokeAlpha,
    },
    {
      label: "Fill Alpha",
      min: 0,
      max: 255,
      value: fillAlpha,
      setValue: setFillAlpha,
    },
    {
      label: "Density 1",
      min: 1,
      max: 20,
      value: density1,
      setValue: setDensity1,
    },
    {
      label: "Density 2",
      min: 1,
      max: 10,
      value: density2,
      setValue: setDensity2,
    },
  ];

  const RedrawButton = () => {
    return <Button>Redraw</Button>;
  };

  return (
    <Box p={props.padding}>
      <VStack spacing={4} align="stretch">
        <MediaQuery query="(max-width: 620px)">
          <RedrawButton />
          <Spacer />
        </MediaQuery>
        {sliders.map((s) => (
          <CustomSlider
            label={s.label}
            default={s.value}
            min={s.min}
            max={s.max}
            value={s.value}
            setValue={s.setValue}
          />
        ))}
        <MediaQuery query="(min-width: 620px)">
          <Spacer />
          <RedrawButton />
        </MediaQuery>
      </VStack>
    </Box>
  );
};

export default Tools;
