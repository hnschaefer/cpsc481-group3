import './App.css';
import spaghetti from './/images/danijela-prijovic-qits91IZv1o-unsplash.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const App = () => {
  return (
    <div className="App">
      <div>
        <Button variant="dark" size="lg">order cart</Button>{' '}
        <Button variant="dark" size="lg">call for server</Button>{' '}
        <Button variant="dark" size="lg">pay for order</Button>{' '}
      </div>
      <p class="text-left"><u>return to menu</u></p>
      <Container>
        <Row>
          <Col md={6}>
            <h1><b>spaghetti portofino</b></h1>
            <Image src={spaghetti} rounded style={{ width: "480px", height: "400px" }} />
            <p class="text-left">lemon butter sauce, roasted gem tomatoes, corn, fennel chili crumb, garlic crostini</p>
            <p class="text-left">customer rating:
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </p>
            <p class="text-left">price: $28</p>
            <p class="text-left">tags: vegetarian pasta</p>
          </Col>
          <Col md={6}>
            <h3>customize order</h3>
            <p class="text-left"><b>add protein</b></p>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`shrimp-${type}`}
                    label={`shrimp $4`}
                  />
                  <Form.Check
                    type={type}
                    id={`chicken-${type}`}
                    label={`chicken $4`}
                  />
                  <Form.Check
                    type={type}
                    id={`sausage-${type}`}
                    label={`sausage $4`}
                  />
                </div>
              ))}
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>customization notes</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <Button variant="dark" size="lg">add to order</Button>{' '}
    </div>
  );
}

export default App;
