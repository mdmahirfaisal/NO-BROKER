import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/HomeLayout/HomeLayout';
import Buy from '../../components/Buy/Buy';
import Rent from '../../components/Rent/Rent';
import Commercial from '../../components/Commercial/Commercial';

const PayRent = () => {
    const router = useRouter();

    const { payRent, state } = router.query;


    let dynamicContent = <Buy />;
    if (payRent === "buy") {
        dynamicContent = <Buy />
    }
    else if (payRent === "rent") {
        dynamicContent = <Rent />
    }
    else if (payRent === "commercial") {
        dynamicContent = <Commercial />
    }

    return (
        <Layout>
            {dynamicContent}
        </Layout>
    );
};

export default PayRent;
