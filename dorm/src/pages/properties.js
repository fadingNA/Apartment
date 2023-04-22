import {Box, Card, CardBody, Heading, Stack, Text} from "@chakra-ui/react";

export default function Property(){
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
                <Text fontSize={'lg'} fontWeight={'light'}
                marginTop={'1rem'}
                marginBotom={'3rem'}
                paddingX={'2rem'}
                textAlign={'center'}>
                    This is all available apartment.
                </Text>
                <hr/>
                <Card maxW={'sm'}>
                    <CardBody>
                        <Stack mt={'6'} spacing={'3'}>
                            <Heading size={'md'}>
                                Living room sofa
                            </Heading>
                            <Text>
                                This Apartment has big room.
                            </Text>
                            <Text color={'blue.600'} fontSize={'2xl'}>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>

                </Card>
            </Box>
        </>
    )
}