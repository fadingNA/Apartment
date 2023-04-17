//import '@/styles/globals.css'
import * as React from 'react'
import {ChakraProvider} from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";

export default function App({Component, pageProps}) {

    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )

}
