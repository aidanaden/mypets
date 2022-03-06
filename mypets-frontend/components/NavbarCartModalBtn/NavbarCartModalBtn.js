import { useContext, useEffect, useState } from "react";
import {
  Stack,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Center,
} from "@chakra-ui/react";
import lodash from "lodash";
import { loadStripe } from "@stripe/stripe-js";
import { FaShoppingCart } from "react-icons/fa";

import AuthContext from "../../context/AuthContext";
import { callAPI } from "../../context/AuthContext";
import MypetsBtn from "../MypetsBtn/MypetsBtn";
import CartIconBtn from "../CartIconBtn/CartIconBtn";
import CartModalProductCard from "../CartModalProductCard/CartModalProductCard";
import CartPriceBreakdownList from "../CartPriceBreakdownList/CartPriceBreakdownList";
import { STRIPE_PK } from "../../utils/urls";

const stripePromise = loadStripe(STRIPE_PK);

/**
 * Cart containing array of different products
 * e.g. products = [product1, product2, ...]
 *
 * @param  {[product]} Products
 */
function NavbarCartModalBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, cart, clearCart } = useContext(AuthContext);
  const toast = useToast();

  const [totalPrice, setTotalPrice] = useState(0);
  const [numOrderProducts, setNumOrderProducts] = useState(0);
  const [groupedProducts, setGroupedProducts] = useState(null);
  const [productNames, setProductNames] = useState(null);

  const minimumOrderToast = () =>
    toast({
      title: "Minimum order value of $15 not reached",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

  const checkoutErrorToast = () =>
    toast({
      title: "Error checking out",
      description:
        "Error occured when trying to check out. Try again or email us at contact@mypets.sg",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

  const handleCheckout = async () => {
    if (totalPrice < 15) {
      minimumOrderToast();
    } else {
      const stripe = await stripePromise;
      const session = await callAPI("/orders", "POST", cart);
      if (!session.id) {
        console.error("Session does not contain id, failed to create order");
      }
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error);
        checkoutErrorToast();
      }
    }
  };

  useEffect(() => {
    if (cart) {
      setTotalPrice(cart.total_price);
      var tempNumOrderProducts = 0;
      cart.order_products.map((order_product) => {
        tempNumOrderProducts += order_product.quantity;
      });
      setNumOrderProducts(tempNumOrderProducts);
      setGroupedProducts(
        lodash.groupBy(cart.order_products, "variant.product.name")
      );
      setProductNames(
        Object.keys(lodash.groupBy(cart.order_products, "variant.product.name"))
      );
    }
  }, [cart]);

  return (
    <>
      <CartIconBtn
        cartNumOrderProducts={numOrderProducts}
        onClick={onOpen}
        mx={0}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
        size="full"
        closeOnOverlayClick={{ base: false, lg: true }}
      >
        <ModalOverlay />
        <ModalContent
          maxW={{ lg: 1200 }}
          w={{ base: "100%", lg: 1100 }}
          h={{ base: "100%", lg: "auto" }}
          minH={{ lg: 500 }}
          mx={{ base: 4 }}
        >
          <ModalHeader>Your Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody w="100%">
            {groupedProducts && totalPrice > 0.1 ? (
              <Stack
                direction={{ base: "column", lg: "row" }}
                spacing={{ base: 8, lg: 16 }}
              >
                <Box w={{ base: "auto", lg: "50%" }}>
                  {productNames.map((productName, i) => (
                    <CartModalProductCard
                      order_products={groupedProducts[productName]}
                      onClose={onClose}
                      key={i}
                    />
                  ))}
                </Box>
                <Box flex="1" pb={{ base: 4, lg: 4 }}>
                  <Center rounded="lg" p={{ base: 5 }} bg="gray.200">
                    With every purchase, we will donate 5% of the total receipt
                    order (exclu. Delivery fees) to local pet communities
                  </Center>
                  <CartPriceBreakdownList
                    groupedProducts={groupedProducts}
                    productNames={productNames}
                    totalPrice={totalPrice}
                  />
                  <MypetsBtn
                    btnText="Checkout"
                    onClick={handleCheckout}
                    w="stretch"
                    mt={6}
                  />
                </Box>
              </Stack>
            ) : (
              <>
                <Stack
                  justifyContent="center"
                  w="100%"
                  h={400}
                  alignItems="center"
                >
                  No products in your cart!
                </Stack>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavbarCartModalBtn;
