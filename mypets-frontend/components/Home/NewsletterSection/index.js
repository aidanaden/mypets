import {
  Input,
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Formik, Form, Field } from "formik";
const Yup = require("yup");

import PageContainer from "../../Layouts/PageContainer/PageContainer";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";
import EmailInputGroup from "../../Form/EmailInputGroup/EmailInputGroup";
import MypetsBtn from "../../Common/MypetsBtn/MypetsBtn";
import SectionSubHeader from "../../Layouts/SectionSubHeader/SectionSubHeader";

const emailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Your email is required"),
});

function index({ data, ...props }) {
  const toast = useToast();
  const subscribeSuccessToast = (text) =>
    toast({
      title: text,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

  return (
    <PageContainer bg="white" {...props}>
      <SectionHeader textAlign="center" mb={4}>
        {data.Header}
      </SectionHeader>
      <SectionSubHeader textAlign="center" maxW="lg" mb={8} mx="auto">
        {data.Text}
      </SectionSubHeader>
      <Flex
        alignSelf={"center"}
        textAlign="center"
        justifyContent="center"
        w={{ base: "full", md: "xl" }}
        mx="auto"
        bg="red.100"
      >
        <MailchimpSubscribe
          url={""}
          render={({ subscribe, status, message }) => (
            <Formik
              enableReinitialize
              initialValues={{ email: "" }}
              onSubmit={(values, actions) => {
                subscribe(values);
                if (status === "success") {
                  subscribeSuccessToast(
                    "Successfully subscribed to our newsletter!"
                  );
                }
              }}
              validationSchema={emailSchema}
            >
              {(props) => (
                <Form>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <EmailInputGroup
                          field={field}
                          valid={!form.errors.email && form.touched.email}
                          variant="filled"
                          w="full"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <MypetsBtn
                    mt={4}
                    btnText="Subscribe"
                    isLoading={status === "sending"}
                    type="submit"
                    rounded="full"
                    maxW={{ md: "lg" }}
                  />
                </Form>
              )}
            </Formik>
          )}
        />
      </Flex>
    </PageContainer>
  );
}

export default index;
