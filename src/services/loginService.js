import service from './service.js';

async function login(username, password) {
    try {
        const response = await service.requestHandler('post', "http://localhost:8000/login", {
            user_mail: username,
            user_password: password,
        });
        return response; // Başarılı giriş yapıldıysa yanıtı döndür
    } catch (error) {
        return error.response;
    }
}

export default login; // Tek bir örnek oluşturup dışarıya açıyoruz
