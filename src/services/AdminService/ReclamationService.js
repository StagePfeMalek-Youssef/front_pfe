import axios from 'axios'

const RECLAMATION_BASE_REST_API_URL = 'http://localhost:8080/api/v1/reclamations';

class ReclamationService{

    getAllReclamation(){
        return axios.get(RECLAMATION_BASE_REST_API_URL)
    }

    createReclamation(username,reclamation){
        return axios.post(RECLAMATION_BASE_REST_API_URL +"/"+ username, reclamation)
    }

    getReclamationById(id_R){
        return axios.get(RECLAMATION_BASE_REST_API_URL + "/" +id_R);
    }

    updateReclamation(reclamationId, reclamation){
        return axios.put(RECLAMATION_BASE_REST_API_URL + "/" +reclamationId, reclamation);
    }

    deleteReclamation(reclamationId){
        return axios.delete(RECLAMATION_BASE_REST_API_URL + "/" + reclamationId);
    }
}

export default new ReclamationService();