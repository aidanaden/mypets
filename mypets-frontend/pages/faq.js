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

export default function faq({ categories }) {
    const markdownText = `
    ## **Customer FAQs**

    Last updated: 19/10/21
    
    **General Information:**
    
    - **Live Chat (Support): 9am - 12pm &amp; 2pm - 6pm (Mon-Fri)**
    - Email: contactmypetssg@gmail.com
    
    **(reply within 2 working days)**
    
    - **Whatsapp/Phone-call: +65 9126 4942 (anytime)**
    
    **Delivery**
    
    **Delivery days**
    
    As MyPets is a new startup with limited resources, we aim to provide the best service to our users within our capabilities.
    
    As such, we aim to deliver your order(s) within **3 days** from the date of purchase.
    
    In the event, where we expect a delay on our end, we&#39;ll inform you in advance with due diligence about the change in delivery schedule and liaise with you about the new delivery day based on your convenience.
    
    **Delivery timing**
    
    Mypets will deliver your order to your doorstep anytime between 12pm to 10pm. Before delivering to your doorstep, we&#39;ll inform you via text message/phone call.
    
    **Can I request a change in delivery day/location?**
    
    If you&#39;ve already placed an order via our website and wishes to opt for a change in delivery day/timing, please reach out to us via this channel:
    
    Live Chat (Support)**: 9am - 12pm &amp; 2pm - 6pm (Mon - Fri)**
    
    Whatsapp/Phone Call: **anytime**
    
    **Note:**
    
    If there is a **change in delivery address/location** , we&#39;ll require a 1-day notice to accommodate your request.
    
    **I stay outside of the listed area, can I still opt for delivery?**
    
    In the event where the delivery address of your order doesn&#39;t match any of our delivery locations listed above, we will contact you (Email/Whatsapp/Phone Call) &amp; subsequently arrange for cancellation of the order or delivery to an alternative delivery address.
    
    Alternatively, you can also order with us via Shopee (&quot;insert link&quot;)
    
    (delivery fee will vary)
    
    **Do you offer free delivery?**
    
    Yes, MyPets offer free delivery to the above-listed location for orders above or $30.
    
    For orders below $30, a standard delivery fee of $3 will be applied.
    
    **What areas are we currently serving?**
    
    MyPets is currently delivering to the 7 locations shown below:
    
    - Eunos
    - Kembangan
    - Chai-Chee
    - Bedok
    - Simei
    - Tampines
    - Pasir Ris
    
    We hope to expand our delivery locations in the near future.
    
    **User details**
    
    **How do I update my personal particulars?**
    
    Click on the user profile and select which particulars (User particulars/Address) that you would want to amend. After completing, click &quot;Save changes&quot; or &quot;Save address&quot;.
    
    **How do I change my password?**
    
    Click on the user profile and select &quot;change password.&quot; Fill up your current password &amp; new password. Afterward, click &quot;Save password&quot; as shown in the image below.
    
    Note: If you signed up via Facebook/Google, you won&#39;t be able to change to a new password as the account would be directly linked to your Facebook/Google account.
    
    **I have trouble logging in or face technical difficulties**
    
    Please reach out to us via this channel:
    
    Live Chat (Support): **9am - 12pm &amp; 2pm - 6pm (Mon - Fri)**
    
    Email: **anytime (reply within 2 working days)**
    
    **Payment**
    
    **What mode of payment do we accept?**
    
    MyPets currently only accept the following payment methods:
    
    - Visa/MasterCard
    - Apple Pay
    - Google Pay
    
    **Does your site have a minimum order for check-out?**
    
    Minimum order of $15 is required to check out from our website.
    
    **Orders**
    
    **Can I cancel my orders?**
    
    Yes, you may cancel your order only if it is **not out for delivery (day)**, we will then proceed with your refunds which will be credited to your bank within 1-2 weeks.
    
    To request a cancellation, please contact us via the following channels：
    
    Live Chat (Support): **9am - 12pm &amp; 2pm - 6pm (Mon - Fri)**
    
    Whatsapp/Phone Call: **anytime**
    
    Email: **anytime (reply within 2 working days)**
    
    **How do I request a refund?**
    
    Do contact us via our **live chat from 9am - 12pm &amp; 2pm - 6pm.** Other means of contacting us would be through **Email/Whatsapp/Phone-call.** Below has more information with regards to emailing us.
    
    Before requesting a refund, please refer to our **Refunds &amp; Exchange Policy** segment.
    
    To request a refund, please contact us with the following details:
    
    - Order number &amp; date of the order
    - Reason for a refund (include image attachment)
    - Email address for your account
    - Total amount spent
    
    All refunds requests will only be credited after it&#39;s been approved, collected &amp; vetted by our team. It will be credited back into your bank within 1-2 weeks.
    
    For products that have been refunded, our team will liaise with you directly for the arrangement once we receive your refund request.
    
    **How do I request an exchange?**
    
    Do contact us via our **live chat from 9am - 12pm &amp; 2pm - 6pm.** Other means of contacting us would be through **Email/Whatsapp/Phone-call.** Below has more information with regards to emailing us.
    
    Please refer to our **Refunds &amp; Exchange Policy** segment.
    
    To request an exchange, please contact us with the following details:
    
    - Order number &amp; date of the order
    - Reason for a refund (include image attachment)
    - Email address for your account
    - Total amount spent
    
    Our team will liaise with you directly for the arrangement once we receive your exchange request. **Replacement** (For Exchange Items) will be carried out on our **next immediate delivery day.**
    
    **Can I request repackaging?**
    
    As MyPets is a new startup with limited resources, we&#39;re unable to provide repackaging services at this current stage.
    
    **How much percentage of my order will be allocated for the pet community?**
    
    Upon purchasing with us. MyPets will automatically allocate 5% of your total purchase order (&quot;in a single receipt&quot; exclu. delivery charges) to help the pet community.
    
    We hope to be able to contribute more later on.
    
    **How can I track my contribution?**
    
    Click on the user profile. Under user profile, select Past Order (contribution history).
    
    **Promo codes/Vouchers**
    
    **Is there any special promo code for users in the Beta-launch stage?**
    
    For customers that signed up with us before our beta-launch or during our current beta-launch. You&#39;re entitled to a promo code: 10% off your orders.
    
    There will be no capped amount for this promo code and it is valid only for one-time use. The expiry date for Beta Promo Code will last till 31/12/2021.
    
    The promo code: &quot;BETA10OFF&quot; will be delivered to your email upon signing up on our website
    
    Alternatively, it can be found on our banner, which is displayed on our website.
    
    **I can&#39;t use my Promo Code**
    
    If you&#39;re unable to use the promo code, please contact us:
    
    Live Chat (Support): **9am - 12pm &amp; 2pm - 6pm (Mon - Fri)**
    
    Whatsapp/Phone Call: **anytime**
    
    Email: **anytime (reply within 2 working days)**
    
    **Are you planning to expand your products/carry more products?**
    
    Absolutely! We are constantly looking to expand our current offerings to cater to every pet owner in the near future! Stay updated with us by visiting our website or follow us on our social media platforms! Sign up with us to receive exciting promotions &amp; offers!
    
    **Still, have Questions/Feedback?**
    
    We love to hear from our customers! You can send us an **Email** or **Chat Support** and we will assist you accordingly. Be sure to follow us on our social media and email newsletter to watch out for exciting upcoming promotions and more!
    
    **Changes to this section**
    
    We may update our FAQs from time to time. We will notify you of any changes by posting the new FAQ on this page.
    
    We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective, and update the &quot;Last Updated&quot; date at the top of this FAQ section.
    
    You are advised to review this FAQ section periodically for any changes. Changes to this FAQ section are effective when they are posted on this page.
`

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