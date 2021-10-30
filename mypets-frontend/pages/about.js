import {
    Box
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown/react-markdown.min'
import PageContainer from '../components/PageContainer/PageContainer'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import { API_CATEGORIES_URL } from '../utils/urls'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import SectionHeader from '../components/SectionHeader/SectionHeader'

export default function about({ categories }) {
    const markdownText = `#
    # **MyPets Terms &amp; Conditions**
    
    **Last Updated:** 19/10/21
    
    **General Information:**
    
    - Live Chat (Support)**: 9am - 12pm &amp; 2pm - 6pm (Mon-Fri)**
    - Email: [contactmypetssg@gmail.com](mailto:contactmypetssg@gmail.com)
    
    **(reply within 2 working days)**
    
    - WhatsApp/Phone-call**: +65 9126 4942 (anytime)**
    
    Please read these Terms and Conditions carefully. By accessing, browsing, or using[www.mypets.sg](http://www.mypets.sg/) (the &quot;Site&quot;), you acknowledge what you have read, understood and agree to be bound by the Terms and Conditions. If you do not agree to be bound by the Terms and Conditions, you should discontinue your use or access to this site.
    
    MyPets Singapore is an online pet shop that aims to improve the lives of pet owners &amp; the pet community
    
    The Terms MyPets Singapore/MyPets can be used interchangeably.
    
    ##
    
    
    ##
    
    
    ##
    
    
    ## **Definitions**
    
    For the purposes of this Terms &amp; Condition Policy:
    
    - **You** refer to the account owner or representatives on behalf of the account owner that is accessing our service
    - **Website** refers to MyPets Singapore, accessible from [www.mypets.sg](https://cdpn.io/cp/internal/boomboom/mypets.sg)
    - **Personal Data** is any information provided by you upon signing up with MyPets.
    - **Service/Platform** refers to our website
    - **Account** means a unique account created in order to use our site.
    - **Company** (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to MyPets Singapore.
    
    ## **Eligibility**
    
    - You must be over eighteen (18) years of age and must not have been suspended or removed by MyPets for any reason. If you are below the stipulated age, you must obtain the consent of your parent or legal guardian to use our website and agree to the terms. Use of our site is void where prohibited by the law.
    
    ##
    
    
    ## **Contact Information** :
    
    Please refer to our FAQs to find out ways to reach out to us.
    
    ## **Compliance**
    
    - We reserve the right to revoke your ability to access the products and services offered on the site for any reason at any time, including, but not limited to, as a result of a violation of the Terms or the Privacy Policy, without due notice.
    
    - You must not misuse our site in a manner that may cause us liability under the Computer Misuse Act (Cap 50A) and Cybersecurity Act 2018.
    - You may not otherwise copy, modify or distribute the contents of our website without the express written permission of MyPets. Furthermore, you also may not modify, publish, transmit, participate in the transfer of, sell, create derivative works from, or in any way exploit, any of the content and Intellectual Property found on the Site, in whole or in any part.
    - You are also not allowed to infringe any copyright materials from our website.
    - You shall not spread misinformation/slander/use any information on our site that can tarnish our image and brings us liability. Legal actions will be taken accordingly to uphold &amp; protect the image of MyPets.
    - To use any specific information on our site will require an email write-in to us at [contactmypetssg@gmail.com](mailto:contactmypetssg@gmail.com).
    - All data provided by you are accurate &amp; owned by you, the account owner.
    - You may not use any aliases or other means to mask your true identity
    - Any access codes and/or passwords provided should be safeguarded at all times. You are responsible for the security of your access codes and/or passwords, and will henceforth be solely liable for any use or unauthorized use of the Site with your access codes and/or passwords.
    
    ## **Refunds &amp; Exchange Policy**
    
    MyPets strives to provide quality service for our customers
    
    **Refund Policy**.
    
    Criteria for refund are as follows:
    
    - Items received in damaged conditions
    - Expired products
    - Order discrepancies
    - Wrong products
    
    **Exchange Policy**
    
    Criteria for exchange are as follows:
    
    - Items received in damaged conditions
    - Expired products
    - Wrong products
    
    To request an exchange or a refund, please reach out to us:
    
    - Live Chat (Support): **9am -12pm &amp; 2pm - 6pm (Mon-Fri)**
    - Email:[contactmypetssg@gmail.com](mailto:contactmypetssg@gmail.com)
    
    **(reply within 2 working days)**
    
    - WhatsApp/Phone-call: **anytime**
    
    All items that are opting for a refund or exchange, need to be in their original packaging.
    
    MyPets has the right to refuse any refunds/exchange should we be deemed as an act of abuse (on purpose) to our service.
    
    MyPets is not responsible for damages or losses incurred upon delivering to your doorstep.
    
    All refunds request will only be credited after it&#39;s been approved, collected by our team. It will be credited back into your payment method **within**** 1-2 weeks** (with the help of Stripe).
    
    For items that require a refund, we will collect them from you on our next immediate delivery day. Our team will liaise with you directly for the arrangement via the channel you used to contact us, upon receiving your request.
    
    Similarly, for items that require an exchange, we will collect them &amp; replace them on our next immediate delivery day. Our team will liaise with you directly for the arrangement via the channel you used to contact us, upon receiving your request (Email/Phone-call/Whatsapp).
    
    **Payment &amp; Promo Codes (Vouchers/Discounts)**
    
    We&#39;re currently only accepting the following payment methods:
    
    - Apple Pay/Google Pay
    - MasterCard (Stripe)
    - Visa (Stripe)
    
    **For Refunds:**
    
    All refunded amounts will be credited back to your original payment method.
    
    In the event whereby you used our promo code and requested a refund, and it&#39;s approved, the promo code will be resent to your email accordingly. This promo code can then be used for your subsequent purchase. The validity of the promo code will be extended accordingly if necessary to our discretion.
    
    **Expiration:**
    
    Promo codes for first-time beta users will be till 31/12/2021.
    
    However, Promo codes expiry &amp; usage for users that didn&#39;t join for our beta will be subjected to our discretion.
    
    Festive &amp; Other Promotion vouchers (&quot;Promo Code&quot;) have an expiration date. The expiration date will be extended accordingly if necessary to our discretion and the new promo code will be sent to your email once your refunds have been approved &amp; vetted by us.
    
    ## **Promo Code (Vouchers/Discounts)**
    
    **Beta-launch (Promo code)**
    
    For users that signed up with us at the beta-launch stage, you&#39;re entitled to 10% off for your first order.
    
    The promo code is valid for 1-time use per user.
    
    Beta Promo Code (BETA10OFF) validity will be till 31/12/2021.
    
    **Launch (Promo code)**
    
    Our official launch date will be disclosed upon nearing our launch.
    
    ##
    
    
    ## **Delivery**
    
    **Delivery Locations**
    
    As MyPets is a new startup with limited resources, we aim to provide the best service for our customers.
    
    As such, we aim to deliver your order(s) within 3 days, between 12pm to 10pm, from the day of purchase.
    
    Please note that we are currently delivering to the 7 following locations:
    
    - Eunos
    - Kembangan
    - Chai-Chee
    - Bedok
    - Simei
    - Tampines
    - Pasir Ris
    
    In the event where the delivery address of your order doesn&#39;t match any of our delivery locations listed above, we will contact you &amp; subsequently arrange for cancellation of the order or delivery to an alternative delivery address.
    
    Should there be a delay on our end, we will notify you in advance if we&#39;re expected to not achieve our target delivery date for your orders.
    
    We strive to deliver your orders on time &amp; we will uphold our promises to the very best we can. Rectification will be carried out on our end to uphold our promise to you as our customer.
    
    However, **we shall be, in no position, liable for the loss of your products upon delivering to your doorsteps.**
    
    ## **Contribution**
    
    5% of your total purchase order (&quot;in a single receipt&quot;) will automatically be allocated for the pet community.
    
    **Charges**
    
    To uphold the quality standard we provide to our customers &amp; give back to the community, we will impose:
    
    **Delivery Fees**
    
    Mypets charges a standard delivery rate of $3 for orders less than $30
    
    Orders above $30 are automatically entitled to a free delivery.
    
    **Packaging**
    
    As MyPets is a new startup with limited resources, we will be using HDPE standard bags, which is a sturdy material, for our delivery orders.
    
    We aim to improve our delivery bags quality over time.
    
    Likewise, MyPets do not provide repackaging services at this current stage.
    
    ## **Personal Data Protection**
    
    Information regarding Personal Data can be found on our Privacy Policy.
    
    ## **Regulations**
    
    MyPets reserve the right to disclose your Personal Data in the good faith belief that such action is necessary to:
    
    - Comply with a legal obligation
    - Protect and defend the rights or property of the Company
    - Prevent or investigate possible wrongdoing in connection with the Service
    - Protect the personal safety of Users of the Service or the public
    - Protect against legal liability
    
    ## **Customer Feedback/Support**
    
    For technical difficulties/Order-related, please contact us:
    
    - Live Chat (Support): **9am - 12pm &amp; 2pm - 6pm (Mon-Fri)**
    - Email:[contactmypetssg@gmail.com](mailto:contactmypetssg@gmail.com)
    
    **(reply within 2 working days)**
    
    - WhatsApp/Phone-call: **anytime**
    
    **Changes To This Terms &amp; Condition Policy**
    
    We may update our Terms &amp; Conditions Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
    
    We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective, and update the &quot;Last Updated&quot; date at the top of this Terms &amp; Condition Policy.
    
    You are advised to review this Terms &amp; Conditions Policy periodically for any changes. Changes to this Terms &amp; Conditions Policy are effective when they are posted on this page.
    
    ## **Contact Us**
    
    If you have any questions about this Terms &amp; Condition Policy, you can contact us:
    
    - By email: [contactmypetssg@gmail.com](mailto:contactmypetssg@gmail.com)
    - By visiting this page on our website: [www.mypets.sg](https://cdpn.io/cp/internal/boomboom/www.mypets.sg)`

    return (
        <Box>
            <Sidebar categories={categories} />
            <PageContainer>
                <SectionHeader>
                    Conctact
                </SectionHeader>
                <ReactMarkdown
                    components={ChakraUIRenderer()}
                    children={markdownText}
                />
            </PageContainer>
            <Footer />
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