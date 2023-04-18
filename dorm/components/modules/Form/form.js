import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box
} from "@chakra-ui/react";


export default function Form() {
    return (<>  <Box display={'flex'} flexDirection={'column'}
                     justifyContent={'center'}
                     justifyItems={'center'}
                     mt={'10'}
                     width={'50%'}
                     alignItems={'center'}>
        <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type={'name'}/>
            <br/>
            <FormLabel>Last Name</FormLabel>
            <Input type={'lastName'}/>
            <FormHelperText> We will never share your confidential.</FormHelperText>
        </FormControl>
    </Box>

    </>)
}