'use client'

import { useState, useEffect } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { PersonFill, LockFill } from 'react-bootstrap-icons';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './signup.css';




export default function loginPage() {

  const router = useRouter();
  const path_login = () => router.push('/login');

  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleMailChange = (e) => {
    setUserMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const user = {
        user_mail: userMail,
        user_password: userPassword,
      };

      const response = await axios.post('http://localhost:8000/users', user);

      if (response.status === 201) {
        console.log('Kullanıcı başarıyla kaydedildi.');
        // Başka bir sayfaya yönlendirme yapabilirsiniz.
        // router.push('/success');
      } else {
        console.error('Kullanıcı kaydı başarısız.');
      }
    } catch (error) {
      console.error('İstek sırasında bir hata oluştu:', error);
    }
  };

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
              <div className='form' id='form'>
                <h3>Kayıt Ol</h3>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><PersonFill size={17} /></InputGroup.Text>
                  <Form.Control
                    id='user_mail'
                    placeholder="E-mail"
                    aria-label="E-mail"
                    aria-describedby="basic-addon1"
                    onChange={handleMailChange}
                  />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><LockFill size={17} /></InputGroup.Text>
                  <Form.Control id='user_password' type="password" placeholder="Şifre" onChange={handlePasswordChange} /> 
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><LockFill size={17} /></InputGroup.Text>
                  <Form.Control id='confirm_password' type="password" placeholder="Şifre Tekrar" />
                </InputGroup>
                <br />
                <Button className='btn' variant="primary" type="submit" onClick={handleRegister}>Kayıt Ol</Button>
                <br />
                <Button className='btn-2' variant="primary" type="submit" onClick={path_login}>Vazgeç</Button>
              </div>
            </div>
          </Card.Body>
        </Card>

      </div>

    </div>


  )
}
