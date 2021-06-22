import React from 'react'
import { Container, Text, Link } from '@chakra-ui/layout'

const Nav = () => {
    return (
        <Container maxW='100%' backgroundColor='red' d='flex' heigth='30vh' justifyContent='space-between'>
            <Link href='#' fontSize='3xl'>MENU</Link>
            <Link href='#' fontSize='3xl'>MENU</Link>
            <Link href='#' fontSize='3xl'>MENU</Link>
            <Link href='#' fontSize='3xl'>MENU</Link>
            <Link href='#' fontSize='3xl'>MENU</Link>
            <Link href='#' fontSize='3xl'>MENU</Link>
        </Container>
    )
}

export default Nav
