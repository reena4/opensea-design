import React from 'react'
import { Container,CardGroup,Card, Image,Col, Row} from 'react-bootstrap'
import "./App.css";
import Image1 from './images/opencar.jpg'
import Image2 from './images/opencar1.jpg'
import Image3 from './images/opencar2.jpg'
import Image4 from './images/SNKRZ.jpg'
import Image5 from './images/WWWLands.jpg'
import Image6 from './images/ghir.jpg'
// import {  Link } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

const Explore = () => {
  return (
    <>
    <Container fluid >
    <div className='ms-3 me-3'>
    <div>   <h1 className='exploreCollection'>Explore collections</h1>
    </div>
    <div className='exploreLinks horizontal-scrollable '>
    <ListGroup horizontal>
      <ListGroup.Item className='linkspadding '>Trending</ListGroup.Item>
      <ListGroup.Item  className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Top</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Art</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Collectibles</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Domain Names    </ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Music</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Photography</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Sports</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Trading Cards</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Utility</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Virtual Worlds</ListGroup.Item>
      
    </ListGroup>
    </div>
</div>
   </Container>
   <Container fluid >
   {/* <div className='m-3'>
   <CardGroup >
     <Card >
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        
      </Card> 
      <Card>
        <Card.Img variant="top" src={Image3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
         
        </Card.Body>
        
      </Card>
    </CardGroup>
    </div> */}
    <div className='m-3'>
    <Row  className='row-cols-1 row-cols-md-3 g-3 '>
      <Col >
      <Card  >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height' />
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
    </Row>
    <Row  className='row-cols-1 row-cols-md-3 g-3 '>
      <Col >
      <Card  >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height' />
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
    </Row>
    <Row  className='row-cols-1 row-cols-md-3 g-3 '>
      <Col >
      <Card  >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height' />
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
    </Row>
    <Row  className='row-cols-1 row-cols-md-3 g-3 '>
      <Col >
      <Card  >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height' />
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
    </Row>
    <Row  className='row-cols-1 row-cols-md-3 g-3 '>
      <Col >
      <Card  >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height' />
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
      <Col>
      <Card >
        <Card.Img variant="top" src={Image2} className='ex_card_height'/>
        <Card.Body>
        <Row className="row-index">
           <Col md={2} className='card-textcolor'>
           <img src={Image2} className="img-exformat ms-2"  alt='/'/>
          </Col>
          <Col md={10} className="ex-col-index">
          <Card.Title className='col_index'>Card title</Card.Title>
              
              </Col>
        </Row>
        </Card.Body>
        
      </Card> 
      </Col>
    </Row>
    </div>
   </Container>
    </>
  )
}

export default Explore
