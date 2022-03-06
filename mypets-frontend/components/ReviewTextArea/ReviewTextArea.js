import { Textarea } from "@chakra-ui/react";

function ReviewTextArea({ value, onChange, size, props }) {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      placeholder="Write your review here"
      size={size}
      h={36}
      focusBorderColor="mypets.100"
      {...props}
    />
  );
}

export default ReviewTextArea;
