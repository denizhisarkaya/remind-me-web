'use client'
// 'use client' komutu, bu sayfanın bir istemci tarafı (client-side) kod olduğunu belirtir.

import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { PersonFill, LockFill } from 'react-bootstrap-icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import login from '../../services/loginService.js';
import styles from './login.css';
import Cookie from '@/services/cookieService.js';


export default function loginPage() {

  // useRouter hook'unu kullanarak yönlendirme işlemleri için router nesnesini alır.
  // path_login fonksiyonu, '/main' sayfasına yönlendirir.
  const router = useRouter();
  const path_main = () => router.push('/main');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // E-posta alanındaki değişiklikleri işler.
  const handleMailChange = (e) => {
    setUsername(e.target.value);
  };
  // Şifre alanındaki değişiklikleri işler.
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Kullanıcı adı ve şifreyi backend'e gönder
      const response = await login(username, password);
      console.log(response);

      // Başarılı bir şekilde giriş yapıldıysa '/main' sayfasına yönlendir
      if (response.status === 200) {
        // save to cookie
        Cookie.set("remindmejwt", response.data.token, false);
        path_main();  // Başarılı giriş durumunda ana sayfaya yönlendirme işlemi
      } else if (response.status === 401) {
        alert('Yanlış kullanıcı adı veya şifre!');  // Hatalı giriş durumunda uyarı mesajı gösterme
      } else {
        throw new Error("Hata meydana geldi");   // Beklenmeyen bir durumda hata fırlatma
      }
    } catch (error) {
      console.error('Giriş hatası:', error);  // Hata durumunda hatayı konsola yazdırma
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
              <div className='form'>
                <h3>Hoşgeldiniz</h3>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><PersonFill size={17} /></InputGroup.Text>
                  <Form.Control
                    placeholder="E-mail"
                    aria-label="E-mail"
                    aria-describedby="basic-addon1"
                    onChange={handleMailChange}
                  />
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                  <InputGroup.Text><LockFill size={17} /></InputGroup.Text>
                  <Form.Control type="password" placeholder="Şifre" onChange={handlePasswordChange} />
                </InputGroup>
                <br />
                <Button className='btn' variant="primary" type="submit" onClick={handleLogin}>Giriş Yap</Button>
                <p>Hesabınız yok mu? Hemen <a href="/signup">kayıt ol</a></p>
              </div>
            </div>
          </Card.Body>
        </Card>

      </div>

    </div>


  )
}
