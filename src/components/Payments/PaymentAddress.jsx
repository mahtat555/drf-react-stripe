import { Container, Row, Col, Form } from "react-bootstrap"
import countries from "../../constants/countries"


const PaymentAddress = ({ address, setAddress }) => {

  const changeValue = (value) => {
    if (setAddress) {
      setAddress({ ...address, ...value })
    }
  }

  Object.keys(address).map((key) => {
    address[key] = address[key] ? address[key] : ""
  })

  return (
    <Container style={{ width: "60%" }}>
      <Row className="border" style={{ padding: "20px" }}>
        <Col>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={address.email}
            disabled={!setAddress}
            onChange={(event) => changeValue({ email: event.target.value })}
          />
        </Col>
        <Col>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={address.name}
            disabled={!setAddress}
            onChange={(event) => changeValue({ name: event.target.value })}
          />
        </Col>
        <Col>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            value={address.phone}
            disabled={!setAddress}
            onChange={(event) => changeValue({ phone: event.target.value })}
          />
        </Col>
      </Row>
      <br />
      <Row className="border" style={{ padding: "20px" }}>
        <Col>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            value={address.state}
            disabled={!setAddress}
            onChange={(event) => changeValue({ state: event.target.value })}
          />
        </Col>
        <Col>
          <Form.Label>Country</Form.Label>
          <Form.Select
            type="email"
            placeholder="Country"
            value={address.country}
            disabled={!setAddress}
            onChange={(event) => changeValue({ country: event.target.value })}
          >
            <option value="null">------------</option>
            {
              Object.entries(countries).map(([name, value]) => (
                <option key={value} value={value}>{name}</option>
              ))
            }
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            value={address.city}
            disabled={!setAddress}
            onChange={(event) => changeValue({ city: event.target.value })}
          />
        </Col>
        <Col>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Postal Code"
            value={address.postalCode}
            disabled={!setAddress}
            onChange={(event) => changeValue({ postalCode: event.target.value })}
          />
        </Col>
      </Row>
      <br />
      <Row className="border" style={{ padding: "20px" }}>
        <Col>
          <Form.Label>Line 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Line 1"
            value={address.line1}
            disabled={!setAddress}
            onChange={(event) => changeValue({ line1: event.target.value })}
          />
        </Col>
        <Col>
          <Form.Label>Line 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Line 2"
            value={address.line2}
            disabled={!setAddress}
            onChange={(event) => changeValue({ line2: event.target.value })}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default PaymentAddress
