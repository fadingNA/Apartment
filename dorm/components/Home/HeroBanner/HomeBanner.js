import {Box, Button, Fade, Text} from '@chakra-ui/react';
import React from "react";
import Link from "next/link";
import HeroForm from "../Heroform";


export default function HeroBanner() {
    return (
        <>
            <Fade in>

                <Box position={'relative'}
                     minHeight={{base: '110vh', sm: '60vh'}}
                     backgroundImage={`url('./bg1.jpg')`}
                     objectFit={'cover'}
                     backgroundPosition={'center'}
                     backgroundAttachment={'fixed'}>
                    <Box
                        position={'absolute'}
                        width={'100%'}
                        height={'100%'}
                        opacity={'0.85'}
                        backgroundColor={'blue.900'}>
                    </Box>
                    <Box display={'flex'}
                         flexDirection={{base: 'column', sm: 'row'}}
                         justifyContent={{base: 'flex-start', sm: 'space-between'}}
                         alignItems={'center'}
                         maxWidth={'1280px'}
                         position={'absolute'}
                         colo={'white'}
                         fontWeight={'light'}
                         left={'0'}
                         right={'0'}
                         bottom={'0'}
                         top={'0'}
                         margin={'0 auto'}
                         padding={'2rem'}>
                        <Box width={{base: '100%', sm: '50%'}}>
                            <Text fontSize={{base: '4xl', sm: '5xl'}}
                                  color={'white'}
                                  lineHeight={'shorter'}
                                  marginBottom={'1.5rem'}>
                                Checkout our <b>Apartment</b> Listings.
                            </Text>
                            <Link href={'/download'} passHref legacyBehavior>
                                <Button marginBottom={'2rem'}>
                                    Click here!
                                </Button>
                            </Link>
                        </Box>
                        <Box width={{base: '100%', sm: 'auto'}} color={'whiteAlpha.900'}
                             marginTop={{base: '2rem', sm: '0'}}>
                            <HeroForm/>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </>
    )
}