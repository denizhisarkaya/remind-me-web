'use client'
import { Button, Form, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { PersonFill, LockFill } from 'react-bootstrap-icons';
import styles from './login.css';


export default function loginPage() {
  return (

    <div className="container">
      <div className="box">

        <div className="box2-1">
          <div className="b1">
            <h1>Remind-Me</h1>
          </div>
        </div>


        <Card className="shadow">
          <Card.Body>
            <div cclassName="box2-2">
              <br />
              <div className='form'>
                <h3>Hoşgeldiniz</h3>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><PersonFill size={17} /></InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><LockFill size={17} /></InputGroup.Text>
                  <Form.Control type="password" placeholder="Şifre" />
                </InputGroup>
                <br />
                <Button className='btn' variant="primary" type="submit">Giriş Yap</Button>
                <p>Hesabınız yok mu? Hemen <a href="URL">kayıt ol</a></p>
              </div>
            </div>
          </Card.Body>
        </Card>

      </div>

    </div>


  )
}
