import React, {  useState } from 'react'
import { Col, Container, Row, ListGroup,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image31 from './images/wallet.jpg'

const Create = () => {
  const [showMore,setshowMore]= useState(false)
  return (
    <div>
      <Container >
      <Row className='mt-5 ms-3 mb-5'  >
      <Col md={2} ></Col>
      <Col md={7} >
        <h4 className='create'>You need a crypto wallet to use OpenSea.
</h4>
<p  className='create1'>If you don't have a <Link to='/' style={{textDecoration:'none'}}>wallet </Link>yet, you can select a provider and create one now.</p>
<ListGroup>
<ListGroup.Item action className='p-3 '>
      <img src={Image31} alt="/" className='createimg me-2'/><b className='createtext'>MetaMask</b> 
      <Button className='Button_Create' size='sm' >Popular</Button>
      </ListGroup.Item>
   
      <ListGroup.Item action >
        Coinbase Wallet
      </ListGroup.Item>
      <ListGroup.Item action >
        Success
      </ListGroup.Item>
      <ListGroup.Item action >
        Danger
      </ListGroup.Item>
      <ListGroup.Item action >
        Warning
      </ListGroup.Item>
      <ListGroup.Item action >
        Info
      </ListGroup.Item>
      <ListGroup.Item action >
        Light
      </ListGroup.Item>
      <ListGroup.Item action >
        Dark
      </ListGroup.Item>
      <ListGroup.Item  action onClick={()=>setshowMore(true)}>
       
        {showMore? 'pari': <h5 className='listalign'>show More</h5>} 
      </ListGroup.Item>
{showMore &&
   (
    <>
      <ListGroup.Item action >
        Coinbase Wallet
      </ListGroup.Item>
      <ListGroup.Item action >
        Success
      </ListGroup.Item>
      <ListGroup.Item action >
        Danger
      </ListGroup.Item>
      <ListGroup.Item action >
        Warning
      </ListGroup.Item>
      <ListGroup.Item action >
        Info
      </ListGroup.Item>
      <ListGroup.Item action >
        Light
      </ListGroup.Item>
      <ListGroup.Item action >
        Dark
      </ListGroup.Item>
      <ListGroup.Item action onClick={()=>setshowMore(!showMore)}>
       
        {showMore?<h5 className='listalign'>show Less</h5>:'show More'}
      </ListGroup.Item>
      </>

      )}
      
    </ListGroup>


{/* <Button onClick={()=>setshowMore(!showMore)}>
{showMore?"show Less":'show More'}</Button>  */}

</Col>
<Col md={2}></Col>

</Row>
      </Container>
    </div>
  )
}
// const Create=()=> {
//   const [itemsToShow, setItemsToShow] = useState(3);

//   const cars = [
//     { "name" : "Audi", "country" : "Germany"},
//     { "name" : "BMW", "country" : "Germany" },
//     { "name" : "Chevrolet", "country" : "USA" },
//     { "name" : "Citroen", "country" : "France" },
//     { "name" : "Hyundai", "country" : "South Korea" },
//     { "name" : "Mercedes-Benz", "country" : "Germany" },
//     { "name" : "Renault", "country" : "France" },
//     { "name" : "Seat", "country" : "Spain" },
//   ];

//   const showmore = () => {
//       setItemsToShow(cars.length)
//   }

//   const showless = () => {
//       setItemsToShow(3)
//   }

//   return (
//       <div>
//           {cars.slice(0, itemsToShow).map((car, index) => <li key={index}>{car.name} - {car.country} </li>)}
//           {(itemsToShow === 3) ? <button onClick={showmore}>Show More</button>: <button onClick={showless}>Show Less</button>}
//       </div>
//   )
// }
export default Create;




