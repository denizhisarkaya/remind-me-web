import { Button, Form } from 'react-bootstrap';
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


        <div cclassName="box2-2">
          <br />
          <div className='form'>
            <h3>Hoşgeldiniz</h3>
            <br />
            <Form.Control type="email" placeholder="E-mail" />
            <br />
            <Form.Control type="password" placeholder="Şifre" />
            <br />
            <Button className='btn' variant="primary" type="submit">Giriş Yap</Button>
            <p>Hesabınız yok mu? Hemen <a href="URL">kayıt ol</a></p>
          </div>
        </div>

      </div>

    </div>


  )
}
