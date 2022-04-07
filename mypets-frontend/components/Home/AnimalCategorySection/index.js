import { Box, Spacer, Stack } from "@chakra-ui/react";

import SectionHeader from "../components/Layouts/SectionHeader/SectionHeader";
import AnimalList from "../components/Common/AnimalList/AnimalList";
import SortMenu from "../components/Common/SortMenu/SortMenu";

function index({ pageAnimals, setSelectedAnimal, setSortMethod }) {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align="stretch"
      justify="space-between"
    >
      <Box mb={{ base: 2, md: 0 }}>
        <SectionHeader>Animal</SectionHeader>
        <AnimalList
          animals={pageAnimals}
          setSelectedAnimal={setSelectedAnimal}
        />
      </Box>
      <Spacer />
      <SortMenu setSortMethod={setSortMethod} />
    </Stack>
  );
}

export default index;
