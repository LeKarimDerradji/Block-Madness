import React from 'react'
import { Container, Heading } from '@chakra-ui/layout'

const Header = () => {
    return (
        <Container 
            as='header' 
            maxW='100%' 
            height='50vh' 
            textAlign='center'
            d='flex'
            justifyContent='center'
            alignItems='center'
            sx={
            // credit : supremat.platz
            {backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cb204582849369.5d2a2f5c3c903.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
            }}>

            <Heading 
            as='h1' 
            color='red'
            fontWeight='light'
            fontSize='9xl'>BLOCK.MADNESS
            </Heading>

        </Container>
    )
}

export default Header
