import {Badge, Box, Button, Card, Text} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
import {usePropertyFormat} from "../../common/Hooks/usePropertyFormat";

export default function PropertyCard(props) {
    const {
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID
    } = usePropertyFormat(props);

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

        <Box
            marginBottom={'4rem'}
            backgroundColor={'#fff'}>
            <Box backgroundImage={`url("${coverPhoto}")`}
                 height={'250px'}
                 backgroundPosition={'center center'}
                 backgroundSize={'cover'}
                 position={'relative'}
                 display={'flex'}
                 flexDirection={'column'}
                 justifyContent={'space-between'}>
                <Box margin={'1rem'}>
                    <Badge colorScheme={'green'}>
                        {purpose}
                    </Badge>
                </Box>
                <Box height={'50%'} bgGradient={'linear(to-t, #0a0b1cd9, #ffffff00 100%)'}>
                    <Text fontSize={'3xl'}
                          fontWeight={'medium'}
                          color={'whiteAlpha.900'}>
                        {price}
                    </Text>
                </Box>
            </Box>
            <Box padding={'1.5rem'}>
                <Text fontSize={'xl'} fontWeight={'medium'}
                marginBottom={'1rem'}>{propertyType}</Text>
                <Text fontWeight={'light'} fontSize={'sm'}>
                    {address}
                </Text>
            </Box>
        </Box>

    </>)
}

//<Box maxW={'sm'}
//              borderWidth={'1px'}
//              borderRadius={'lg'}
//              overflow={'hidden'}
//              margin={'2rem'}>
//             <Image src={property.imageUrl}/>
//             <Box p={'6'}>
//                 <Box display={'flex'}
//                      alignItems={'baseline'}>
//                     <Badge borderRadius={'full'} px={'2'} colorScheme={'teal'}>
//                         New!!
//                     </Badge>
//                     <Box color={'gray.500'}
//                          fontWeight={'semibold'}
//                          letterSpacing={'wide'}
//                          fontSize={'xs'}
//                          textTransform={'uppercase'}
//                          ml={'2'}>
//                         {property.beds} beds &bull; {property.baths} baths
//                     </Box>
//                 </Box>
//                 <Box mt={'1'} fontWeight={'semibold'}
//                      as={'h4'}
//                      lineHeight={'tight'}
//                      noOfLines={1}>
//                     {property.title}
//                 </Box>
//             </Box>
//         </Box>