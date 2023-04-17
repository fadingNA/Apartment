import {Box} from '@chakra-ui/react';
import React from "react";


export default function HeroBanner() {
    return (
        <>
            <Box position={'relative'}
                 minHeight={{base: '110vh', sm: '60vh'}}
                 backgroundImage={`url('./bg1.jpg')`}
                 backgroundPosition={'center'}
                 backgroundAttachment={'fixed'}>
                <Box
                    position={'absolute'}
                    width={'100%'}
                    height={'100%'}
                    opacity={'0.85'}
                    backgroundColor={'blue.900'}>
                </Box>
            </Box>
        </>
    )
}