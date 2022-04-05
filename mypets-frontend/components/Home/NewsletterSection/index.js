import SectionHeader from '../../Layouts/SectionHeader/SectionHeader'

function index({ data, ...props }) {
  return (
    <Box>
      <SectionHeader>{data.header}</SectionHeader>
    </Box>
    )
}

export default index;
