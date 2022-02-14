import {
    Box,
    Text
} from '@chakra-ui/react'
import Head from 'next/head'

import PageContainer from '../components/PageContainer/PageContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { API_CATEGORIES_URL, API_TERMS_URL } from '../utils/urls'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ParagraphSection from '../components/ParagraphSection/ParagraphSection'
import SectionSubHeader from '../components/SectionSubHeader/SectionSubHeader'

export default function terms({ categories, terms_data }) {
    return (
        <>
            <Head>
                <title>{terms_data.meta_title}</title>
                <meta name="description" content={terms_data.meta_description} />
            </Head>
            <Box minH='100vh'>
                <Sidebar categories={categories} />
                <PageContainer>
                    <SectionHeader>
                        Terms & Conditions
                    </SectionHeader>
                    <SectionSubHeader>
                        Last Updated: 14/02/22
                    </SectionSubHeader>
                    <ParagraphSection
                        text='Our Business Operating Hours: 9am - 12pm & 2pm - 6pm (Mon-Fri)'
                    />
                    <ParagraphSection
                        heading='General Information:'
                        text='• Email: support@mypets.sg (Reply within 2 working days)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='• Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='• Phone/WhatsApp: 9126 4942 (anytime)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='Please read these Terms and Conditions carefully. By accessing, browsing, or using[www.mypets.sg](http://www.mypets.sg/) (the &quot;Site&quot;), you acknowledge what you have read, understood and agree to be bound by the Terms and Conditions. If you do not agree to be bound by the Terms and Conditions, you should discontinue your use or access to this site.
                        MyPets Singapore is an online pet shop that aims to improve the lives of pet owners &the pet community
                        The Terms MyPets Singapore/MyPets can be used interchangeably.'
                    />
                    <ParagraphSection
                        heading='Definitions'
                        text='For the purposes of this Terms & Condition Policy:'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- You refer to the account owner or representatives on behalf of the account owner that is accessing our service'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Website refers to MyPets Singapore, accessible from [www.mypets.sg](https://cdpn.io/cp/internal/boomboom/mypets.sg)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Personal Data is any information provided by you upon signing up with MyPets.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Service/Platform refers to our website'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Account means a unique account created in order to use our site.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Company (referred to as either the Company, We, Us or Our in this Agreement) refers to MyPets Singapore.'
                    />
                    <ParagraphSection
                        heading='Eligibility'
                        text='- You must be over eighteen (18) years of age and must not have been suspended or removed by MyPets for any reason. If you are below the stipulated age, you must obtain the consent of your parent or legal guardian to use our website and agree to the terms. Use of our site is void where prohibited by the law.'
                    />
                    <ParagraphSection
                        heading='Contact Information:'
                        text='Please refer to our FAQs to find out ways to reach out to us.'
                    />
                    <ParagraphSection
                        heading='Compliance'
                        text='- We reserve the right to revoke your ability to access the products and services offered on the site for any reason at any time, including, but not limited to, as a result of a violation of the Terms or the Privacy Policy, without due notice.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- You must not misuse our site in a manner that may cause us liability under the Computer Misuse Act (Cap 50A) and Cybersecurity Act 2018.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- You may not otherwise copy, modify or distribute the contents of our website without the express written permission of MyPets. Furthermore, you also may not modify, publish, transmit, participate in the transfer of, sell, create derivative works from, or in any way exploit, any of the content and Intellectual Property found on the Site, in whole or in any part.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- You are also not allowed to infringe any copyright materials from our website.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- You shall not spread misinformation/slander/use any information on our site that can tarnish our image and brings us liability. Legal actions will be taken accordingly to uphold & protect the image of MyPets.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- To use any specific information on our site will require an email write-in to us at [support@mypets.sg].'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- All data provided by you are accurate & owned by you, the account owner.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- You may not use any aliases or other means to mask your true identity'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Any access codes and/or passwords provided should be safeguarded at all times. You are responsible for the security of your access codes and/or passwords, and will henceforth be solely liable for any use or unauthorized use of the Site with your access codes and/or passwords.'
                    />
                    <ParagraphSection
                        heading='Refunds & Exchange Policy'
                        text='MyPets strives to provide quality service for our customers'
                    />
                    <ParagraphSection
                        heading='Refund Policy.'
                        text='Criteria for refund are as follows:'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Items received in damaged conditions'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Expired products'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Order discrepancies'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Wrong products'
                    />
                    <ParagraphSection
                        heading='Exchange Policy'
                        text='Criteria for exchange are as follows:'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Items received in damaged conditions'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Expired products'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Wrong products'
                    />
                    <ParagraphSection
                        heading='To request an exchange or a refund, please reach out to us:'
                        text='• Email: support@mypets.sg (Reply within 2 working days)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='• Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='• Phone/WhatsApp: 9126 4942 (anytime)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='All items that are opting for a refund or exchange, need to be in their original packaging.
        
                        MyPets has the right to refuse any refunds/exchange should we be deemed as an act of abuse (on purpose) to our service.
                        
                        MyPets is not responsible for damages or losses incurred upon delivering to your doorstep.
                        
                        All refunds request will only be credited after its been approved, collected by our team. It will be credited back into your payment method within 1-2 weeks (with the help of Stripe).
                        
                        For items that require a refund, we will collect them from you on our next immediate delivery day. Our team will liaise with you directly for the arrangement via the channel you used to contact us, upon receiving your request.
                        
                        Similarly, for items that require an exchange, we will collect them & replace them on our next immediate delivery day. Our team will liaise with you directly for the arrangement via the channel you used to contact us, upon receiving your request (Email/Phone-call/Whatsapp).'
                    />
                    <ParagraphSection
                        heading='Payment & Promo Codes (Vouchers/Discounts)'
                        text='We are currently only accepting the following payment methods:'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Apple Pay/Google Pay'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- MasterCard (Stripe)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Visa (Stripe)'
                    />
                    <ParagraphSection
                        heading='For Refunds:'
                        text='All refunded amounts will be credited back to your original payment method.
                        In the event whereby you used our promo code and requested a refund, and its approved, the promo code will be resent to your email accordingly. This promo code can then be used for your subsequent purchase. The validity of the promo code will be extended accordingly if necessary to our discretion.'
                    />
                    <ParagraphSection
                        heading='Expiration:'
                        text='Promo codes for first-time beta users will be till 31/12/2021.
                        However, Promo codes expiry & usage for users that didnt join for our beta will be subjected to our discretion.
                        Festive & Other Promotion vouchers (Promo Code) have an expiration date. The expiration date will be extended accordingly if necessary to our discretion and the new promo code will be sent to your email once your refunds have been approved & vetted by us.'
                    />
                    <ParagraphSection
                        heading='Promo Code (Vouchers/Discounts)'
                        text='Beta-launch (Promo code)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='For users that signed up with us at the beta-launch stage, you’re entitled to 10% off for your
                        first order.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='The promo code is valid for multiple time purchase.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='Beta Promo Code (BETA10OFF) validity will be till 31/12/2021.'
                    />
                    <ParagraphSection
                        text='Launch (Promo code)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='Our official launch date: 09/12/21.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='Launch Promo Code is valid for 6 months from the date of official launch.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='Launch Promo Code Expiry: 09/06/22, 11:59PM'
                    />
                    <ParagraphSection
                        heading='Delivery'
                        text='Delivery Locations'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='As MyPets is a new startup with limited resources, we aim to provide the best service for our customers.
                        As such, we aim to deliver your order(s) within 3 days, between 12pm to 10pm, from the day of purchase.'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='Please note that we are currently delivering to the 7 following locations:'
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
                        text='In the event where the delivery address of your order doesnt match any of our delivery locations listed above, we will contact you & subsequently arrange for cancellation of the order or delivery to an alternative delivery address.
                        Should there be a delay on our end, we will notify you in advance if we are expected to not achieve our target delivery date for your orders.
                        We strive to deliver your orders on time & we will uphold our promises to the very best we can. Rectification will be carried out on our end to uphold our promise to you as our customer.
                        However, we shall be, in no position, liable for the loss of your products upon delivering to your doorsteps.'
                    />
                    <ParagraphSection
                        heading='Contribution'
                        text='5% of your total purchase order (in a single receipt) will automatically be allocated for the pet community.'
                    />
                    <ParagraphSection
                        heading='Charges'
                        text='To uphold the quality standard we provide to our customers & give back to the community, we will impose:'
                    />
                    <ParagraphSection
                        heading='Delivery Fees'
                        text='Mypets charges a standard delivery rate of $3.50 for orders less than $39.90. Orders above $39.90 are automatically entitled to a free delivery.'
                    />
                    <ParagraphSection
                        heading='Packaging'
                        text='As MyPets is a new startup with limited resources, we will be using HDPE standard bags, which is a sturdy material, for our delivery orders.
                        We aim to improve our delivery bags quality over time.
                        Likewise, MyPets do not provide repackaging services at this current stage.'
                    />
                    <ParagraphSection
                        heading='Personal Data Protection'
                        text='Information regarding Personal Data can be found on our Privacy Policy.'
                    />
                    <ParagraphSection
                        heading='Regulations'
                        text='MyPets reserve the right to disclose your Personal Data in the good faith belief that such action is necessary to:'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Comply with a legal obligation'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Protect and defend the rights or property of the Company'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Prevent or investigate possible wrongdoing in connection with the Service'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Protect the personal safety of Users of the Service or the public'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- Protect against legal liability'
                    />
                    <ParagraphSection
                        heading='Customer Feedback/Support'
                        text='• Email: support@mypets.sg (Reply within 2 working days)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='• Live Chat Support: 9am - 12pm, 2pm - 6pm (Mon - Fri)'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='• Phone/WhatsApp: 9126 4942 (anytime)'
                    />
                    <ParagraphSection
                        heading='Changes To This Terms & Condition Policy'
                        text='We may update our Terms & Conditions Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective, and update the "Last Updated" date at the top of this Terms & Condition Policy.
                        You are advised to review this Terms & Conditions Policy periodically for any changes. Changes to this Terms & Conditions Policy are effective when they are posted on this page.'
                    />
                    <ParagraphSection
                        heading='Contact Us'
                        text='If you have any questions about this Terms & Condition Policy, you can contact us:'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- By email: [support@mypets.sg]'
                        mb={{ base: 3 }}
                    />
                    <ParagraphSection
                        text='- By visiting this page on our website: [www.mypets.sg](https://cdpn.io/cp/internal/boomboom/www.mypets.sg)'
                        mb={{ base: 3 }}
                    />
                </PageContainer>
            </Box>
        </>
    )
}

export async function getStaticProps() {

    // Fetch home page banner images + top banner text
    const terms_res = await fetch(`${API_TERMS_URL}`)
    const terms_data = await terms_res.json()

    // Fetch categories
    const categories_res = await fetch(`${API_CATEGORIES_URL}`)
    const categories = await categories_res.json()

    // Return as props
    return {
        props: {
            categories,
            terms_data
        }
    }
}