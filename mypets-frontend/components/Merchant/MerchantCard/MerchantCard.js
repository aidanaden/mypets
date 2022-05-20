import React from "react";
import { Box, Center, Tooltip } from "@chakra-ui/react";
import { imageToUrl } from "../../../utils/urls";
import NextImage from "next/image";
import NextLink from "next/link";

function MerchantCard({ merchant }) {
  return (
    <NextLink href={`/merchants/${merchant.slug}`}>
      <a>
        <Center
          rounded="xl"
          p={{ base: 3 }}
          // height={{ base: '86px', md: '123px' }}
          // width={{ base: '172px', md: '246px' }}
          borderWidth="1px"
          shadow="sm"
          _hover={{
            shadow: "lg",
          }}
        >
          <NextImage
            src={`${imageToUrl(merchant.display_image)}`}
            width="224"
            height="112"
          />
        </Center>
      </a>
    </NextLink>
  );
}

export default MerchantCard;
