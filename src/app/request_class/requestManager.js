import axios from 'axios';

class RequestManager {
  constructor() {
    this.baseURL = 'http://localhost:8000'; // Backend URL'si
  }

  async login(username, password) {
    try {
      const response = await axios.post(`${this.baseURL}/login`, {
        user_mail: username,
        user_password: password,
      });
      return response.data; // Başarılı giriş yapıldıysa yanıtı döndür
    } catch (error) {
      throw error; // Hata durumunda hatayı ileterek işlemi sonlandır
    }
  }

  async registerUser(userMail, userPassword) {
    try {
      const response = await axios.post(`${this.baseURL}/users`, {
        user_mail: userMail,
        user_password: userPassword,
      });
      return response.data; // Başarılı kayıt durumunda yanıtı döndür
    } catch (error) {
      throw error; // Hata durumunda hatayı ileterek işlemi sonlandır
    }
  }

  // Diğer istekler de buraya eklenebilir
}

export default new RequestManager(); // Tek bir örnek oluşturup dışarıya açıyoruz
