import PageContainer from "../PageContainer/PageContainer";

export default function FooterContainer() {
  return (
    <PageContainer pt={{ base: 4, lg: 12 }} pb={{ base: 4, lg: 12 }} {...props}>
      {children}
    </PageContainer>
  );
}
