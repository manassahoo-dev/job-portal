import axios from 'axios';

class UserService {
    findAll() {
        return axios.get('/users');
    }

    get(id) {
        return axios.get(`/users/${id}`);
    }

    create(data) {
        return axios.post("/users", data);
    }

    update(id, data) {
        return axios.put(`/users/${id}`, data);
    }

    delete(id) {
        return axios.delete(`/users/${id}`);
    }

    deleteAll() {
        return axios.delete(`/users`);
    }

    findByTitle(title) {
        return axios.get(`/users?title=${title}`);
    }
}

export default new UserService();