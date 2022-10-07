import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import "./footer.css";
const Footer = () => {
  return (
    <div>
    <footer>
  <Container fluid className='bg-secondary ' >
  <Container className='p-4'>
    <Row>
    <Col md={6} >
      <h4>Stay in the loop</h4>
      <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
      <Form className="d-flex formwidth">
      
       
      <Form.Control
              type="search"
              placeholder="Email"
              className="me-2"
              aria-label="Search"
            />
        
        <Button >Search</Button>
      
     
      </Form>
    </Col>
    
    <Col md={6}  >
    <h4>Join the community</h4>
    <Button class="btn"><i class="fa-brands fa-twitter"></i></Button>
<Button class="btn"><i class="fa fa-bars"></i></Button>
<Button class="btn"><i class="fa fa-trash"></i></Button>
<Button class="btn"><i class="fa fa-close"></i></Button>
<Button class="btn"><i class="fa fa-folder"></i></Button>
    </Col>
   
    </Row>
    </Container>
  </Container>
  </footer>
          </div>
  )
}

export default Footer
