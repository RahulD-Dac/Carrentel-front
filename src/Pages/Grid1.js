import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/Title.css';

function Grid1() {
  return (
    <div>
<div className="title-container">
 

<h1   > Our<span className="text-pink"> Services</span></h1>
               <hr className="w-50 m-auto m-5" />
               
                     <div className="underline"></div>
    </div>
      
    <CardGroup>
      <Card className="my-card">
        <Card.Img rounded variant="top" src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <Card.Body>
          <Card.Title>Door To Door PickUp</Card.Title>
          <Card.Text>
            Get picked up at your doorstep, wherever you are, without paying an extra fee.  as your travel companion and expert guide all through your trip.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="my-card">

        <Card.Img variant="top" src="https://images.unsplash.com/photo-1506469717960-433cebe3f181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <Card.Body>
          <Card.Title>Travel Experts</Card.Title>
          <Card.Text>
            Our expert drivers are your travel companions. They undergo intensive training, can speak multiple languages and are masters in driving and navigation. Make use of their local expertise and have a great trip!.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="my-card">

        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/08/06/10/18/people-2590992_1280.jpg" />
        <Card.Body>
          <Card.Title>Sit back & Relax</Card.Title>
          <Card.Text>
            Your safety on your trip is our responsibility.  Our drivers are trained on the best practices of vehicular and personal hygiene as per the guidelines issued by WHO.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}


export default Grid1;