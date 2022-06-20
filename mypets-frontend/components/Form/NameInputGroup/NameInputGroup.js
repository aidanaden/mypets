import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import CheckIcon from "../../icons/CheckIcon";

function NameInputGroup({ field, valid }) {
  return (
    <InputGroup>
      <Input
        {...field}
        id="name"
        placeholder="Name"
        focusBorderColor="mypets.100"
      />
      <InputRightElement
        children={<CheckIcon color={valid ? "green.400" : "white"} />}
      />
    </InputGroup>
  );
}

export default NameInputGroup;
