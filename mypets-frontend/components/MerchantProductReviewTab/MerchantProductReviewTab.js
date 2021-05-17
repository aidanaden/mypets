import { useState } from 'react'
import { Box, Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import MerchantReviewsList from '../MerchantReviewsList/MerchantReviewsList'
import ProductSectionList from '../ProductSectionList/ProductSectionList'
import SortMenu from '../SortMenu/SortMenu'
import CategoryList from '../CategoryList/CategoryList'
import MerchantReviewsList from '../MerchantReviewsList/MerchantReviewsList'

function MerchantProductReviewTab({ merchantProducts, merchantReviews}) {

    const [sortMethod, setSortMethod] = useState('pop')

    return (
        <Tabs align='center' variant='solid-rounded' size='md'>
            <TabList>
                <Tab mr={4}>Products</Tab>
                <Tab>Reviews</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Flex justifyContent='space-between' direction="row">
                        <Box w="100%" mr={12}>
                            <ProductSectionList products={merchantProducts} sortMethod={sortMethod}/>
                        </Box>
                        <Flex direction="column" w='210px'>
                            <SortMenu setSortMethod={setSortMethod}/>
                            <CategoryList categories={categories}/>
                        </Flex>
                    </Flex>
                </TabPanel>
                <TabPanel>
                    <MerchantReviewsList reviews={merchantReviews}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default MerchantProductReviewTab
