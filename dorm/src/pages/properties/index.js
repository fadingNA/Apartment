import {Box, SimpleGrid} from "@chakra-ui/react";
import PropertyCard from "../../../components/Home/Property";

export default function indexProperty({properties}) {
    return (
        <>
            <Box backgroundColor={'#f7f8f9'}
                 padding={'3rem'}>
                <Box maxWidth={'1280px'} margin={'0'}>
                    <SimpleGrid column={{base: "1", sm: '3'}} gap={{base: '0', sm: '2rem'}}>
                        {properties.map((properties) => (
                            <PropertyCard key={properties.id} {...properties}/>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    )
}

export async function getStaticProps() {
    const {hits} = require("../../../feature/data/properties.json");
    return {
        props: {properties: hits}
    }
}