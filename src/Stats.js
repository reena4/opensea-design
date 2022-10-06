import React from 'react'
import { Container, ListGroup, Navbar,Button,Row, Col,Table, Dropdown, Nav ,Form} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Timage from "./images/hedz.jpg"
import Timage1 from "./images/hed1.jpg"
import Timage2 from "./images/hde2.gif"
import Timage3 from "./images/hde3.jpg"
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faUserCircle, faWallet } from '@fortawesome/free-solid-svg-icons'
const Stats = () => {
  return (
    <div>
     <Container fluid >
    <div className='ms-3 me-3'>
    <div>   <h1 className='exploreCollection'>Stats collections</h1>
    </div>
    <div className='exploreLinks horizontal-scrollable '>
    <ListGroup horizontal>
      <ListGroup.Item className='linkspadding '>
      <Link  to="#" className='stats_link'>Top</Link>
      </ListGroup.Item>
      <ListGroup.Item  className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Trending</ListGroup.Item>
      <ListGroup.Item className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>Watchlist</ListGroup.Item>
    </ListGroup>
    <hr className='hr_line '
        // style={{
        //   background: 'gray',
        //   // color: 'lime',
        //   // borderColor: '',
        //   height: '3px',
          
        // }}
      />
      
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >  
         
        <Dropdown>
      <Dropdown.Toggle variant="outline-secondary " className='me-2 button' id="dropdown-basic">
        24h
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          
          <Form className="d-flex stat_formsize "> 
          <Form.Control 
            
              type="search"
              placeholder="Search items,collections and accounts"
              className="me-2"
              aria-label="Search"
               size="lg"
              style={{backgroundColor: 'transparent',color:"black"}}
              
             
            />  */}
             
            {/* <Button variant="outline-success">Search</Button> */}
          {/* </Form.Group> */}
          {/* </Form>
            
          <Nav className='topnav-right'>
             <Dropdown>
      <Dropdown.Toggle variant="outline-secondary " className='me-2 button' id="dropdown-basic">
        24h
      </Dropdown.Toggle> 
      </Dropdown>
            </Nav>  
            
       
      </Navbar> */}
    </div>
</div>
   </Container>
   <Navbar bg="light" variant="dark" >
        <Container fluid className='container_padding'>
          {/* <Navbar.Brand href="#trending">Trending</Navbar.Brand> */}
          <Dropdown>
      <Dropdown.Toggle variant="outline-secondary " className='me-2 button' id="dropdown-basic">
        24h
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Form className=" stat_formsize "> 
          <Form.Control 
            
              type="search"
              placeholder="Search items,collections and accounts"
              className="me-2"
              aria-label="Search"
               size="lg"
              style={{backgroundColor: 'transparent',color:"black"}}
              
             
            />  </Form>
             
             <Nav className='topnav-right'>
             
            
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

export default Stats;
