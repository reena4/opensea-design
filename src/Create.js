import React from 'react'
import { Col, Container, Row, ListGroup,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image31 from './images/wallet.jpg'

const Create = () => {
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
      <Button size='sm' >Popular</Button>
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
    </ListGroup>
</Col>
<Col md={2}></Col>

</Row>
      </Container>
    </div>
  )
}

export default Create
