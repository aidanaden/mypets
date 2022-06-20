import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import CheckIcon from "../../icons/CheckIcon";
import EmailICon from "../../icons/EmailIcon";

function EmailInputGroup({ field, valid, ...props }) {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<EmailICon />} />
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
