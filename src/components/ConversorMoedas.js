import { ListarMoedas } from './ListarMoedas.js';

import { Button, Container , Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import styles from '../styles/components/ConversorMoedas.module.css';
import { useState } from 'react';

export function ConversorMoedas() {

    const FIXER_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

    const [isSpinner, setIsSpinner] = useState(false);
    const [isConvertido, setIsConvertido] = useState(false);
    const [isFormValidated, setIsFormValidated] = useState(false);
    const [isError, setIsError] = useState(false);

    const [value, setValue] = useState(1);

    const [coinFrom, setCoinFrom] = useState("BRL");
    const [coinTo, setCoinTo] = useState("USD");

    const [result, setResult] = useState('');

    console.log()

    function handleValue(event) {
        setValue(event.target.value.replace(/\D/g, ''));
    }

    function handleCoinFrom(event){
        setCoinFrom(event.target.value);
    }

    function handleCoinTo(event){
        setCoinTo(event.target.value);
    }

    function handleCotacao(data) {
        if (!data || data.success !== true) {
            return false;
        }

        const cotacaoFrom = data.rates[coinFrom];
        const cotacaoTo = data.rates[coinTo];

        const cotacao = (1 / cotacaoFrom * cotacaoTo) * value;
        return cotacao.toFixed(2);
    }

    function handleError() {
        setResult("Ocorreu um erro no sistema !");
        setIsConvertido(true);
        setIsError(true);
        setTimeout(() => setIsSpinner(false), 500);
    }

    function handleConverter(event){
        event.preventDefault();
        
        setIsSpinner(true);

        axios.get(FIXER_URL)
            .then(response => {
                const cotacao = handleCotacao(response.data);
                if (cotacao) {
                    setResult(`${value} ${coinFrom} = ${cotacao} ${coinTo}`);
                    setIsConvertido(true);
                    setIsError(false);
                    setTimeout(() => setIsSpinner(false), 500);
                } else {
                    handleError();
                }
                
            })
            .catch(error => handleError());
    }

    return (
        <Container className={styles.conversorMoedasContainer}>
             
            <header>
                <h2>Conversor de Moedas</h2>
            </header>

            <main>  
                <form onSubmit={handleConverter}>
                    <div>
                        <input 
                            type="text"
                            placeholder="0"
                            required
                            className={styles.conversorMoedasInput}
                            value={value}
                            onChange={handleValue}
                        />

                        <select
                            className={styles.conversorMoedasInput} 
                            value={coinFrom}
                            onChange={handleCoinFrom}
                        >
                            <ListarMoedas />
                        </select>

                        <select
                            className={styles.conversorMoedasInput} 
                            value={coinTo}
                            onChange={handleCoinTo}
                        >
                            <ListarMoedas />
                        </select>

                        <Button 
                            type="submit"
                            variant="success" 
                            className={styles.conversorMoedasInput}
                            data-testid="btn-converter"
                        >
                            Converter &nbsp; <FontAwesomeIcon icon={faArrowCircleRight} />
                        </Button>

                    </div>
                </form>
                <div>
                    { 
                        isSpinner ? (
                            <Spinner animation="border" variant="success" style={{borderRadius:'100%', width:'50px', height:'50px'}}/>
                        ) : (
                            <div>
                                { 
                                    isConvertido ? (
                                        <div className={!isError ? "bg-success text-white text-center" : "bg-danger text-white text-center"} style={{fontWeight:'bold'}} data-testid="resultado">
                                            {result}
                                        </div>
                                    ) : (
                                        <div className="bg-info text-white text-center" style={{fontWeight:'bold'}}>
                                            Saiba como está a cotação  atual <br /> da sua moeda
                                        </div>
                                ) }
                            </div>
                        )  }
                </div>
            </main>
        </Container>
    );
}