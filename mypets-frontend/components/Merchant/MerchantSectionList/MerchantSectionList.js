import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import MerchantCard from "../MerchantCard/MerchantCard";

function MerchantSectionList({ merchants, spacing = 4 }) {
  return (
    <Box>
      <SectionHeader>Available Brands</SectionHeader>
      <SimpleGrid
        mt={0}
        w="100%"
        justifyContent="left"
        spacing={spacing}
        pb={{ base: 4 }}
        columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
      >
        {merchants.map((merchant, index) => (
          <MerchantCard key={index} merchant={merchant} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default MerchantSectionList;
