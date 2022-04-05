import { useContext, useState, useEffect } from "react";
import { Stack, HStack, Text, Spacer, Center, Box } from "@chakra-ui/react";

import AnnouncementBanner from "../../components/Layouts/AnnouncementBanner/AnnouncementBanner";
import Sidebar from "../../components/Layouts/Sidebar/Sidebar";
import PageContainer from "../../components/Layouts/PageContainer/PageContainer";
import BackBtn from "../../components/Common/BackBtn/BackBtn";
import OrderCard from "../../components/OrderCard/OrderCard";
import AuthContext, { callAPI } from "../../context/AuthContext";
import Section from "../../components/Layouts/Section/Section";
import SectionHeader from "../../components/Layouts/SectionHeader/SectionHeader";
import MypetsBtn from "../../components/Common/MypetsBtn/MypetsBtn";
import { API_HOME_URL, stringToDate } from "../../utils/urls";

const ContributionRow = ({ order }) => {
  return (
    <HStack
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      py={{ base: 2 }}
    >
      <Stack direction="column" spacing={1}>
        <Text fontSize="lg" textColor="mypets.400">
          {order.order_id}
        </Text>
        <Text>{stringToDate(order.order_date)}</Text>
      </Stack>
      <Spacer />
      <Text as="h5" fontSize="2xl">
        ${order.contribution_amount}
      </Text>
    </HStack>
  );
};

const ContributionSection = ({ orders }) => {
  var totalContribution = 0;
  orders.map((order) => (totalContribution += order.contribution_amount));

  return (
    <Box mb={{ base: 8 }}>
      <SectionHeader>Contribution History</SectionHeader>
      <Section>
        <Stack
          direction={{ base: "column", md: "row" }}
          // spacing={{ base: 4 }}
          justifyContent="space-between"
        >
          <Box>
            <SectionHeader textColor="mypets.400">
              Your total contribution
            </SectionHeader>
            <Text fontSize={{ base: "4xl" }} textColor="mypets.400">
              ${totalContribution.toFixed(2)}
            </Text>
          </Box>
          <Spacer />
          <Center rounded="lg" p={{ base: 5 }} bg="gray.200">
            With every purchase, we will donate 5% of the total receipt order
            (exclu. Delivery fees) to local pet communities
          </Center>
        </Stack>
        <Text mt={{ base: 8 }} as="h5" fontSize={{ base: "lg", md: "xl" }}>
          Recent Contributions
        </Text>
        <Stack mt={{ base: 2 }} direction="column" spacing={{ base: 1 }}>
          {orders.map((order, i) => (
            <ContributionRow key={i} order={order} />
          ))}
        </Stack>
        <Box textAlign="center" mt={{ base: 8 }}>
          <MypetsBtn btnText="View all Contributions" />
        </Box>
      </Section>
    </Box>
  );
};

const OrderSection = ({ orders }) => {
  return (
    <Box>
      <SectionHeader>Order History</SectionHeader>
      <Stack direction="column" spacing={{ base: 4 }}>
        {orders.map((order, i) => (
          <OrderCard key={i} order={order} />
        ))}
      </Stack>
    </Box>
  );
};

const getOrders = (user) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        setLoading(true);
        const data = await callAPI("/orders", "GET");
        setOrders(data);
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user]);
  return { orders, loading };
};

export default function Orders({ bannerText }) {
  const { user } = useContext(AuthContext);
  const { orders, loading } = getOrders(user);

  return (
    <Box>
      <AnnouncementBanner text={bannerText} />
      <Sidebar />
      <PageContainer>
        <BackBtn variant="home" />
        {orders.length > 0 && <ContributionSection orders={orders} />}
        {orders.length > 0 ? (
          <OrderSection orders={orders} />
        ) : (
          <Center h="70vh">No orders available 😢</Center>
        )}
      </PageContainer>
    </Box>
  );
}

export async function getStaticProps() {
  // Fetch home page banner images + top banner text
  const home_res = await fetch(`${API_HOME_URL}`);
  const home_data = await home_res.json();

  // Return as props
  return {
    revalidate: 1,
    props: {
      bannerText: home_data.banner_text,
    },
  };
}
