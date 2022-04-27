import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './listContrat.css';
import './UploadFilesContrat';
import ContratService from '../../../services/AdminService/ContratService';
import UploadFilesContrat from './UploadFilesContrat';
import axios from 'axios';
const ListContrat = () => {

    const [contrats, setContrats] = useState([])

    useEffect(() => {

        getAllContrats();
    }, [])

    const getAllContrats = () => {
        ContratService.getAllContrats().then((response) => {
            setContrats(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    
    const deleteContrat = (contratId) =>{
        ContratService.deleteContrat(contratId).then( res => {
            this.setState({contrats: this.state.contrats.filter(contrat => contrat.contratId!== contratId)});
        });
    }

  

    return (
        <div className='main__container'>
            <h2 className = "main__title"> Tous Les Contrats </h2>
          <UploadFilesContrat/>
            <Link to = "/add-contrat" className = "btn btn-primary mb-2" > Ajouter Contrat </Link>
            <table>
            <thead>
                    <th className='th1'> Contrat Id </th>
                    <th className='th1'> Numéro De Police</th>
                    <th className='th1'> Date De L'effet </th>
                    <th className='th1'> Date Fin De L'effet </th>
                    <th className='th1'>Type De Contrat</th>
                    <th className='th1'>Etat</th>
                    <th className='th1'> Date L'ajout </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        contrats.map(
                            contrat =>
                            <tr key = {contrat.idC}> 
                                <td> {contrat.idC} </td>
                                <td> {contrat.numPolice} </td>
                                <td>{contrat.dateEffet}</td>
                                <td>{contrat.dateFinEffet}</td>
                                <td>{contrat.type}</td>
                                <td>{contrat.etat}</td>
                                <td>{contrat.creation}</td>

                                <td>
                                    <Link className="btn btn-info" to={`/edit-contrat/${contrat.idC}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteContrat(contrat.idC)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListContrat;