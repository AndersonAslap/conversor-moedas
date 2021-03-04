import { Button, Container , Spinner } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/components/ConversorMoedas.module.css';

export function ConversorMoedas() {
    return (
        <Container className={styles.conversorMoedasContainer}>
             
            <header>
                <h2>Conversor de Moedas</h2>
            </header>

            <main>
                <div>
                    <input 
                        type="text"
                        placeholder="0"
                        required
                        className={styles.conversorMoedasInput}
                    />

                    <select
                        as="select" 
                        className={styles.conversorMoedasInput} 
                    />

                    <select
                        as="select" 
                        className={styles.conversorMoedasInput} 
                    />

                    <Button 
                        variant="success" 
                        className={styles.conversorMoedasInput}
                    >
                        Converter &nbsp; <FontAwesomeIcon icon={faArrowCircleRight} />
                    </Button>

                </div>
                
                <div>
                    { 
                        true ? (
                            <div>
                                { 
                                    true ? (
                                        <div>
                                            Coverter
                                        </div>
                                    ) : (
                                        <div>
                                            Convertido
                                        </div>
                                ) }
                            </div>
                        ) : (
                            <Spinner animation="border" variant="success" style={{borderRadius:'100%', width:'50px', height:'50px'}}/>
                        )  }
                </div>
            </main>
        </Container>
    );
}