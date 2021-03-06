import { ListarMoedas } from './ListarMoedas.js';

import { Button, Container , Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/components/ConversorMoedas.module.css';
import { useState } from 'react';

export function ConversorMoedas() {

    const [isSpinner, setIsSpinner] = useState(false);
    const [isConvertido, setIsConvertido] = useState(false);
    const [isFormValidated, setIsFormValidated] = useState(false);

    const [value, setValue] = useState(1);

    const [coinFrom, setCoinFrom] = useState("BRL");
    const [coinTo, setCoinTo] = useState("USD");

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

    function handleConverter(event){
        event.preventDefault();
    }

    return (
        <Container className={styles.conversorMoedasContainer}>
             
            <header>
                <h2>Conversor de Moedas</h2>
            </header>

            <main>  
                <form onSubmit={handleConverter} noValidate validated={isFormValidated}>
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
                                        <div>
                                            convertido
                                        </div>
                                    ) : (
                                        <div>
                                            converter
                                        </div>
                                ) }
                            </div>
                        )  }
                </div>
            </main>
        </Container>
    );
}