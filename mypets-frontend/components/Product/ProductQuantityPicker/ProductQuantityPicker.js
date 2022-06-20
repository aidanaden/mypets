import React from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import AddIcon from "../../icons/AddIcon";
import MinusIcon from "../../icons/MinusIcon";

function ProductQuantityPicker({
  addQuantity,
  minusQuantity,
  quantity = 1,
  ...props
}) {
  return (
    <Flex {...props}>
      <IconButton icon={<MinusIcon />} size="sm" onClick={minusQuantity} />
      <Text w="42px" align="center" alignSelf="center" fontSize="xl">
        {quantity}
      </Text>
      <IconButton icon={<AddIcon />} size="sm" onClick={addQuantity} />
    </Flex>
  );
}

export default ProductQuantityPicker;
