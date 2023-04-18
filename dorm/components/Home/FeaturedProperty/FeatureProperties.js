import {Box, Text} from "@chakra-ui/react";
import Sliders from "./components/PropertySLider";

export default function FeaturedProperties({featuredProperties}) {
    return (
        <>
            <Box maxWidth={'1280px'}
                 margin={'0 auto'} color={'gray.600'}
                 paddingY={{base: '3rem', sm: '6rem'}}>
                <Text fontSize={{base: '4xl', sm: '5xl'}} lineHeight={'shorter'}
                      fontWeight={'light'}
                      paddingX={'2rem'}
                      textAlign={'center'}>
                    Discover Our Apartment properties
                </Text>
                <Text fontSize={'2xl'} fontWeight={'light'}
                      marginTop={'1rem'}
                      marginBottom={'3rem'}
                      paddingX={'2rem'}
                      textAlign={'center'}>
                    A selection of our best apartment
                </Text>
                <Sliders featuredProperties={featuredProperties}/>
            </Box>
        </>
    )
}