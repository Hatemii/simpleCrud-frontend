import axios from 'axios';

const Master_Rest_Api = "http://localhost:8080/masterFields";

class MasterService {

    getAllStudyFields() {
        return axios.get(Master_Rest_Api);
    }

    getStudyFieldById(id) {
        return axios.get(Master_Rest_Api + "/" + id);
    }

    deletetStudyFieldById(id) {
        return axios.delete(Master_Rest_Api + `/delete/${id}`);
    }

    insertStudyField(master) {
        return axios.post(Master_Rest_Api + "/insert", master);
    }

    updateStudyField(id, master) {
        return axios.put(Master_Rest_Api + `/update/${id}`, master);
    }
}

export default new MasterService();