import { RadioGroup, Radio, HStack } from "@chakra-ui/react";

function SexRadioGroup({ field }) {
  const { onChange, ...rest } = field;

  return (
    <RadioGroup {...rest} id="sex" colorScheme="mypets">
      <HStack spacing={8}>
        <Radio onChange={onChange} value="Male">
          Male
        </Radio>
        <Radio onChange={onChange} value="Female">
          Female
        </Radio>
      </HStack>
    </RadioGroup>
  );
}

export default SexRadioGroup;
