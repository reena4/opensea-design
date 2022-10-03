import React from 'react'
import { Container ,Row,Col,Button,Card} from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
import imag from './images/a2.jpg'
// import imag1 from './images/a1.jpg'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import HomeCarousel from './HomeCarousel';



const Explore = () => {
  return (
    
    <>
      <Container fluid className='background'>
      <Row className=' explore '>
      <Col md={11} className="mx-auto"> 
      <Row >
        <Col md={6} className="col1 row-adjust">
        <h1 className='colftext'>Discover, collect, and sell extraordinary NFTs</h1>
        <p className='colsetext'>OpenSea is the world's first and <br/>largest NFT marketplace</p>
        <Row>
        <Col className='col-padding' >
          <Button  className="button-size" variant="primary"  size="lg">Explore</Button>{"  "}
         <Button  className="button-size" variant="secondary" size='lg'>Create</Button></Col>
        </Row>
        </Col>
        <Col md={6}>
          {/* <Image src={imag} rounded fluid className="img-height" alt="/"/> */}
          <Card   >
            <Card.Img src={imag} variant="top" fluid  className="img-height "/>
            <Card.Body >
            <Row >
           <Col md={2} className='card-textcolor'>
           <img src={imag} className="img-format ms-2"  alt='/'/></Col>
           <Col md={10} >
              <Card.Text className='card-textcolor ms-0'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. 
              </Card.Text>
              </Col>
              </Row>
            </Card.Body>
          </Card>
          
        </Col>
        </Row>
        </Col>
      </Row>
      
    </Container>
    
    <HomeCarousel/>
  
    </> 
    
    
  )

}

export default Explore;
