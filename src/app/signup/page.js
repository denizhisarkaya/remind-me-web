'use client'
import { Button, Form, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { PersonFill, LockFill } from 'react-bootstrap-icons';
import styles from './signup.css';

import { useRouter } from 'next/navigation';



export default function loginPage() {

  const router = useRouter();

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
            <div className="box2-2">
              <br />
              <div className='form'>
                <h3>Kayıt Ol</h3>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><PersonFill size={17} /></InputGroup.Text>
                  <Form.Control
                    placeholder="E-mail"
                    aria-label="E-mail"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><LockFill size={17} /></InputGroup.Text>
                  <Form.Control type="password" placeholder="Şifre" />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><LockFill size={17} /></InputGroup.Text>
                  <Form.Control type="password" placeholder="Şifre Tekrar" />
                </InputGroup>
                <br />
                <Button className='btn' variant="primary" type="submit" onClick={() => router.push('/main')}>Kayıt Ol</Button>
                <br />
                <Button className='btn-2' variant="primary" type="submit" onClick={() => router.push('/login')}>Vazgeç</Button>
              </div>
            </div>
          </Card.Body>
        </Card>

      </div>

    </div>


  )
}
