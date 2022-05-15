import whatWeOffer from '../styles/whatWeOffer.module.scss'
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import WhatWeDo from "./what_we_do";

function WhatWeOffer() {
  const { t } = useTranslation('common');
  return (
    <section className={ whatWeOffer.container }>
      <h2 className={ whatWeOffer.header }>We offer and arrange:</h2>
      <ul className={ whatWeOffer.list }>
        <li>emergency and private accommodation in and around Berlin</li>
        <li>medical care</li>
        <li>legal advice</li>
        <li>Vocational counseling and labor market integration</li>
        <li>Culturally sensitive social counseling in different languages</li>
        <li>Support around children and family matters</li>
        <li>German and integration courses</li>
        <li>Trauma therapy</li>
        <li>Several hot meals and snacks daily</li>
        <li>Hygiene products</li>
        <li>clothing</li>
        <li>Baby supplies</li>
        <li>Electronic communication devices</li>
        <li>Childcare</li>
        <li>Family-friendly community events</li>
        <li>Empowerment services for children and youth</li>
        <li>Advanced education and awareness training on forms and mechanisms of discrimination</li>
        <li>Anti-Black Racism and Critical Whiteness</li>
        <li>Support of BIPoC organizations in professionalization and capacity building</li>
      </ul>
      <h2 className={ whatWeOffer.header }>What we fund through your donations:</h2>
      <ul className={ whatWeOffer.list }>
        <li>Rent for our locations at Dammweg 216 and Mehringdamm 20 in Berlin</li>
        <li>Rent for emergency accommodation in hostels and youth hostels</li>
        <li>Payment for our German teachers</li>
        <li>German course books, exam fees and license</li>
        <li>Internet, printing costs, office supplies</li>
        <li>Food for 200 meals per day</li>
        <li>kitchen equipment</li>
        <li>Medical supplies</li>
        <li>hygiene products</li>
        <li>New underwear</li>
        <li>Baby supplies</li>
        <li>Blankets, mattresses etc.</li>
        <li>Electronic device</li>
        <li>Sim cards</li>
        <li>Craftsmen costs for repair and maintenance of our sites</li>
        <li>means of transport</li>
        <li>Cleaning supplies</li>
        <li>Covid-19 test kits and face masks</li>
      </ul>
      <h2 className={ whatWeOffer.subheader }>We thank you very much for your support!</h2>
    </section>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}

export default WhatWeOffer