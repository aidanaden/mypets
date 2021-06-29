import { useState } from 'react'
import { 
    Box, 
    Flex, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    useToast
} from "@chakra-ui/react"

import MerchantReviewsList from '../MerchantReviewsList/MerchantReviewsList'
import ProductSectionList from '../ProductSectionList/ProductSectionList'
import SortMenu from '../SortMenu/SortMenu'
import CategoryList from '../CategoryList/CategoryList'
import MypetsMerchantTab from '../MypetsMerchantTab/MypetsMerchantTab'

function MerchantProductReviewTab({ merchantProducts, categories, merchantReviews}) {

    const [sortMethod, setSortMethod] = useState('pop')
    const [selectedCategory, setSelectedCategory] = useState('All products')
    const fullCategories = ['All products'].concat(categories)
    const toast = useToast()

    const setCategorySelected = (cat) => {
        setCategoryToast(cat)
        setSelectedCategory(cat)
    }

    const setCategoryToast = (text) => toast({
        title: `Loading ${text}...`,
        status: 'info',
        duration: 3000,
        isClosable: true,
    })

    return (
        <Tabs variant='unstyled' size='md' defaultIndex={0} mt={12} p={0}>
            <TabList
                justifyContent='center'
            >
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
            <TabPanels mt={4} px={0}>
                <TabPanel px={0}>
                    <Flex justifyContent='space-between' direction="row">
                        <Box w="100%" mr={12}>
                            <ProductSectionList 
                                products={merchantProducts} 
                                categories={fullCategories}
                                sortMethod={sortMethod}
                                setSortMethod={setSortMethod}
                                selectedCategory={selectedCategory}
                                setCategorySelected={setCategorySelected}
                            />
                        </Box>
                        <Flex direction="column" maxW='210px' display={{ base: 'none', lg: 'inherit' }}>
                            <SortMenu setSortMethod={setSortMethod}/>
                            <CategoryList categories={fullCategories} setSelectedCategory={setCategorySelected}/>
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
