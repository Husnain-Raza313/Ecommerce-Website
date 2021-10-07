import styled from "styled-components"
import { mobile } from "../Responsive"

const Container = styled.div`

        height:100vh;
        width:100vw;
        background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

        background-size: cover;

        display:flex;
        align-items:center;
        justify-content:center;
         


        `
const Wrapper = styled.div`

         width:40%;

        padding:20px;
        background-color:white;
        ${mobile({ width: '75%'})}
       
`
const Title = styled.h1`

        font-size:24px;
        font-weight:500;
`
const Form = styled.form`

        display:flex;
        flex-wrap:wrap;
`
const Input = styled.input`
        flex:1;
        min-width:40%;
        margin: 20px 10px 0 0;
        padding:10px;

`
const Agreement = styled.span`

        font-size:14px;
        margin:20px 0;
`
const Button = styled.button`
        width:40%;
        border:none;
        padding:15px 20px;
        background-color:teal;
        color:white;
        cursor:pointer;

        &:hover{
                background-color:gray;
                color:teal;
                
        }
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account!!</Title>
                <Form>
                    <Input placeholder='First Name' />
                    <Input placeholder='Last Name' />
                    <Input placeholder='Username' />
                    <Input placeholder='Email' />
                    <Input placeholder='Password' />
                    <Input placeholder='Confirm Password' />
                    <Agreement>By creating an account, you are agreeing to the Terms and
                        Condition.</Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register