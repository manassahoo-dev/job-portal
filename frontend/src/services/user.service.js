import axios from 'axios';

class UserService {

    findAll() {
        return axios.get('/users');
    }

    findById(id) {
        return axios.get(`/users/${id}`);
    }

    create(user) {
        return axios.post("/users", user);
    }

    update(id, user) {
        return axios.put(`/users/${id}`, user);
    }

    delete(id) {
        return axios.delete(`/users/${id}`);
    }

    deleteAll() {
        return axios.delete(`/users`);
    }

    exists(user) {
        return axios.post("/users/exists", user);
    }

}

export default new UserService();