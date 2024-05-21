import axios from "axios";
axios.defaults.baseURL = 'http://localhost:1111';
class AuthServices {
    login = async (username, password) => {
        try {
            const response = await axios.post('/login', { username, password });
            localStorage.setItem('token', JSON.stringify(response.data.token));
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    };
    register = async (username, nickname, password) => {
        try {
            const response = await axios.post('/register', { username, nickname, password });
            console.log(response);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };
    logout = () => {
        localStorage.removeItem('token');
    }
}

export default new AuthServices();