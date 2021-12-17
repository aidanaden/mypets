import {
    Box,
    Text
} from '@chakra-ui/react'

import PageContainer from '../components/PageContainer/PageContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { API_CATEGORIES_URL } from '../utils/urls'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import SectionSubHeader from '../components/SectionSubHeader/SectionSubHeader'
import ParagraphSection from '../components/ParagraphSection/ParagraphSection'

export default function faq({ categories }) {

    return (
        <Box minH='100vh'>
            <Sidebar categories={categories} />
            <PageContainer>
                <SectionHeader>
                    Customer FAQ
                </SectionHeader>
                <SectionSubHeader>
                    Last updated: 08/12/21
                </SectionSubHeader>
                <ParagraphSection
                    heading="General Information:"
                    text='- Live Chat (Support): 9am to 12pm & 2pm to 6pm (Mon-Fri)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Email: support@mypets.sg (reply within 2 working days)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Whatsapp/Phone-call: +65 9126 4942 (anytime)'
                />
                <ParagraphSection
                    heading="Delivery days"
                    text='As MyPets is a new startup with limited resources, we aim to provide the best service to our users within our capabilities.
    
                    As such, we aim to deliver your order(s) within 3 days from the date of purchase.
                    
                    In the event, where we expect a delay on our end, we will inform you in advance with due diligence about the change in delivery schedule and liaise with you about the new delivery day based on your convenience.'
                />
                <ParagraphSection
                    heading='Delivery timing'
                    text='Mypets will deliver your order to your doorstep anytime between 12pm to 10pm. Before delivering to your doorstep, we will inform you via text message/phone call.'
                />
                <ParagraphSection
                    heading='Can I request a change in delivery day/location?'
                    text='If you have already placed an order via our website and wishes to opt for a change in delivery day/timing, please reach out to us via this channel:'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='Live Chat (Support): 9am to 12pm & 2pm to 6pm (Mon - Fri)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='Whatsapp/Phone Call: 24-7'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='If there is a change in delivery address/location , we will require a 1-day notice to accommodate your request.'
                />
                <ParagraphSection
                    heading='I stay outside of the listed area, can I still opt for delivery?'
                    text='In the event where the delivery address of your order does not match any of our delivery locations listed above, we will contact you (Email/Whatsapp/Phone Call) & subsequently arrange for cancellation of the order or delivery to an alternative delivery address. 
                    Alternatively, you can also order with us via Shopee (https://shopee.sg/shop/551662439/) (delivery fee will vary)'
                />
                <ParagraphSection
                    heading='Do you offer free delivery?'
                    text='Yes, MyPets offer free delivery to the above-listed location for orders above or $30. For orders below $30, a standard delivery fee of $3 will be applied.'
                />
                <ParagraphSection
                    heading='What areas are we currently serving? MyPets is currently delivering to the 7 locations shown below:'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Eunos'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Kembangan'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Chai-Chee'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Bedok'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Simei'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Tampines'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Pasir Ris'
                />
                <ParagraphSection
                    heading='How do I update my personal particulars?'
                    text='Click on the user profile and select which particulars (User particulars/Address) that you would want to amend. After completing, click "Save changes" or "Save address".'
                />
                <ParagraphSection
                    heading='How do I change my password?'
                    text='Click on the user profile and select "change password" Fill up your current password & new password. Afterward, click "Save password" as shown in the image below.'
                />
                <ParagraphSection
                    heading="I have trouble logging in or face technical difficulties"
                    text='Please reach out to us via this channel:'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Live Chat (Support): 9am to 12pm & 2pm to 6pm (Mon-Fri)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Email: support@mypets.sg (reply within 2 working days)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Whatsapp/Phone-call: +65 9126 4942 (anytime)'
                />
                <ParagraphSection
                    heading='What mode of payment do we accept?'
                    text='MyPets currently only accept the following payment methods:'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Visa/MasterCard'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Apple Pay'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Google Pay'
                />
                <ParagraphSection
                    heading='Does your site have a minimum order for check-out?'
                    text='Minimum order of $15 is required to check out from our website.'
                />
                <ParagraphSection
                    heading='Can I cancel my orders?'
                    text='Yes, you may cancel your order only if it is not out for delivery, we will then proceed with your refunds which will be credited to your bank within 1-2 weeks. To request a cancellation, please contact us via the following channels：'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Live Chat (Support): 9am to 12pm & 2pm to 6pm (Mon-Fri)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Email: support@mypets.sg (reply within 2 working days)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Whatsapp/Phone-call: +65 9126 4942 (anytime)'
                />
                <ParagraphSection
                    heading='How do I request a refund?'
                    text='Before requesting a refund, please refer to our Refunds & Exchange Policy segment.'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='To request a refund, please contact us with the following details:'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Order number & date of the order'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Reason for a refund (include image attachment)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Email address for your account'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Total amount spent'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='All refunds requests will only be credited after approval, collected & vetted by our team. It will be credited back into your bank within 1-2 weeks.'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='For products that have been refunded, our team will liaise with you directly for the arrangement once we receive your refund request.'
                />
                <ParagraphSection
                    heading='How do I request an exchange?'
                    text='Please refer to our Refunds & Exchange Policy segment'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='To request a refund, please contact us with the following details:'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Order number & date of the order'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Reason for a refund (include image attachment)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Email address for your account'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Total amount spent'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='Our team will liaise with you directly for the arrangement once we receive your exchange request. Replacement (For Exchange Items) will be carried out on our next immediate delivery day.'
                />
                <ParagraphSection
                    heading='Can I request repackaging?'
                    text='As MyPets is a new startup with limited resources, we are unable to provide repackaging services at this current stage.'
                />
                <ParagraphSection
                    heading='How much percentage of my order will be allocated for the pet community?'
                    text='Upon purchasing with us. MyPets will automatically allocate 5% of your total purchase order (“in a single receipt” excluding delivery charges) to help the pet community.'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='Currently, we are partnering with Project-Luni as part of out community initiative effort.'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='To find out more about Project-Luni & what they do, pls visit: https://www.project-luni.com/about/'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='We hope to be able to contribute more later.'
                />
                <ParagraphSection
                    heading='Where will the calendar sales proceed go?'
                    text='100% of the calendar sales proceed will go directly to Project-Luni.'
                />
                <ParagraphSection
                    heading='How can I track my contribution?'
                    text='Click on the user profile. Under user profile, select Past Order (contribution history).'
                />
                <ParagraphSection
                    heading='Is there any special promo code for users in the Beta-launch stage?'
                    text='For customers that signed up with us before our beta-launch or during our current beta-launch. You are entitled to a promo code: 10% off your orders.
                    
                    There will be no capped amount for this promo code and it is valid for multiple time purchase. The expiry date for Beta Promo Code will last till 31/12/2021.
                    
                    The promo code: "BETA10OFF" will be delivered to your email upon signing up on our website
                    
                    Alternatively, it can be found on our banner, which is displayed on our website.'
                />
                <ParagraphSection
                    heading='Is there any promo code for launch?'
                    text='Our official launch date: 09/12/21.
                    Launch Promo Code is valid for 6 months from the date of official launch.
                    Launch Promo Code Expiry: 09/06/22, 11:59PM'
                />
                <ParagraphSection
                    heading='I cannot use my Promo Code'
                    text='If you are unable to use the promo code, please contact us:'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Live Chat (Support): 9am to 12pm & 2pm to 6pm (Mon-Fri)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Email: support@mypets.sg (reply within 2 working days)'
                    mb={{ base: 3 }}
                />
                <ParagraphSection
                    text='- Whatsapp/Phone-call: +65 9126 4942 (anytime)'
                />
                <ParagraphSection
                    heading='Are you planning to expand your products/carry more products?'
                    text='Absolutely! We are constantly looking to expand our current offerings to cater to every pet owner in the near future! Stay updated with us by visiting our website or follow us on our social media platforms! Sign up with us to receive exciting promotions & offers!'
                />
                <ParagraphSection
                    heading='Still, have Questions/Feedback?'
                    text='We love to hear from our customers! You can send us an **Email** or **Chat Support** and we will assist you accordingly. Be sure to follow us on our social media and email newsletter to watch out for exciting upcoming promotions and more!'
                />
                <ParagraphSection
                    heading='Changes to this section'
                    text='We may update our FAQs from time to time. We will notify you of any changes by posting the new FAQ on this page.
                    
                    We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective, and update the "Last Updated" date at the top of this FAQ section.
                    
                    You are advised to review this FAQ section periodically for any changes. Changes to this FAQ section are effective when they are posted on this page.'
                />
            </PageContainer>
        </Box>
    )
}

export async function getStaticProps() {
    // Fetch categories
    const categories_res = await fetch(`${API_CATEGORIES_URL}`)
    const categories = await categories_res.json()

    // Return as props
    return {
        revalidate: 1,
        props: {
            categories,
        }
    }
}