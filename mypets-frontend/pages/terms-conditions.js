import {
    Box
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown/react-markdown.min'
import PageContainer from '../components/PageContainer/PageContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import { API_CATEGORIES_URL } from '../utils/urls'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import SectionHeader from '../components/SectionHeader/SectionHeader'

export default function terms({ categories }) {
    const markdownText = `
    Last Updated: 28/06/2021

    Please read these Terms and Conditions carefully. By accessing, browsing, or using www.mypets.sg (the “Site”), you acknowledge what you have read, understood and agree to be bound by the Terms and Conditions. If you do not agree to be bound by the Terms and Conditions, you should discontinue your use or access to this site.
     
    MyPets Singapore is a platform that aims to connect pet owners to pet shops.  
    
    By no means do we carry the product of our merchants directly. 
    
    The Terms MyPets Singapore/MyPets can be used interchangeably. 
    
    
    Definitions
    
    For the purposes of this Terms & Conditions Policy:
     
    You refer to the account owner or representatives on behalf of the account owner that is accessing our service
    
    Website refers to MyPets Singapore, accessible from www.mypets.sg
    
    Personal Data is any information provided by you upon signing up with MyPets.
    
    Service/Platform refers to our website
    
    Account means a unique account created in order to use our site.
    
    Service/Platform refers to our website
    
    Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to MyPets Singapore.
    
    
    Eligibility
    
    You must be over eighteen (18) years of age and must not have been suspended or removed by MyPets for any reason. If you are below the stipulated age, you must obtain the consent of your parent or legal guardian to use our website and agree to the terms. Use of our site is void where prohibited by the law.
    
    Compliance
    
    We reserve the right to revoke your ability to access the products and services offered on the site for any reason at any time, including, but not limited to, as a result of a violation of the Terms or the Privacy Policy, without due notice.
    
    You must not misuse our site in a manner that may cause us liability under the Computer Misuse Act (Cap 50A) and Cybersecurity Act 2018.
    
    You may not otherwise copy, modify or distribute the contents of our website without the express written permission of MyPets.  Furthermore, you also may not modify, publish, transmit, participate in the transfer of, sell, create derivative works from, or in any way exploit, any of the content and Intellectual Property found on the Site, in whole or in any part.
    
    You are also not allowed to infringe any copyright materials from our website.
    
    You shall not spread misinformation/slander/use any information on our site that can tarnish our image and brings us liability. Legal actions will be taken accordingly to uphold & protect the image of MyPets.
    
    To use any specific information on our site will require an email write-in to us at contactmypetssg@gmail.com.
    
    All data provided by you are accurate & owned by you, the account owner.
    
    You may not use any aliases or other means to mask your true identity
    
    Any access codes and/or passwords provided should be safeguarded at all times. You are responsible for the security of your access codes and/or passwords, and will henceforth be solely liable for any use or unauthorized use of the Site with your access codes and/or passwords.
    
    Refunds & Exchange Policy
    
    Refund Policy
    
    MyPets strives to provide quality service for our customers. 
    Criteria for refund are as follows:
    
    ● Items received in damaged conditions
    
    ● Expired products
    
    ● Order discrepancies
    
    ● Wrong products
    
    
    Exchange Policy
    
    Criteria for exchange are as follows:
    
    ● Items received in damaged conditions
    
    ● Expired products
    
    ● Wrong products
    
    To request an exchange or a refund, please contact us:
    
    By email: contactmypetssg@gmail.com
    
    WhatsApp/Telegram/Message (For faster reply): 
    +65 9005 6761 (Ben) / +65 9126 4942 (Raihan)
    
    All items that is opting for a refund or exchange, needs to be in its original packaging.
    
    MyPets has the right to refuse any refunds/exchange should we be deemed as an act of abuse (on purpose) to our service. 
     
    All refunds request will only be credited after it’s been approved, collected & vetted by our team. It will be credited back into your payment method within 1-2 weeks.
    
    For products that has been refunded, we will collect it from you on our next immediate delivery day, which falls on either Monday or Friday. Our team will liaise with you directly for the arrangement. 
    
    Similarly, for the exchange of items, we will collect the items that’s required for exchange on Monday or Friday. Our team will liaise with you directly for the arrangement. 
    
    Similarly, for the exchange of items, we will collect the items that’s required for exchange on Monday or Friday. Our team will liaise with you directly for the arrangement. 
    
    Replacement (For Exchange Items) will be carried out on our next immediate delivery day, which falls on either Tuesday or Saturday. 
    
    Payment & Promo Codes (Vouchers/Discounts)
    
    We’re currently only accepting the following payment methods:
    
    ● Apple Pay/Google Pay
    ● MasterCard
    ● Visa
    
    For Refunds:
     
    All refunded amount will be credited into your original payment method. 
    
    In the event whereby  you used our promo code and requested a refund, and it’s approved, the promo code will be resent to your email accordingly. This promo code can then be used for your subsequent purchase.
     
    Expiration:
    
    Promo codes for first-time users do not have an expiration, thus you can use it anytime.
    
    Festive & Promotion vouchers (“Promo Code”) on the other hand has an expiration date. The expiration date will be extended accordingly, and the new promo code will be sent to your email once your refunds has been approved & vetted by us.
    
    Promo Code (Vouchers/Discounts)
    
    Beta Launch (Promo Code)
    
    For users that signed up with us for before/present beta-launch stage, you’re entitled to an 5% off for your order. 
    
    The promo code is valid for 1 time use per user.
    
    Validity of the code will be up till 31st December 2021. 
    
    Launch (Promo Code)
    
    Our official launch date will be disclosed upon nearing to our launch. 
    
    Delivery
    
    As MyPets is a new startup with limited resources, we aim to provide the best service to our users.
    
    As such, we aim to deliver your order(s) within 4-6 days from the day of purchase.
    
    Our standard delivery days will fall on Tuesday & Saturday. 
    
    Please note that we are currently delivering to the 7 following locations:
    
    ● Eunos
    ● Kembangan
    ● Chai-Chee
    ● Bedok
    ● Simei 
    ● Tampines
    ● Pasir Ris
    
    In the event where the delivery address of your order doesn’t match any of our delivery locations listed above, we will contact you & subsequently arrange for cancellation of the order or delivery to an alternative delivery address.
    
    Should there be a delay on our end, we will, notify you in advance if we’re expected to not achieve our target delivery date for your orders.
    
    We strive to deliver your orders on time & we will uphold our promises to the very best we can. Rectification will be carried out on our end to uphold our promise to you as our customer.
    
    However, we shall be, in no position, liable for the loss of your products upon delivering to your doorsteps.
    
    Charges
    
    To uphold the quality standard we provide to our customer & to give back to the community, Mypets will impose will impose delivery and service fees.
    
    Delivery Fees
    
    Mypets charges a standard delivery rate of $1.50 for all orders below $40.
    Orders above $40 are automatically entitled for a free delivery. 
    
    Service Fee
    
    Mypets will impose a service fee of 2% on total orders. 
    
    Packaging
    
    By no means do we carry the product of our merchants directly.
    
    For product repacking request, you will have to contact our merchants directly via email/phone-call or message (“WhatsApp/Text Message”) to see if it is possible.
    
    As MyPets is a new startup with limited resources, we will be using HDPE standard T-shirt bags, which is sturdy material, for our delivery orders. 
    We aim to improve our delivery bags quality over-time.
    
    Personal Data Protection
    
    Information regarding Personal Data can be found on our Privacy Policy.
    
    Regulations
    
    MyPets reserve the right to disclose your Personal Data in the good faith belief that such action is necessary to:
    
    ● Comply with a legal obligation
    ● Protect and defend the rights or property of the Company
    ● Prevent or investigate possible wrongdoing in connection with the Service
    ● Protect the personal safety of Users of the Service or the public
    ● Protect against legal liability
     
    Customer Feedback/Support
    
    For technical difficulties/Order-related, please contact us:
    
    By email: contactmypetssg@gmail.com
    
    WhatsApp/Message (For faster reply): 
    +65 9005 6761 (Ben) / +65 9126 4942 (Raihan)
     
    Changes To This Terms & Condition Policy
    
    We may update our Terms & Condition Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
    
    We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective, and update the “Last updated” date at the top of this Terms & Condition Policy.
    
    You are advised to review this Terms & Condition Policy periodically for any changes. Changes to this Terms & Condition Policy are effective when they are posted on this page.
    
    
    Contact Us
    
    If you have any questions about this Terms & Condition Policy, you can contact us:
    
    By email: contactmypetssg@gmail.com
    
    By visiting this page on our website: www.mypets.sg`

    return (
        <Box>
            <Sidebar categories={categories} />
            <PageContainer>
                <SectionHeader>
                    Terms & Conditions
                </SectionHeader>
                <ReactMarkdown
                    components={ChakraUIRenderer()}
                    children={markdownText}
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
        props: {
            categories,
        }
    }
}