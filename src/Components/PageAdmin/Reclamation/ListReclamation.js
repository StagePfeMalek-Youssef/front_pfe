import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListReclamation.css';
import ReclamationService from '../../../services/AdminService/ReclamationService';

const ListReclamation = () => {

    const [reclamations, setReclamation] = useState([])

    useEffect(() => {

        getAllReclamations();
    }, [])

    const getAllReclamations = () => {
        ReclamationService.getAllReclamation().then((response) => {
            setReclamation(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    
    const deleteReclamation = (reclamationId) =>{
        ReclamationService.deleteReclamation(reclamationId).then( res => {
            this.setState({reclamations: this.state.reclamations.filter(reclamation => reclamation.reclamationId!== reclamationId)});
        });
    }



    return (
        <div className='main__container'>
            <h2 className = "main__title"> Tous Les Reclamation </h2>
            <Link to = "/add-reclamation" className = "btn btn-primary mb-2" > Ajouter Reclamation </Link>
            <table>
            <thead>
                    <th className='th1'> Reclamation Id </th>
                    <th className='th1'> Numéro De Reclamation</th>
                    <th className='th1'> Message </th>
                    <th className='th1'> Objet </th>
                    <th className='th1'> Actions </th>
                </thead>
                <tbody>
                    {
                        reclamations.map(
                            reclamation =>
                            <tr key = {reclamation.id_R}> 
                                <td> {reclamation.id_R} </td>
                                <td> {reclamation.numDec} </td>
                                <td> {reclamation.message} </td>
                                <td>{reclamation.objet}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-reclamation/${reclamation.id_R}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteReclamation(reclamation.id_R)}
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

export default ListReclamation;