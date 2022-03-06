import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  Portal,
  Text,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

import PriceSlider from "../PriceSlider/PriceSlider.js";

function PriceFilterPopover({ price, onChange }) {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton icon={<FaFilter />} variant="outline" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Filter by price</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Text>Maximum price: {price}</Text>
          <PriceSlider onChange={onChange} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PriceFilterPopover;
