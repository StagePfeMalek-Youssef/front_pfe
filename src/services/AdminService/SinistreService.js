import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
const SINISTRE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/sinistres';

class SinistreService{

    getAllSinistres(){
        return axios.get(SINISTRE_BASE_REST_API_URL)
    }

    createSinistre(TypeContrat,sinistre){
        return axios.post(SINISTRE_BASE_REST_API_URL+"/"+TypeContrat, sinistre)
    }

    getSinistreById(sinistreId){
        return axios.get(SINISTRE_BASE_REST_API_URL + '/' + sinistreId);
    }

    updateSinistre(sinistreId, sinistre){
        return axios.put(SINISTRE_BASE_REST_API_URL + '/' + sinistreId, sinistre);
    }

    deleteSinistre(sinistreId){
        return axios.delete(SINISTRE_BASE_REST_API_URL + '/' + sinistreId);
    }
}

export default new SinistreService();