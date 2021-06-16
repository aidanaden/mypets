import { useState } from 'react'
import { Box, Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import MerchantReviewsList from '../MerchantReviewsList/MerchantReviewsList'
import ProductSectionList from '../ProductSectionList/ProductSectionList'
import SortMenu from '../SortMenu/SortMenu'
import CategoryList from '../CategoryList/CategoryList'
import MypetsMerchantTab from '../MypetsMerchantTab/MypetsMerchantTab'

function MerchantProductReviewTab({ merchantProducts, categories, merchantReviews}) {

    const [sortMethod, setSortMethod] = useState('pop')
    const [selectedCategory, setSelectedCategory] = useState('All products')
    const fullCategories = ['All products'].concat(categories)

    return (
        <Tabs align='center' variant='unstyled' size='md' defaultIndex={0} mt={12}>
            <TabList>
                <Tab 
                    rounded='full' 
                    _active={{ 
                        color: 'white', 
                        bgGradient: "linear(to-t, mypets.900, mypets.100)" 
                    }} 
                    _selected={{ 
                        color: 'white', 
                        bgGradient: "linear(to-t, mypets.900, mypets.100)" 
                    }}
                    mr={4}
                >
                    Products
                </Tab>
                <Tab 
                    rounded='full' 
                    _active={{ 
                        color: 'white', 
                        bgGradient: "linear(to-t, mypets.900, mypets.100)" 
                    }} 
                    _selected={{ 
                        color: 'white', 
                        bgGradient: "linear(to-t, mypets.900, mypets.100)" 
                    }}
                >
                    Reviews
                </Tab>
            </TabList>
            <TabPanels mt={4}>
                <TabPanel>
                    <Flex justifyContent='space-between' direction="row">
                        <Box w="100%" mr={12}>
                            <ProductSectionList products={merchantProducts} selectedCategory={selectedCategory} sortMethod={sortMethod}/>
                        </Box>
                        <Flex direction="column" w='210px'>
                            <SortMenu setSortMethod={setSortMethod}/>
                            <CategoryList categories={fullCategories} setSelectedCategory={setSelectedCategory}/>
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
