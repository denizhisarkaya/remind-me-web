'use client'
// 'use client' komutu, bu sayfanın bir istemci tarafı (client-side) kod olduğunu belirtir.

import { useState, useEffect } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { PersonFill, LockFill } from 'react-bootstrap-icons';
import { useRouter } from 'next/navigation';
import registerUser from '../../services/signupService.js';
import styles from './signup.css';


export default function loginPage() {

  // useRouter hook'unu kullanarak yönlendirme işlemleri için router nesnesini alır.
  // path_login fonksiyonu, '/login' sayfasına yönlendirir.
  const router = useRouter();
  const path_login = () => router.push('/login');

  // userMail state'ini tanımlar ve varsayılan değerini boş bir dize olarak ayarlar.
  // userPassword state'ini tanımlar ve varsayılan değerini boş bir dize olarak ayarlar.
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // E-posta alanındaki değişiklikleri işler.
  const handleMailChange = (e) => {
    setUserMail(e.target.value);
  };
  // Şifre alanındaki değişiklikleri işler.
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  // Kayıt işlemini gerçekleştirir.
  const handleRegister = async () => {
    try {
      // Kullanıcı tarafından girilen verileri kontrol eder.
      if (!userMail || !userPassword) {
        console.error('E-posta veya şifre boş bırakılamaz.');
        alert('E-posta veya şifre boş bırakılamaz.'); // Uyarı göster
        return;
      }

      // Kullanıcı bilgilerini bir POST isteği ile sunucuya gönderir.
      const response = await registerUser(userMail, userPassword);  // Kullanıcıyı kaydetmek için sunucuya istek yapılır
      console.log(response);

      // Sunucudan dönen yanıtın durumunu kontrol eder
      if (response.status === 201) {  // Başarılı durum kodu: Kullanıcı başarıyla kaydedildi
        alert('Kullanıcı başarıyla kaydedildi.');
        // Login sayfasına yönlendirme yapılır.
        path_login();  // Kullanıcıyı giriş sayfasına yönlendirir
      } else if (response.status === 409) {  // Çakışan durum kodu: Aynı mail ile yeniden kayıt yapılamaz
        alert('Aynı mail ile yeniden kayıt yapamazsınız!');
      } else {
        throw new Error("Hata Meydana Geldi");  // Beklenmeyen bir hata durumunda hata fırlatılır
      }
    } catch (error) {// İstek sırasında oluşan hataları yakalar
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
                  <Form.Control type="password" placeholder="Şifre" onChange={handlePasswordChange} />
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
