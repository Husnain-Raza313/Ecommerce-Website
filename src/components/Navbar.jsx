import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import Badge from '@material-ui/core/Badge'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import {mobile} from '../Responsive'
import { Link } from 'react-router-dom'



const Container = styled.div`

    height:60px;

    ${mobile({ height: '50px'})};
  
`;
const Wrapper = styled.div`

    padding: 0px 20px;
  
    display:flex;
    align-items:center;
    justify-content: space-between;

    height:50px;

    ${mobile({ padding: '10px 0px'})}
`;
const Left = styled.div`

    flex:1;
    display: flex;
    align-items: center;

    ${mobile({marginBottom:'15px'})};

`;
const Language = styled.span`

    font-size:14px;
    cursor:pointer;

    ${mobile({ display: 'none'})};
    
`;

const SearchContainer = styled.div`

    border:0.5px solid grey;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`;

const Input = styled.input`

    border:none;

    ${mobile({ width: '50px'})}

`

const Center = styled.div`

        flex:1;
        text-align:center;
        ${mobile({marginBottom:'15px',paddingLeft:'20px'})};
`;

const Logo = styled.h1`

        font-weight:bold;
        ${mobile({ fontSize: '24px'})}
`;


const Right = styled.div`

        flex:1;
        display:flex;
        align-items:center;
        justify-content: flex-end;
        
        ${mobile({ flex:'2' ,marginBottom:'15px', justifyContent: 'center'})};


`;

const MenuItem = styled.div`

    font-size:14px;
    cursor:pointer;
    margin-left: 25px;
    
    ${mobile({ fontSize: '12px', marginLeft:'10px'})}
`
// const Link = styled.a`

        
//         border:2px solid red;
// `




const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <Search style={{ color: 'gray' , fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Link to='/' style={{ color: 'black',textDecoration:'none'}}><Logo>MyCart</Logo></Link></Center>
                <Right>
                    <Link to='/register' style={{ color: 'black',textDecoration:'none'}}><MenuItem>Register</MenuItem></Link>
                    <Link to='/login' style={{ color: 'black',textDecoration:'none'}}><MenuItem>Sign In</MenuItem></Link>
                    <Link to='/cart' style={{ color: 'black',textDecoration:'none'}}>
                    <MenuItem>
                        
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge> 
                        
                        
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
