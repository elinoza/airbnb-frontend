import React from "react"
import {Container,Button, Card, Row, Col} from "react-bootstrap"
import { AiFillStar ,AiOutlineHeart} from 'react-icons/ai';




class Body extends React.Component{
    render(){
        return(
<Container className=" bodyContainer "  >

<div className="border-bottom py-3  "> 
    300 + stays
    <h2>Stays in Fethiye</h2>
    

<Button variant="none"  className="filterButton px-3 py-2 mr-2"> Cancellation Flexibility</Button>
<Button variant="none"  className="filterButton px-3 py-2 mr-2"> Type of Place  </Button>
<Button variant="none"  className="filterButton px-3 py-2 mr-2"> Price</Button>
<Button variant="none"  className="filterButton px-3 py-2 mr-2"> Rooms and Beds</Button>
<Button variant="none"  className="filterButton px-3 py-2 mr-2">More Filters</Button>
<p className="text-muted my-3"> Enter dates and number of guests to see the total price per night. </p>
</div>
<div>
<p>Review COVID-19 travel restrictions before you book.<span><a href="https://www.airbnb.ca/help/topic/1418/government-travel-restrictions-and-advisories">Learn more</a></span></p>
<Row>
    <Col sm={6} md={3} lg={2}>
            <Card style={{ width: '18rem' }}>
                <div style={{ position:"relative"}}> 
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <AiOutlineHeart  id="hearticon"/>
                </div>
        
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <div><AiFillStar className="staricon"/> Rate (people)</div>
            <p>Type of Place . City</p>
            <p>Description</p>
            </Card.Text>
            
        </Card.Body>
        </Card>
    </Col>
</Row>
</div>
</Container>


        )
    }
    
}
export default Body