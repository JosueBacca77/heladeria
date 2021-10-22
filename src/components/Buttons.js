import * as React from 'react';
import { styled } from '@material-ui/core/';
import {Button} from "@material-ui/core";
import {green, indigo, red, grey} from "@material-ui/core/colors";


const Sell = styled(Button)(({ theme }) => ({
    color: indigo[900],
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    borderColor: indigo[900],
    borderStyle:'solid',
    borderWidth:'4px'
  }));

  const Cancel = styled(Button)(({ theme }) => ({
    color: grey[900],
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
    borderColor: grey[900],
    borderStyle:'solid',
    borderWidth:'4px'
  }));

 const SellButton =({text, onClick})=> {
    return (
        <Sell variant="contained" onClick={onClick}>{text}</Sell>
    );
  }

  const CancelButton =({onClick})=> {
    return (
        <Cancel variant="contained" onClick={onClick}>Cancelar</Cancel>
    );
  }

  export {SellButton, CancelButton}