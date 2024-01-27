import axios from 'axios';

class service {
  static async requestHandler(method, url, data, headers) {
    const config = {
      method,
      url,
      data,
      headers
    };
    try {
      const response = await axios(config);
      return response;
    } catch (error) {
      if (error.request.code === 500) {
        alert("Hata Meydana Geldi");
        console.log(error);
        throw error; // Hata durumunda hatayı ileterek işlemi sonlandır
      } else {
        return error.response;
      }
    }
  }
}

export default service;
