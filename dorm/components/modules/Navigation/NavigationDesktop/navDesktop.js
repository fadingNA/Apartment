import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {HiHomeModern} from "react-icons/hi2";
import Link from "next/link";
import {navigationLinks} from "../navigationCOnsts";

export default function NavDesktop() {
    return (
        <>
            <Box color={'green.500'}
                 paddingY={'2rem'}
                 backgroundColor={'white'}
                 display={{base: 'none', md: 'block'}}>
                <Box maxWidth={'1280px'} margin={'0 auto'}>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Link href='/' passHref legacyBehavior>
                            <Box display={'flex'} gap={'2'} alignItems={'center'}>
                                <HiHomeModern size={'30'}/>
                                <Text fontSize={'2xl'} fontWeight={'black'}>
                                    Nonthachai Apartment
                                </Text>
                            </Box>
                        </Link>
                        <Flex gap={'12'} alignItems={'center'} fontWeight={'medium'}>
                            {navigationLinks.map((i) => (
                                <NavigationLinks key={i.title} {...i}/>
                            ))}
                            <Button padding={'1.5rem'} colorScheme={'twitter'}
                                    fontSize={'0.8rem'}
                                    fontWeight={'medium'}>
                                Create Listing
                            </Button>

                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

// custom components

export const NavigationLinks = ({
                                    title, link, icon
                                }) => {
    return (
        <Link href={link} passHref legacyBehavior>
            <Flex alignItems={'center'} gap={'0.5rem'}>
                {icon}
                {title}
            </Flex>
        </Link>
    )
}