import {Box, Flex, Text} from "@chakra-ui/react";
import {agents} from "./agentConst";
import AgentCard from "./AgentCard";

export default function MeetTeam() {

    return (
        <>
            <Box maxWidth={'1280px'} margin={'0 auto'}
                 padding={{base: '3rem', sm: '6rem'}}>
                <Text fontSize={{base: '4xl', sm: "5xl"}} lineHeight={'shorter'}
                      fontWeight={'light'} paddingX={'2rem'}
                      textAlign={'center'}>Meet the team</Text>
                <Text fontSize={'2xl'} fontWeight={'light'} marginTop={'1rem'}
                      marginBottom={'3rem'} paddingX={'2rem'} textAlign={'center'}>
                    The best in the industry, at your sevice of Thailand
                </Text>
                <Flex direction={{base: "column", sm: "row"}} justifyContent={"space-between"} gap={'1.5rem'}>
                    {agents.map((agent) => (
                        <AgentCard key={agent.name} {...agent}/>
                    ))}
                </Flex>
            </Box>
        </>
    )
}