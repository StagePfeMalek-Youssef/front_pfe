import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SujetService from '../../../services/AdminService/SujetService';
import AppNavbar from '../../PageAccueil/AppNavbar';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { red } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.info.dark,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
   
  }));

 

const ListSujet = () => {
    const classes = useStyles();
    const [sujets, setSujets] = useState([])

    useEffect(() => {

        getAllSujets();
    }, [])

    const getAllSujets = () => {
        SujetService.getAllSujets().then((response) => {
            setSujets(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    
    const deleteSujet = (sujetId) =>{
        SujetService.deleteSujet(sujetId).then( res => {
            this.setState({sujets: this.state.sujets.filter(sujet => sujet.sujetId!== sujetId)});
        });
    }

    return (
        <>
        
            <AppNavbar/>
            <h2 className = "text-center" color="blue"> Les Sujets de forum </h2>
            <br></br>
            <br></br>
            <Link to = "/add-sujet" className = "btn btn-primary mb-2" > Ajouter Un Sujet </Link>
            <TableContainer component={Paper} className={classes.tableContainer}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell className={classes.tableHeaderCell}>Titre De Sujet </TableCell>
                <TableCell className={classes.tableHeaderCell}> Date Déclaration </TableCell>
                <TableCell className={classes.tableHeaderCell}> Discuté </TableCell>
                <TableCell className={classes.tableHeaderCell}> Actions </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {
                        sujets.map(
                            sujet =>
                            <tr key = {sujet.idSu}> 
                                <td> {sujet.titreSujet} </td>
                                <td> {sujet.dateDeclar}</td>
                                <td> <Link to={'/forum'}><ChatBubbleOutlineRoundedIcon color="action" fontSize="large"/></Link></td>
                                <td>
                                    <Link to={`/edit-sujet/${sujet.idSu}`} ><EditRoundedIcon color="primary"/></Link>
                                    <DeleteRoundedIcon style={{ color: red[500] }} onClick = {() => deleteSujet(sujet.idSu)}/>
                                </td>
                            </tr>
                        )
                    }
                </TableBody>
               
            </Table>
            </TableContainer>
        </>
    )
}

export default ListSujet;