import { Facebook, Instagram, MailOutline, Phone, Pinterest, Twitter } from '@material-ui/icons'
import RoomIcon from '@material-ui/icons/Room'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`

    display:flex;
    ${mobile({ flexDirection: 'column'})}

`
const Left = styled.div` 

        flex:1;
        display:flex;
        flex-direction:column;
        padding: 20px;

`
const Logo = styled.h1`

 
        margin:0;
`
const Desc = styled.p`

 margin:20px 0;
`
const SocialContainer = styled.div`

        display:flex;
        

`
const SocialIcon = styled.div`

        width:40px;
        height:40px;
        border-radius:50%;
        color:white;
        background-color:#${props => props.color};
        margin:5px;
        
        display:flex;
        align-items:center;
        justify-content:center;
        

`
const Center = styled.div`

        flex:1;
        padding:20px;

        ${mobile({ display: 'none'})}

`
const Title = styled.h3` 

        margin-bottom:30px;
        
`
const List = styled.ul` 

        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        flex-wrap:wrap;
        
`
const ListItem = styled.li` 

    width:50%;
    margin-bottom:10px;
    cursor:pointer;
        
`

const Right = styled.div` 

        flex:1;
        padding:20px;
    
        ${mobile({ backgroundColor: '#eee'})}
    

`
const ContactItem = styled.div` 

    margin-bottom:20px;
    display:flex;
    align-items:center;


`
const Payment = styled.img` 

    width:50%;

`




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Cart</Logo>
                <Desc>There needs to be someone to take care of
                    Something which does not belong to him yet he or she
                    takes care of it as if its theirs</Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <Link to='/cart' style={{ color: 'black',textDecoration:'none'}}>
                    <ListItem>Cart</ListItem>
                    </Link>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Get Help</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem><RoomIcon style={{ marginRight: '10px'}}/>Street B244 New York, America</ContactItem>
                <ContactItem><Phone style={{ marginRight: '10px'}}/>Ph No: +23xxxxxxx</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: '10px'}}/>contactus@email.com</ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
            </Right>

        </Container>
    )
}

export default Footer