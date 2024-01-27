import service from './service.js';

async function registerUser(userMail, userPassword) {
    try {
        const response = await service.requestHandler('post', "http://localhost:8000/signup", {
            user_mail: userMail,
            user_password: userPassword,
        });
        return response; // Başarılı kayıt durumunda yanıtı döndür
    } catch (error) {
        return error.response;
    }
}

export default registerUser; // Tek bir örnek oluşturup dışarıya açıyoruz,,


