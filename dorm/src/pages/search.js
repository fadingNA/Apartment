import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useAtom} from "jotai";
import {searchHistory} from "../../store"
import {encode} from "next/dist/shared/lib/bloom-filter/base64-arraybuffer";
import {router} from "next/client";
import {Box, FormControl, FormLabel, Input, Text} from "@chakra-ui/react";

export default function AdvanceSearch() {
    //const [searchH, setSearchH] = useAtom(searchHistory)
    const {
        register, handleSubmit, formState: {errors}, setValue
    } = useForm();

    /*async function submitForm(data) {
        let queryString = "searchBy=true";
        if (data.geoLocation) {
            queryString += `&geolocation=${encodeURI(data.geoLocation)}`
        }
        if (data.medium) {
            queryString += `&medium=${encodeURI(data.medium)}`
        }
        queryString += `&isOnView=${data.isOnView}`;
        queryString += `&isHighlight=${data.isHighlight}`;
        queryString += `&q=${encodeURIComponent(data.q)}`;
        setSearchHistory(
            await addToHistory(queryString)
        )
        router.push(`/apartment?${queryString}`);
    }

    function handleCheck(e) {
        setValue(e.target.name, e.target.checked)
    }

    useEffect(() => {
        register('isOnView');
        register('isHighlight');
    }, [register])
*/
    return (
        <>
            <Box width={'100%'}
                 padding={'2rem'}
                 borderRadius={'sm'}
                 backgroundColor={'white'}
                 color={'gray.700'}>

                <Box maxWidth={'1280px'}>
                    <Text fontSize={'xx-large'} mb={'3rem'} colorScheme={'blue'} color={'gray.700'}>
                        Complete the form below to download brochure
                    </Text>
                    <form>
                        <FormControl>
                            <FormLabel>Advance Search</FormLabel>
                            <Input type={'search'} value={'search'}/>
                            <FormLabel>
                                Search By
                            </FormLabel>
                            <Box maxWidth={'50%'} display={'flex'} flexDirection={'row'}
                            justifyContent={'space-between'}>

                                <Input type={''}/>
                                <Input/>
                            </Box>
                        </FormControl>
                    </form>

                </Box>
            </Box>
        </>
    )
}