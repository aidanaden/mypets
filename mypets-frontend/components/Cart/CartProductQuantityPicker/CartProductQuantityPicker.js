import { useState, useContext, useEffect } from "react";
import { IconButton, Text, HStack } from "@chakra-ui/react";

import AddIcon from "../../icons/AddIcon";
import MinusIcon from "../../icons/MinusIcon";
import AuthContext from "../../../context/AuthContext";

function CartProductQuantityPicker({ addQuantity, minusQuantity, quantity }) {
  const [qty, setQty] = useState(quantity);
  const { cartLoading } = useContext(AuthContext);

  const combinedAddQuantity = () => {
    addQuantity();
  };

  const combinedMinusQuantity = () => {
    minusQuantity();
  };

  useEffect(() => {
    setQty(quantity);
  }, [quantity]);

  return (
    <HStack w="auto" justifyContent="center">
      <IconButton
        icon={<MinusIcon />}
        size="sm"
        onClick={combinedMinusQuantity}
        // onClick={minusQuantity}
        isLoading={cartLoading}
      />
      <Text w="36px" align="center" alignSelf="center" fontSize="md">
        {qty}
      </Text>
      <IconButton
        icon={<AddIcon />}
        size="sm"
        onClick={combinedAddQuantity}
        // onClick={addQuantity}
        isLoading={cartLoading}
      />
    </HStack>
  );
}

export default CartProductQuantityPicker;
