import { useState, useEffect } from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { FRONTEND_URL } from "../../utils/urls";

function AutoSearchbar({ mr, products, price }) {
  const router = useRouter();

  const newProductNames = products.map((product) => {
    return product.name.toLowerCase();
  });

  const [productNames, setProductNames] = useState(newProductNames);

  const handleSelectOption = ({ optionValue }) => {
    products.map((product) => {
      if (product.name.toLowerCase() == optionValue) {
        router.push(`${FRONTEND_URL}/products/${String(product.slug)}`);
      }
    });
  };

  return (
    <AutoComplete highlightFirstOption onSelectOption={handleSelectOption}>
      <InputGroup w="xl" mr={mr}>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <AutoCompleteInput
          pl="10"
          size="md"
          focusBorderColor="mypets.100"
          placeholder="Search for products here"
          borderWidth={2}
          variant="filled"
        />
      </InputGroup>
      <AutoCompleteList>
        {productNames.map((productName, id) => (
          <AutoCompleteItem
            key={`product-${id}`}
            value={productName}
            textTransform="capitalize"
          >
            {productName}
          </AutoCompleteItem>
        ))}
      </AutoCompleteList>
    </AutoComplete>
  );
}

export default AutoSearchbar;
