import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import { Link } from "react-router-dom"


const Info = styled.div`

        opacity:0;
        position:absolute;
        left:0;
        top:0;
        height:100%;
        width:100%;
        background-color:rgba(0,0,0,0.2);
        z-index:3;
        display:flex;
        align-items:center;
        justify-content:center;
        transition:all 0.5s ease;
        
      

`


const Container = styled.div`

        flex:1;
        margin:5px;
        min-width:280px;
        height: 350px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#f5fbfd;
        position:relative;
        

        &:hover ${Info}{
        opacity:0.8;
    }  

        
`
const Circle = styled.div`

        width: 200px;
        height:200px;
        border-radius:50%;
        background-color:white;
        position:absolute;


`
const Image = styled.img`

        height:75%;
        z-index:2;
`

const Icon = styled.div`

        height:40px;
        width:40px;
        background-color:white;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:5px;
        transition:all 0.3s ease;
        cursor:pointer;

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }

`

const ProductItem = ({item}) => {
    return (
        <Link to='/product' style={{ color: 'black',textDecoration:'none'}}>
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon/>
                </Icon>
                <Icon>
                    <SearchOutlinedIcon/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
        </Link>
    )
}

export default ProductItem
