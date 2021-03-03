import { Container , Form } from 'react-bootstrap';

import styles from '../styles/components/ConversorMoedas.module.css';

export function ConversorMoedas() {
    return (
        <Container className={styles.conversorMoedasContainer}>
            <header>
                <h2>Conversor de Moedas</h2>
            </header>

            <main>
                <div>
                    <Form.Control type="text"/>
                </div>
                
                <div>
                    2
                </div>
            </main>
        </Container>
    );
}