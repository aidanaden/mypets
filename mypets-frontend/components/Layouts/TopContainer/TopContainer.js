import PageContainer from "../PageContainer/PageContainer";

export default function TopContainer({ ...props }) {
  return (
    <PageContainer
      pt={{ base: 4, lg: 12 }}
      pb={{ base: 512, lg: 96 }}
      {...props}
    >
      {children}
    </PageContainer>
  );
}
