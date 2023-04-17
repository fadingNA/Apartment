import React from "react";
import {services, about, ourOffices, workWithUs} from "./footerConsts";
import {Box, Flex, SimpleGrid, Text} from "@chakra-ui/react";
import Link from "next/link";
import {HiHomeModern} from "react-icons/hi2";


export default function Footer() {
    return (
        <>
            <Box backgroundColor={'green.500'}>
                <Box maxWidth={'1280px'}
                     margin={'0 auto'}
                     paddingY={'3rem'}
                     paddingX={{base: '2rem', sm: '0'}}>

                    <SimpleGrid columns={'4'}
                                color={'whiteAlpha.900'}
                                gap={'1.7rem'}
                                minChildWidth={'150px'}>
                        <Flex flexDirection={'column'}>
                            <FooterHeader title={'Services'}/>
                            {services.map((item) => (
                                <FooterLink key={item.name} {...item}/>
                            ))}
                        </Flex>
                        <Flex flexDirection={'column'}>
                            <FooterHeader title={'About'}/>
                            {about.map((item) => (
                                <FooterLink key={item.name} {...item}/>
                            ))}
                        </Flex>
                        <Flex flexDirection={'column'}>
                            <FooterHeader title={'our-Services'}/>
                            {ourOffices.map((item) => (
                                <FooterLink key={item.name} {...item}/>
                            ))}
                        </Flex>
                        <Flex flexDirection={'column'}>
                            <FooterHeader title={'work'}/>
                            {workWithUs.map((item) => (
                                <FooterLink key={item.name} {...item}/>
                            ))}
                        </Flex>
                    </SimpleGrid>
                </Box>
                <Box backgroundColor={'blue.900'}
                     display={'flex'} padding={'2rem'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     flexDirection={'column'}
                     color={'white'}>
                    <Box display={'flex'} gap={'2'} alignItems={'center'}>
                        <HiHomeModern/>
                        <Text fontSize={'lg'} fontWeight={'black'}>
                            Non
                        </Text>
                    </Box>
                    <Text marginTop={'1rem'} fontSize={'xs'} textAlign={'center'}>
                        @ Copyright fadingNA 2023
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export const FooterLink = ({name, link}) => {
    return (
        <Text>
            <Link href={link} passHref legacyBehavior>
                {name}
            </Link>
        </Text>
    )
}

export const FooterHeader = ({title}) => {
    return (
        <Text
            as={'h4'}
            fontWeight={'light'}
            fontSize={'xl'}
            marginBottom={'1rem'}
        >
            {title}
        </Text>
    )
}