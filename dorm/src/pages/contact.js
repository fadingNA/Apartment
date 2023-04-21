import {useForm} from "react-hook-form";
import {Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, Text, Textarea} from "@chakra-ui/react";

export default function Contact() {
    const {
        register, handleSubmit, formState: {
            errors
        }
    } = useForm();

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <Box width={'100%'}
                 padding={'2rem'}
                 borderRadius={'sm'}
                 backgroundColor={'white'}
                 color={'gray.700'}>
                <Text fontSize={'xl'} fontWeight={'bold'} textAlign={'center'}>
                    Contact Us
                </Text>
                <Text fontSize={'lg'} textAlign={'center'}>
                    Complete form below will get back to you!
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <Flex gap={{base: '0', sm: '1rem'}}
                              flexDirection={{base: 'column', sm: 'row'}}>
                            {/* Name */}
                            <Input marginTop={'1.3rem'} id={'name'} type={'text'}
                                   placeholder={'Name'} {
                                       ...register("name", {
                                           required: true
                                       })
                                   }/>
                            {errors.name && <Text fontSize={'xs'} color={'red.400'}>
                                {errors.name.type}
                            </Text>}
                            {/* Email */}
                            <Input marginTop={'1.3rem'} id={'email'} type={'email'}
                                   placeholder={'Email'} {
                                       ...register("email", {
                                           required: true
                                       })
                                   }/>
                            {errors.email && <Text fontSize={'xs'} color={'red.400'}>
                                {errors.email.type}
                            </Text>}
                            {/* Contact */}
                            <Input marginTop={'1.3rem'} id={'phone'} type={'text'}
                                   placeholder={'Phone number'} {
                                       ...register("phone", {
                                           required: true
                                       })
                                   }/>
                            {errors.phone && <Text fontSize={'xs'} color={'red.400'}>
                                {errors.phone.type}
                            </Text>}
                        </Flex>
                        <Box maxWidth={'1000px'} mt={12}>
                            <FormLabel justifyContent={'center'} textAlign={'center'}>Enquiry Message</FormLabel>
                            <Textarea marginTop={'1.3rem'} id={'detail'} type={'text'}
                                      placeholder={'Enquiry message'}/>
                        </Box>


                        {/* Check box consent */}
                        <Checkbox marginTop={'1.3rem'} id={'gdpr'} type={'checkbox'} placeholder={'GDPR'} {
                            ...register('gdpr', {
                                required: true
                            })
                        }>I consent to having this website store my submitted info</Checkbox>
                        {errors.gdpr && (<Text fontSize={'xs'} color={'red.400'}>
                            {errors.gdpr.type}
                        </Text>)}
                    </FormControl>
                    <Button type={'submit'} colorScheme={'blue'} width={'100%'} fontSize={'xl'}
                            padding={'2rem'}
                            marginTop={'2rem'}>
                        Submit
                    </Button>
                </form>
            </Box>
        </>
    )
}