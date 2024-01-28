import service from './service.js';

async function registerUser(userMail, userPassword) {
    try {
        // Sunucuya bir POST isteği gönderilir, kullanıcı e-posta adresi ve şifre gönderilir
        const response = await service.requestHandler('post', "http://localhost:8000/user/signup", {
            user_mail: userMail,
            user_password: userPassword,
        });
        // İstek başarıyla tamamlandığında sunucudan dönen yanıt döndürülür
        return response; 
    } catch (error) {
        // Hata durumunda, hatanın içeriğini ve sunucudan dönen yanıtı döndürür
        return error.response;
    }
}

export default registerUser; 