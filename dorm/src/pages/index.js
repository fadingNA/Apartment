import HeroBanner from "../../components/Home/HeroBanner";
import Layout from "../../components/Layout";
import PropertyCard from "../../components/Home/Property";
import Form from "../../components/modules/Form/form";

export default function Home() {

    return (
        <>

            <HeroBanner/>

            <hr/>


        </>
    )
}

export async function getStaticProps() {
    const {hits} = require('feature/data/properties.json');
    return {
        props: {properties: hits}
    }

}