import service from './service.js';

async function login(username, password) {
    try {
        // Sunucuya bir POST isteği gönderilir, kullanıcı adı ve şifre gönderilir
        const response = await service.requestHandler('post', "http://localhost:8000/user/login", {
            user_mail: username,
            user_password: password,
        });
        // İstek başarıyla tamamlandığında sunucudan dönen yanıt döndürülür
        return response;
    } catch (error) {
        // Hata durumunda, hatanın içeriğini ve sunucudan dönen yanıtı döndürür
        return error.response;
    }
}

export default login; 
