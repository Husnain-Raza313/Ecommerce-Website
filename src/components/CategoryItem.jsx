
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { Link } from 'react-router-dom';

const Container = styled.div`

    flex:1;
    margin:3px;
    height:70vh;
    position:relative;

`
const Image = styled.img`

        
        width:100%;
        height:100%;
        object-fit:cover;

        ${mobile({ height: '25vh'})};
        

`
const Title = styled.h1`

    color:white;
    margin-bottom:20px;
`
const Info = styled.div`

        position:absolute;
        height:100%;
        width:100%;
        left:0;
        top:0;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;


`
const Button = styled.button`

        border:none;
        padding:10px;
        background-color:white;
        color:gray;
        cursor:pointer;
        font-weight:600;

`

const CategoryItem = (props) => {
    return (
         
        <Container>
            <Image src={ props.item.img}/>
            <Info>
                <Title>{ props.item.title }</Title>
                <Link to='/productList' style={{ color: 'black',textDecoration:'none'}}>
                <Button>Shop Now</Button>
                </Link>
            </Info>
        </Container>
        
    )
}

export default CategoryItem
