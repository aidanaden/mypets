import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { EmailIcon, CheckIcon } from "@chakra-ui/icons";

function EmailInputGroup({ field, valid, ...props }) {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
        <Input
          {...field}
          id="email"
          placeholder="Email"
          focusBorderColor="mypets.100"
          {...props}
        />
        <InputRightElement
          children={<CheckIcon color={valid ? "green.400" : "white"} />}
        />
      </InputGroup>
    </>
  );
}

export default EmailInputGroup;
