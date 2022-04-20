import { Stack } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import MypetsBtn from "../../Common/MypetsBtn/MypetsBtn";

export default function index({ ...props }) {
  return (
    <PageContainer bg="white" {...props}>
      <SectionHeader textAlign="center" mb={4}>
        Follow us on our socials
      </SectionHeader>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 4, md: 8 }}
      >
        <MypetsBtn
          as={"a"}
          btnText="@mypets.sg"
          rounded="full"
          w={{ base: "100%", md: "xs" }}
          leftIcon={<FaInstagram />}
        />
        <MypetsBtn
          as={"a"}
          btnText="Mypets"
          rounded="full"
          w={{ base: "100%", md: "xs" }}
          leftIcon={<FaFacebook />}
        />
      </Stack>
    </PageContainer>
  );
}
