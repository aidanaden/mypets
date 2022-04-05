import { Stack } from "@chakra-ui/react";

import CategoryBtn from "../CategoryBtn/CategoryBtn";

export default function CategoryList({
  direction = "row",
  categories,
  setSelectedCategory,
  ...props
}) {
  return (
    <></>
    // <Stack
    //     mt={{ lg: 0 }}
    //     direction={{ base: 'row', lg: direction }}
    //     overflow={{ base: 'auto' }}
    //     {...props}
    // >
    //     {categories.map((cat, i) => (
    //         <CategoryBtn
    //             cat={cat}
    //             key={i}
    //             onClick={setSelectedCategory}
    //         />
    //     ))}
    // </Stack>
  );
}
