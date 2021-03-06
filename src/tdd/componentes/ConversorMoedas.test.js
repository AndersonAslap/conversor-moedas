import React from 'react';
import ReactDOM from 'react-dom';
import { ListarMoedas }  from '../../components/ListarMoedas';

describe('Teste do componente de listagens de moedas', () => {

    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListarMoedas />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});