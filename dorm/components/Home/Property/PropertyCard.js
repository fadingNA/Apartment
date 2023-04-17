import {Badge, Box, Button, Card} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";

export default function PropertyCard({objectID}) {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        beds: 3,
        baths: 2,
        title: 'Modern Apartment In Bangkok City',
        formattedPrice: '$2500 / month',
        reviewCount: 34,
        rating: 5
    }
    return (<>
        <Box maxW={'sm'}
             borderWidth={'1px'}
             borderRadius={'lg'}
             overflow={'hidden'}>
            <Image src={property.imageUrl}/>
            <Box p={'6'}>
                <Box display={'flex'}
                     alignItems={'baseline'}>
                    <Badge borderRadius={'full'} px={'2'} colorScheme={'teal'}>
                        New!!
                    </Badge>
                    <Box color={'gray.500'}
                         fontWeight={'semibold'}
                         letterSpacing={'wide'}
                         fontSize={'xs'}
                         textTransform={'uppercase'}
                         ml={'2'}>
                        {property.beds} beds &bull; {property.baths} baths
                    </Box>
                </Box>
                <Box mt={'1'} fontWeight={'semibold'}
                     as={'h4'}
                     lineHeight={'tight'}
                     noOfLines={1}>
                    {property.title}
                </Box>
            </Box>
        </Box>

    </>)
}