import { Box } from "@chakra-ui/react";
import SectionHeader from "../../Layouts/SectionHeader/SectionHeader";

function index({ data, ...props }) {
  return (
    <Box>
      <SectionHeader>{data.Header}</SectionHeader>
    </Box>
  );
}

export default index;
