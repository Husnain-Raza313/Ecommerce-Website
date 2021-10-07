import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`

        height:60vh;
        background-color:#fcf5f5;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

`

const Title = styled.h1` 

        font-size:70px;
        margin-bottom:20px;

`
const Desc = styled.div`

        font-size:24;
        font-weight:300;
        margin-bottom:20px;

        ${mobile({ textAlign: 'center'})}

`
const InputContainer = styled.div`

        width:50%;
        height:40px;
        background-color:white;
        display:flex;
        justify-content:space-between;

        ${mobile({ width: '80%'})}
        
        
`
const Input = styled.input`

        border:none;
        flex:8;
        padding-left:20px;
        border:1px solid lightgray;
`
const Button = styled.button`

            flex:1;
            margin-left:5px;
            background-color:teal;
            border:none;
            color:white;
            cursor:pointer;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get Timely Updates For Your Favorite Products</Desc>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter