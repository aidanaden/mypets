import { useContext } from "react";
import { Box, useToast } from "@chakra-ui/react";

import AuthContext from "../context/AuthContext";
import PageContainer from "../components/Layouts/PageContainer/PageContainer";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
import { API_CATEGORIES_URL } from "../utils/urls";
import SectionHeader from "../components/Layouts/SectionHeader/SectionHeader";
import UserPasswordForm from "../components/Form/UserPasswordForm/UserPasswordForm";

export default function reset({ categories }) {
  const toast = useToast();
  const { user, updateUserPassword } = useContext(AuthContext);

  const passwordSuccessToast = (text) =>
    toast({
      title: text,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

  const handleUserPasswordChange = (values, actions) => {
    try {
      actions.setSubmitting(true);
      updateUserPassword(values);
    } catch (err) {
      console.error(err);
    }
    actions.setSubmitting(false);
    passwordSuccessToast("Password successfully updated");
  };

  return (
    <Box>
      <Sidebar categories={categories} />
      <PageContainer>
        <SectionHeader>Reset your password</SectionHeader>
        <UserPasswordForm handleSubmit={handleUserPasswordChange} />
      </PageContainer>
    </Box>
  );
}

export async function getStaticProps() {
  // Fetch categories
  const categories_res = await fetch(`${API_CATEGORIES_URL}`);
  const categories = await categories_res.json();

  // Return as props
  return {
    props: {
      categories,
    },
  };
}
