import { forwardRef } from "react";
import { Tab } from "@chakra-ui/react";

function MypetsMerchantTab({ tabText, ...props }) {
  return (
    <Tab
      rounded="lg"
      _active={{
        color: "white",
        bgGradient: "linear(to-t, mypets.900, mypets.100)",
      }}
      {...props}
    >
      {tabText}
    </Tab>
  );
}

export default MypetsMerchantTab;
