import { Stack, Box, Center, Text, Image } from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import MypetsBtn from "../../Common/MypetsBtn/MypetsBtn";

export default function index({ ...props }) {
  return (
    <>
      <PageContainer bg="white" {...props}>
        <SectionHeader textAlign="center" mb={{ base: 4, md: 8 }}>
          Follow us on our socials
        </SectionHeader>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 8 }}
          alignSelf={"center"}
          textAlign="center"
          justifyContent="center"
          mx="auto"
        >
          <MypetsBtn
            as={"a"}
            btnText="@mypets.sg"
            rounded="full"
            w={{ base: "100%", md: "xs" }}
            leftIcon={<FaFacebook w={16} h={16} />}
            cursor="pointer"
            href="https://www.facebook.com/mypets.sg/"
          />
          <MypetsBtn
            as={"a"}
            btnText="Mypets"
            rounded="full"
            w={{ base: "100%", md: "xs" }}
            leftIcon={<FaInstagram w={16} h={16} />}
            cursor="pointer"
            href="https://www.instagram.com/mypets.sg/"
          />
        </Stack>
      </PageContainer>
      <Box bg="gray.200" mt={{ base: 8, lg: 12 }}>
        <PageContainer pb={{ base: 8, lg: 12 }}>
          <Center>
            <Box align={"center"} alignItems="center" justifyContent="center">
              <Text fontWeight="bold" textTransform="capitalize">
                proudly supported by
              </Text>
              <Image
                src="/enterprise-sg-logo.svg"
                objectFit={"cover"}
                width={320}
                height={160}
                alignSelf="center"
                mx="auto"
              />
            </Box>
          </Center>
        </PageContainer>
      </Box>
    </>
  );
}
