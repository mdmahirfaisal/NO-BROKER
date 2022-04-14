import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import WhyUseNB from "../WhyUseNB/WhyUseNB";
import NbBusiness from '../NbBusiness/NbBusiness';
import OurCustomers from '../OurCustomers/OurCustomers';
import FindHome from "../FindHome/FindHome";
import MultipleLinks from "../MultipleLinks/MultipleLinks";
import NoBrokerServices from "../NoBrokerServices/NoBrokerServices";
import Footer from "../Footer/Footer";


export default function Layout({ children }) {
    return (
        <>
            <NavigationBar />
            <Header />
            <section>
                {children}
            </section>
            <section>
                <WhyUseNB />
                <NbBusiness />
                <OurCustomers />
                <FindHome />
                <MultipleLinks />
                <NoBrokerServices />
                <Footer />
            </section>

        </>
    )
}