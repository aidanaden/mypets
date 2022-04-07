import { Stack, Box } from "@chakra-ui/react";

import ProductList from "../ProductList/ProductList";
import { getCategories } from "../../../utils/urls";

function ProductSectionList({ products, sortMethod, selectedAnimal }) {
  const filterProductsByAnimal = (products, animal) => {
    if (animal != "") {
      const filteredProducts = products.filter((product) => {
        if (product.animal.name == animal) {
          return product;
        }
      });
      return filteredProducts;
    } else {
      return products;
    }
  };

  const filterProductsByCategory = (products, category) => {
    const filteredProducts = products.filter((product) => {
      if (product.category.name == category) {
        return product;
      }
    });
    return filteredProducts;
  };

  const productByAnimal = filterProductsByAnimal(products, selectedAnimal);
  const categoryOnly = getCategories(productByAnimal);

  return (
    <PageContainer>
      <Box w="100%">
        <Stack direction="column" spacing={{ base: 8, lg: 12 }}>
          {categoryOnly.map((category, i) => (
            <ProductList
              key={i}
              heading={category}
              sortMethod={sortMethod}
              selectedAnimal={""}
              products={filterProductsByCategory(productByAnimal, category)}
              maxRows={0}
            />
          ))}
        </Stack>
      </Box>
    </PageContainer>
  );
}

export default ProductSectionList;
