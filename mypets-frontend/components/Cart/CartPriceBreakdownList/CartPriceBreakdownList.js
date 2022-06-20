import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Text,
  Spacer,
} from "@chakra-ui/react";

import {
  TAX_AMT,
  CONTRIBUTION_AMT,
  DELIVERY_FEE,
  MINIMUM_ORDER_FREE_DELIVERY,
} from "../../../utils/urls";

const SubtotalRow = ({ text, value, highlight }) => {
  return (
    <Stack direction="row">
      <Text textColor={highlight && "mypets.400"}>{text}</Text>
      <Spacer />
      <Text>{value}</Text>
    </Stack>
  );
};

export default function CartPriceBreakdownList({
  groupedProducts,
  productNames,
  totalPrice,
}) {
  const gstPrice = totalPrice * TAX_AMT;
  // const deliveryFee =
  //   totalPrice >= MINIMUM_ORDER_FREE_DELIVERY ? 0.0 : DELIVERY_FEE;
  const deliveryFee = DELIVERY_FEE;
  const finalPrice = 1.0 * (totalPrice + gstPrice + deliveryFee);

  const productTotalQuantity = (order_products) => {
    let totalQuantity = 0;
    order_products.map((order_product) => {
      totalQuantity += order_product.quantity;
    });
    return totalQuantity;
  };

  const productTotalPrice = (order_products) => {
    let totalPrice = 0;
    order_products.map((order_product) => {
      totalPrice += order_product.total_price;
    });
    return totalPrice;
  };

  return (
    <>
      <Table
        variant="simple"
        size={{ base: "sm", lg: "md" }}
        my={{ base: 8, lg: 8 }}
      >
        <Thead>
          <Tr fontSize="xs" textColor="grey.400">
            <Th>Product</Th>
            <Th>Qty</Th>
            <Th textAlign="right">Subtotal</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productNames.map((productName, i) => (
            <Tr key={i} fontWeight="bold">
              <Td>{productName}</Td>
              <Td>{productTotalQuantity(groupedProducts[productName])}</Td>
              <Td textAlign="right">
                {productTotalPrice(groupedProducts[productName]).toFixed(2)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Stack direction="column" spacing={0}>
        <SubtotalRow text="Subtotal" value={totalPrice.toFixed(2)} />
        {/* <SubtotalRow
                    text='GST charge'
                    value={gstPrice.toFixed(2)}
                /> */}
        <SubtotalRow text="Delivery fee" value={deliveryFee.toFixed(2)} />
        <SubtotalRow
          highlight
          text="Your contributions (included)"
          value={CONTRIBUTION_AMT.toFixed(2)}
        />
      </Stack>
      <Box fontWeight="bold" fontSize="xl" textAlign="right" mt={4}>
        SG${finalPrice.toFixed(2)}
      </Box>
    </>
  );
}
