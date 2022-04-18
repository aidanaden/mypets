import { Stack, Center, Icon } from "@chakra-ui/react";
import { FaCat, FaDog } from "react-icons/fa";

const AnimalButton = ({ animal, onClick, ...props }) => {
  return (
    <Center
      // w="100%"
      py={{ base: 4, lg: 4 }}
      px={{ base: 4, lg: 8 }}
      rounded="md"
      bgColor="gray.100"
      textColor="gray.600"
      fontSize="lg"
      _hover={{
        bgGradient: "linear(to-t, mypets.900, mypets.100)",
        textColor: "gray.100",
        cursor: "pointer",
      }}
      _active={{ transform: "scale(0.95)" }}
      onClick={onClick}
      {...props}
    >
      {animal == "Cat" ? (
        <Icon as={FaCat} mr={{ base: 1 }} />
      ) : animal == "Dog" ? (
        <Icon as={FaDog} mr={{ base: 1 }} />
      ) : (
        <></>
      )}
      {animal}
    </Center>
  );
};

export default function AnimalList({ animals, setSelectedAnimal }) {
  console.log("animals in animalList: ", animals);

  const animalBtnClicked = (animal) => {
    setSelectedAnimal(animal);
  };

  return (
    <Stack
      mt={{ lg: 0 }}
      direction={{ base: "row" }}
      overflow={{ base: "auto" }}
      spacing={{ base: 4 }}
    >
      {animals.map((animal, i) => (
        <AnimalButton
          key={i}
          animal={animal}
          onClick={() => animalBtnClicked(animal)}
        />
      ))}
    </Stack>
  );
}
