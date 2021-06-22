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
            {backgroundImage: "url('https://www.moma.org/media/W1siZiIsIjQ3NjkyNCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=8156854cac9fe22f')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>

            <Heading 
            as='h1' 
            color='red.500'
            fontWeight='light'
            fontSize='9xl'>BLOCK.MADNESS
            </Heading>

        </Container>
    )
}

export default Header
