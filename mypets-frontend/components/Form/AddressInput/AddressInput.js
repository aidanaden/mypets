import { Input } from "@chakra-ui/react";

function AddressInput({ field }) {
  return (
    <Input
      {...field}
      id="address"
      placeholder="Address"
      focusBorderColor="mypets.100"
    />
  );
}

export default AddressInput;
