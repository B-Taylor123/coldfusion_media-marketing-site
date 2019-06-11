import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

// import { post } from '../../../../../services/http-service';

import FormInputRow from './form_input_row';
import FormInput from './form_input';

const ContactForm: FunctionComponent = () => {
    const [ value1, setValue1 ] = useState<string>('');

    return (
        <Form>
            <FormInputRow>
                <FormInput type="text" value={ value1 } onChange={ e => setValue1(e.currentTarget.value) }/>
            </FormInputRow>
            <button onClick={ e => submitClicked(e, value1) }> Submit </button>
        </Form>
    );
};

// post('http://localhost:5000/email/contact', { prop1: e.currentTarget.value });

const submitClicked = (e: React.MouseEvent<HTMLButtonElement>, value1: string) => {
    e.preventDefault();
    console.log('submitClicked value1 =', value1);
};

const Form = styled.form`
    width: 33%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export default ContactForm;