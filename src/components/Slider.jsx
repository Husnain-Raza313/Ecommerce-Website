import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import React, { useState } from 'react';
import {sliderItems} from '../Data'
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`

        height:100vh;
        width:100%;
        display:flex;
        
        position:relative;
        overflow:hidden;

        ${mobile({ display: 'none'})};

`
const Arrow = styled.div`

        height:50px;
        width:50px;
        background-color: #fff7f7;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;

        top:0;
        bottom:0;
        margin:auto;

        left: ${props => props.direction === 'left' && "10px"};
        right: ${props => props.direction === 'right' && "10px"};
        cursor:pointer;
        opacity:0.6;
        z-index:2;
`

const Wrapper = styled.div`

        height:100%;
        display:flex;
        transform:translateX(${props=>props.slideIndex*-100}vw);
        transition: all 1.5s ease;
`
const Slide = styled.div`

    display:flex;
    align-items:center;
    height:100vh;
    width:100vw;

    background-color: #${props => props.bgcolor};

`
const ImageContainer = styled.div`
        flex:1;
        height:100%;
`
const Image = styled.img`

        height:80%;        
`
const InfoContainer = styled.div`

        flex:1;
        padding:50px;

`
const Title = styled.h1`

        font-size:70px;
`
const Desc = styled.p`

        margin:50px 0px;
        font-size:20px;
        font-weight:500;
        letter-spacing:3px;
`
const Button = styled.button`

    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;

    `

const Slider = () => {

    const [slideIndex,setslideIndex]= useState(0)

    const handleClick = (direction) => {
        
        if (direction == 'left') {
            
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    };

    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (

                    <Slide bgcolor={item.bg} key={ item.id }>
                        <ImageContainer>
                             <Link to='/productList' style={{ color: 'black',textDecoration:'none'}}>
                            <Image src={item.img}/>
                            </Link>
                    </ImageContainer>
                    <InfoContainer>
                           <Link to='/productList' style={{ color: 'black',textDecoration:'none'}}> 
                           <Title>{ item.title}</Title>
                           </Link>
                        <Desc>{item.desc}</Desc>
                        <Link to='/productList' style={{ color: 'black',textDecoration:'none'}}>
                        <Button>Shop NOW!!!!</Button>
                        </Link>
                    </InfoContainer>
                    
                </Slide> 

                ))}
                
                
            </Wrapper>
            <Arrow direction='right' onClick={()=> handleClick('right')}>
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider;