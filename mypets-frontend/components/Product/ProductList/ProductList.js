import { useEffect, useState } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import ProductListCard from "../ProductListCard/ProductListCard";

function ProductList({
  heading,
  products,
  sortMethod,
  selectedAnimal,
  selectedMerchants,
  maxRows,
}) {
  const [listProducts, setListProducts] = useState(products);
  const sliceIndex = maxRows == 0 ? listProducts.length : 5 * maxRows;

  const sortProductsAscending = (products) => {
    products.sort((a, b) =>
      a.variants[0].price < b.variants[0].price ? -1 : 1
    );
  };

  const sortProductsDescending = (products) => {
    products.sort((a, b) =>
      a.variants[0].price < b.variants[0].price ? 1 : -1
    );
  };

  const sortProductsPopularity = (products) => {
    products.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  };

  if (sortMethod == "asc") {
    sortProductsAscending(products);
  } else if (sortMethod == "desc") {
    sortProductsDescending(products);
  } else if (sortMethod == "pop") {
    sortProductsPopularity(products);
  }

  const filterProductsByAnimalMerchants = (
    products,
    animal,
    selectedMerchants
  ) => {
    if (animal && animal != "") {
      if (selectedMerchants) {
        if (selectedMerchants.length == 0) {
          const filteredProducts = products.filter((product) => {
            if (product.animal.name == animal) {
              return product;
            }
          });
          return filteredProducts;
        }
        const filteredProducts = products.filter((product) => {
          if (
            product.animal.name == animal &&
            selectedMerchants.includes(product.merchant.name)
          ) {
            return product;
          }
        });
        return filteredProducts;
      } else {
        const filteredProducts = products.filter((product) => {
          if (product.animal.name == animal) {
            return product;
          }
        });
        return filteredProducts;
      }
    } else {
      if (selectedMerchants) {
        if (selectedMerchants.length == 0) {
          return products;
        }
        const filteredProducts = products.filter((product) => {
          if (selectedMerchants.includes(product.merchant.name)) {
            return product;
          }
        });
        return filteredProducts;
      } else {
        console.log("returning products: ", products);
        return products;
      }
    }
  };

  useEffect(() => {
    setListProducts(products);
  }, [products]);

  useEffect(() => {
    const filteredProducts = filterProductsByAnimalMerchants(
      products,
      selectedAnimal,
      selectedMerchants
    );
    setListProducts(filteredProducts);
  }, [selectedMerchants, selectedAnimal]);

  return (
    <Box>
      {listProducts && listProducts.length > 0 && (
        <>
          <SectionHeader>{heading}</SectionHeader>
          <SimpleGrid
            columns={{ base: 2, md: 4, lg: 4, xl: 5 }}
            spacing={{ base: 4 }}
          >
            {listProducts.slice(0, sliceIndex).map((product, index) => (
              <ProductListCard product={product} key={index} />
            ))}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
}

export default ProductList;
