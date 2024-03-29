import axios from 'axios';

class ApiService {

    findAll(path) {
        return axios.get(path);
    }

    findById(path, id) {
        return axios.get(`${path}/${id}`);
    }

    create(path, data) {
        return axios.post(path, data);
    }

    update(path, id, data) {
        return axios.put(`${path}/${id}`, data);
    }

    delete(path, id) {
        return axios.delete(`${path}/${id}`);
    }

    deleteAll(path) {
        return axios.delete(path);
    }

    exists(path, data) {
        return axios.post(`${path}/exists`, data);
    }

    find(path, data) {
        return axios.post(`${path}/find`, data);
    }

    post(path, data){
        return axios.post(path, data);
    }

    get(path) {
        return axios.get(path);
    }

    deleteBatchMapping(path, data){
        return axios.delete(path, data);
    }

    updateBatch(path, data){
        return axios.post(path, data);
    }

}

export default new ApiService();