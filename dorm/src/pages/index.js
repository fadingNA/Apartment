import HeroBanner from "../../components/Home/HeroBanner";
import Layout from "../../components/Layout";
import PropertyCard from "../../components/Home/Property";
import Form from "../../components/modules/Form/form";
import FeaturedProperties from "../../components/Home/FeaturedProperty/FeatureProperties";
import MeetTeam from "../../components/modules/MeetTeam";

export default function Home({featuredProperties}) {

    return (
        <>
            <HeroBanner/>
            <hr/>
            <FeaturedProperties featuredProperties={featuredProperties}/>
            <MeetTeam/>
        </>
    )
}

export async function getStaticProps() {
    const {hits} = require('feature/data/properties.json');
    return {
        props: {featuredProperties: hits.slice(0, 10)}
    }

}