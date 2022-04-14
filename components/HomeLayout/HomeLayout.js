import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import WhyUseNB from "../WhyUseNB/WhyUseNB";
import NbBusiness from '../NbBusiness/NbBusiness';
import OurCustomers from '../OurCustomers/OurCustomers';
import FindHome from "../FindHome/FindHome";


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
            </section>

        </>
    )
}