import * as React from 'react';
import { styled } from '@material-ui/core/';
import {Button} from "@material-ui/core";
import {green, indigo, red, grey, yellow, amber, blue, pink} from "@material-ui/core/colors";


const OptionSell = styled(Button)(({ theme }) => ({
    color: indigo[900],
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
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

  const Sell = styled(Button)(({ theme }) => ({
    color: blue[900],
    backgroundColor: green[300],
    '&:hover': {
      backgroundColor: green[500],
    },
    borderStyle:'solid',
    borderWidth:'4px',
    borderColor: blue[900],
  }));

 const OptionSellButton =({text, onClick})=> {
    return (
        <OptionSell variant="contained" onClick={onClick}>{text}</OptionSell>
    );
  }

  const CancelButton =({onClick})=> {
    return (
        <Cancel variant="contained" onClick={onClick}>Cancelar</Cancel>
    );
  }

  const SellButton =({onClick})=> {
    return (
        <Sell variant="contained" onClick={onClick}>Confirmar Venta</Sell>
    );
  }

  export {OptionSellButton, CancelButton, SellButton}