import React from 'react'
import { Container, Heading, Text } from '@chakra-ui/layout'

const Header = () => {
    return (
        <Container 
            as='header' 
            maxW='100%' 
            height='50vh' 
            textAlign='center'
            d='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            // credit : supremat.platz
            background='black'>
        
            <Heading 
            as='h1' 
            color='red'
            fontWeight='light'
            fontSize='9xl'>BLOCK.MADNESS
            </Heading>
            
            <Text 
            color='white'
            fontSize='3xl'>
                A Semi-Authoritarian Serious Game.  
            </Text>

        </Container>
    )
}

export default Header
