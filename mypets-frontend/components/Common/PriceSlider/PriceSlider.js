import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

function PriceSlider({ onChange }) {
  return (
    <Slider
      aria-label="price-slider"
      defaultValue={50}
      min={5}
      max={150}
      step={15}
      onChange={(val) => onChange(val)}
    >
      <SliderTrack bg="gray.400">
        <SliderFilledTrack bg="mypets.100" />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}

export default PriceSlider;
