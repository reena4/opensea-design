import React from 'react'
import { Navbar, Container, Nav ,Button, Dropdown, Col, Row, Table} from 'react-bootstrap'
import Timage from "./images/hedz.jpg"
import Timage1 from "./images/hed1.jpg"
import Timage2 from "./images/hde2.gif"
import Timage3 from "./images/hde3.jpg"
const Navbrands = () => {
    
  return (
    <div>
      <Navbar bg="dark" variant="dark" className='navbrand'>
        <Container fluid className='container_padding'>
          {/* <Navbar.Brand href="#trending">Trending</Navbar.Brand> */}
          <Nav className="me-auto">
         <Nav.Link  className="active" href="#">Trending</Nav.Link>
            <Nav.Link  href="#">Top</Nav.Link>
             </Nav>
             
             <Nav className='topnav-right'>
             <Dropdown>
      <Dropdown.Toggle variant="outline-secondary " className='me-2 button' id="dropdown-basic">
        24h
      </Dropdown.Toggle>

      {/* <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu> */}
    </Dropdown>
            
            <Button variant="outline-secondary" className="button">View all</Button>
            
          </Nav>
          
           </Container>
      </Navbar>
      <Container  fluid className='bg-dark container_padding1'>
      <div className='main-navigation  ' ></div>
      {/* <Row>
      <Col md={12} className="mx-auto  colalign" style={{border: '1px dashed red'}}> 
      <Row >
        <Col md={6} style={{border: '1px dashed red'}}>
        <Row>
        
            <Col md={8}>collection</Col>
            <Col md={2}>Floor Price</Col>
            <Col md={2}>Volume</Col>
            
        </Row>
        </Col>
        
        <Col md={6} >
        <Row>
        <Col md={8}>collection</Col>
            <Col md={2}>Floor Price</Col>
            <Col md={2}>Volume</Col>
        </Row>
        </Col>
        </Row>
        </Col>
      </Row>*/}
      <Row className="mt-3">
      <Col md={12} className="mx-auto  colalign "> 
      <Row >
      
        <Col md={6}>
        
        
        <Table>
      <thead>
        <tr >
          
          <th width="60%" colSpan={3}>collection</th>
          <th   className='th-text'>Floor Price</th>
          <th   className='th-text'>Volume</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        <tr >
          <td width="5%">1</td>
          <td width="13%"><img src={Timage} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
        <tr>
          <td width="5%">2</td>
          <td width="13%"><img src={Timage1} className="timage img-fluid" alt=""/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>Thornton</td>
          <td className='th-text'>@fat</td>
        </tr>
        <tr>
        <td width="5%">2</td>
          <td width="13%"><img src={Timage} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
        <tr>
        <td width="5%">2</td>
          <td width="13%"><img src={Timage} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
        <tr>
        <td width="5%">2</td>
          <td width="13%"><img src={Timage} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
      </tbody>
    </Table>
        
        </Col>
        {/* <Col md={{ span: 6, offset: 1}}> */}
        <Col md={6}>
        <Table >
      <thead>
        <tr>
          
        <th colSpan={3}>collection</th>
          <th className='th-text'>Floor Price</th>
          <th className='th-text'>Volume</th>
        </tr>
      </thead>

      <tbody>
        <tr>
        <td width="5%">1</td>
          <td width="13%"><img src={Timage} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
        <tr>
        <td width="5%">2</td>
          <td width="13%"><img src={Timage1} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
        <tr>
        <td width="5%">2</td>
          <td width="13%"><img src={Timage2} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
        <tr>
        <td width="5%">2</td>
          <td width="13%"><img src={Timage3} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
        <tr>
        <td width="5%">2</td>
          <td width="13%"><img src={Timage} className=" timage img-fluid" alt=''/></td>
          <td>Hedz by Matt Furie</td>
          <td className='th-text'>erer
          </td>
          <td className='th-text'>@mdo</td>
        </tr>
      </tbody>
    </Table>
        
        </Col>
        </Row>
        </Col>
      </Row>
      
      </Container>
      
    </div> 
  )
}

export default Navbrands
