import { useContext, useState, useEffect } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
const Yup = require("yup");
require("yup-password")(Yup);

import AuthContext from "../../context/AuthContext";
import MypetsBtn from "../MypetsBtn/MypetsBtn";
import EmailInputGroup from "../EmailInputGroup/EmailInputGroup";
import LoginSocialBtnGroup from "../LoginSocialBtnGroup/LoginSocialBtnGroup";

export default function ForgetPasswordModalBtn() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { resetPasswordUser } = useContext(AuthContext);

  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    const status = await resetPasswordUser(values, toast);
    if (status) {
      onClose();
    }
    actions.setSubmitting(false);
  };

  const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Your email is required"),
  });

  return (
    <>
      <Button
        variant="link"
        mb={4}
        fontSize="sm"
        textColor="gray.600"
        onClick={onOpen}
      >
        Forget password?
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: 4 }}>
          <ModalHeader>Reset password</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={2}>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={handleSubmit}
              validationSchema={forgetPasswordSchema}
            >
              {(props) => (
                <Form>
                  <Box mb={4}>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel>Email</FormLabel>
                          <EmailInputGroup
                            field={field}
                            valid={!form.errors.email && form.touched.email}
                          />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <MypetsBtn
                    btnText="Submit"
                    w="100%"
                    mx={0}
                    mt={4}
                    isLoading={props.isSubmitting}
                    type="submit"
                  />
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
