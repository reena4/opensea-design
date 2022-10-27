import React from 'react'
import { Container, ListGroup,Row, Col,Table, Dropdown} from 'react-bootstrap';
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
      <Link  to="/StatsTop" className='stats_link'>Top</Link>
      </ListGroup.Item>
      <ListGroup.Item  className='gap'></ListGroup.Item>
      <ListGroup.Item className='linkspadding'>
      <Link to="/Statstrending">Trending</Link></ListGroup.Item>
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
      
     
    </div>
</div>

<div className="ms-3 me-3 " >
<div>
<Dropdown className="d-inline mx-2"  >
        <Dropdown.Toggle id="dropdown-autoclose-true" variant="dark ">
          All Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

     
</div>
</div>
<div className="ms-3 me-3 ">
<Row className="mt-2">
      <Col md={12} className="mx-auto  colalign "> 
      <Row >
      
        <Col md={12}>
        
        
        <Table>
      <thead>
        <tr >
          
          <th width="40%" className='stats_th-text1 statpadding' colSpan={3}>collection</th>
          <th   className='stats_th-text1'>Volume</th>
          <th   className='stats_th-text1'>Change</th>
          <th   className='stats_th-text1'>Floor Price</th>
          <th   className='stats_th-text1'>Sales</th>
        </tr>
      </thead>
      <tbody className='tbody stats_th-text1' >
        <tr className='stats_th-text1'>
          <td width="3%" className='stats_th-text1'>1</td>
          <td width="6%">
          <img src={Timage} className=" timage img-fluid" alt=''/>
          </td>
         <td  className="stats_th-text1">Art Blocks</td>
         <td className="stats_th-text1">561 ETH</td>
         <td className="stats_th-text1">+3%</td>
         <td className="stats_th-text1">-</td>
         <td className="stats_th-text1">296</td>
         
        </tr>
        <tr className='stats_th-text1'>
          <td width="3%" className='stats_th-text1'>1</td>
          <td width="6%">
          <img src={Timage1} className="timage img-fluid" alt=""/>
          </td>
         <td  className="stats_th-text1">Art Blocks</td>
         <td className="stats_th-text1">561 ETH</td>
         <td className="stats_th-text1">+3%</td>
         <td className="stats_th-text1">-</td>
         <td className="stats_th-text1">296</td>
         
        </tr>
        <tr className='stats_th-text1'>
          <td width="3%" className='stats_th-text1'>1</td>
          <td width="6%">
          <img src={Timage2} className=" timage img-fluid" alt=''/>
          </td>
         <td  className="stats_th-text1">Art Blocks</td>
         <td className="stats_th-text1">561 ETH</td>
         <td className="stats_th-text1">+3%</td>
         <td className="stats_th-text1">-</td>
         <td className="stats_th-text1">296</td>
         
        </tr>
        <tr className='stats_th-text1'>
          <td width="3%" className='stats_th-text1'>1</td>
          <td width="6%">
          <img src={Timage1} className=" timage img-fluid" alt=''/>
          </td>
         <td  className="stats_th-text1">Art Blocks</td>
         <td className="stats_th-text1">561 ETH</td>
         <td className="stats_th-text1">+3%</td>
         <td className="stats_th-text1">-</td>
         <td className="stats_th-text1">296</td>
         
        </tr>
        <tr className='stats_th-text1'>
          <td width="3%" className='stats_th-text1'>1</td>
          <td width="6%">
          <img src={Timage3} className=" timage img-fluid" alt=''/>
          </td>
         <td  className="stats_th-text1">Art Blocks</td>
         <td className="stats_th-text1">561 ETH</td>
         <td className="stats_th-text1">+3%</td>
         <td className="stats_th-text1">-</td>
         <td className="stats_th-text1">296</td>
         
        </tr>
        <tr className='stats_th-text1'>
          <td width="3%" className='stats_th-text1'>1</td>
          <td width="6%">
          <img src={Timage1} className=" timage img-fluid" alt=''/>
          </td>
         <td  className="stats_th-text1">Art Blocks</td>
         <td className="stats_th-text1">561 ETH</td>
         <td className="stats_th-text1">+3%</td>
         <td className="stats_th-text1">-</td>
         <td className="stats_th-text1">296</td>
         
        </tr>
        <tr className='stats_th-text1'>
          <td width="3%" className='stats_th-text1'>1</td>
          <td width="6%">
          <img src={Timage3} className=" timage img-fluid" alt=''/>
          </td>
         <td  className="stats_th-text1">Art Blocks</td>
         <td className="stats_th-text1">561 ETH</td>
         <td className="stats_th-text1">+3%</td>
         <td className="stats_th-text1">-</td>
         <td className="stats_th-text1">296</td>
         
        </tr>
        <tr className='stats_th-text1'>
          <td width="3%" className='stats_th-text1'>1</td>
          <td width="6%">
          <img src={Timage2} className=" timage img-fluid" alt=''/>
          </td>
         <td  className="stats_th-text1">Art Blocks</td>
         <td className="stats_th-text1">561 ETH</td>
         <td className="stats_th-text1">+3%</td>
         <td className="stats_th-text1">-</td>
         <td className="stats_th-text1">296</td>
         
        </tr>
        
      </tbody>
    </Table>
        
        </Col>
        
        </Row>
        </Col>
      </Row>
      </div>
      
   </Container>
   
      
    
     
  
    </div>
  )
}

export default Stats;
