import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import ReclamationService from '../../../services/AdminService/ReclamationService';


import './ListReclamation.css';
const AddReclamation = () => {

    const [numDec, setNumDec] = useState('')
    const [message, setMessage] = useState('')
    const [objet, setObjet] = useState('')
    const history = useHistory();
    const { id } = useParams();


    const saveOrUpdateReclamation = (e) => {
        e.preventDefault();  
        
        const reclamation = { numDec, message, objet }
        const username=sessionStorage.getItem("UserName");
        if (id) {
            ReclamationService.updateReclamation(id, reclamation).then((response) => {
                console.log(response.data)
                history.push('/reclamations')
            }).catch(error => {
                console.log(error)
            })

        } else {
            ReclamationService.createReclamation(username,reclamation).then((response) => {
                console.log(response.data)
                history.push('/reclamations');

            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        ReclamationService.getReclamationById(id).then((response) => {
            setNumDec(response.data.numDec)
            setMessage(response.data.message)
            setObjet(response.data.objet)
          

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center" color='red'>Update Reclamation</h2>
        } else {
            return <h2 className="text-center" color='red'>Ajouter Reclamation</h2>
        }
    }

    return (
        
            <div className="wrapper">
                <div className="title">
                   
                        {
                            title()
                        }
                        <div className="form">
                        <div className="inputfield">
                            
                                
                                    <label> Numéro De Reclamation</label>
                                    <input
                                        type="number"
                                        name="numDec"
                                        className="input"
                                        value={numDec}
                                        onChange={(e) => setNumDec(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="inputfield">
                                    <label> Ecrire Message </label>
                                    <input
                                        type="text"
                                        name="message"
                                        className="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    >
                                    </input>
                                </div>

                                
                                <div className="inputfield">
                                    <label> Objet </label>
                                    <div className='custom-selec'>
                                    <select value={objet} onChange={(e) => setObjet(e.target.value)}>
                                        <option value="Agence">Agence</option>
                                        <option value="Service">Service</option>
                                        <option value="Panne Technique">Panne Technique</option>
                                    </select>
                                    </div>
</div>
                                    
                                

                                </div>
                                
                              <div className='inputfield'>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateReclamation(e)} >Envoyer </button>
                                <Link to="/reclamations" className="btn btn-secondary" style = {{marginLeft:"10px"}}> Annuler </Link>
                                </div>

                        </div>
               </div>

    )
}

export default AddReclamation