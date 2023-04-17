import {Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {HiHomeModern} from "react-icons/hi2";
import Link from "next/link";
import {navigationLinks} from "../navigationCOnsts";
import {HamburgerIcon} from "@chakra-ui/icons";

export default function NavMobile() {
    return (
        <>
            <Box color={'green.500'}
                 padding={'2rem'}
                 backgroundColor={'white'}
                 display={{base: 'block', md: 'none'}}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Link href='/' passHref legacyBehavior>
                        <Box display={'flex'} gap={'2'} alignItems={'center'}>
                            <HiHomeModern size={'30'}/>
                            <Text fontSize={'2xl'} fontWeight={'black'}>
                                Nonthachai Apartment
                            </Text>
                        </Box>
                    </Link>
                    <Menu>
                        <MenuButton as={IconButton} aria-label={'Options'} icon={<HamburgerIcon/>}/>
                        <MenuList>
                            {navigationLinks.map((i) => (
                                <NavLink key={i.title} {...i}/>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>
        </>
    )
}

export const NavLink = ({title, link, icon}) => {
    return (
        <Link href={link} passHref legacyBehavior>
            <MenuItem alignItems={'center'} gap={'0.5rem'}>
                {icon}
                {title}
            </MenuItem>
        </Link>
    )
}