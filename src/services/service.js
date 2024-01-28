import axios from 'axios';

class service {
  static async requestHandler(method, url, data, headers) {
    // İstek yapılandırması oluşturulur
    const config = {
      method,   // HTTP isteği methodu (örneğin: GET, POST, PUT, DELETE)
      url,      // İstek yapılacak URL
      data,     // İstek gövdesinde taşınacak veri
      headers   // İstek başlıkları
    };
    try {
      // axios kullanarak istek gönderilir ve yanıt beklenir
      const response = await axios(config);
      // Yanıt başarıyla alındığında yanıt döndürülür
      return response;
    } catch (error) {
      // Hata durumunda, hata objesi yakalanır
      if (error.request.code === 500) {
        // Eğer hatanın HTTP durum kodu 500 ise, genel bir hata meydana geldiği bildirilir
        alert("Hata Meydana Geldi");
        console.log(error);  // Hatanın detayları konsola yazdırılır
        throw error;   // Hata fırlatılarak işlem sonlandırılır
      } else {
        // Diğer durumlarda, sunucudan gelen yanıt döndürülür
        return error.response;
      }
    }
  }
}

export default service;
