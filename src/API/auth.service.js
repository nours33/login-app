import axios from "axios";

const API_URL = "https://teosesti.ch/wp-json/jwt-auth/v1/token";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL, {
        username,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          return error.response.data;
        }
      });


  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();