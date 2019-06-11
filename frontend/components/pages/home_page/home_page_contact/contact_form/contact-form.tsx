import * as React from 'react';
import { Dispatch, SetStateAction, FormEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { post } from '../../../../../services/http-service';

import FormInputRow from './form_input_row';
import FormInput from './form_input';
import Button from '../../../../ui/button';

interface IContactFormField<T> {
    value: T;
    valid?: boolean;
}

interface IContactForm {
    firstName: IContactFormField<string>;
    lastName: IContactFormField<string>;
    email: IContactFormField<string>;
}

const ContactForm: FunctionComponent = () => {
    const [ contactForm, setContactFormState ] = useState<IContactForm>({
        firstName: { value: '' },
        lastName: { value: '' },
        email: { value: '' }
    });

    return (
        <Form onSubmit={ e => submit(e, contactForm) }>
            <FormInputRow doubleInputRow>
                <FormInput type="text" placeholder="First name..." value={ contactForm.firstName.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'firstName', contactForm, setContactFormState) }/>
                <FormInput type="text" placeholder="Last name..." value={ contactForm.lastName.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'lastName', contactForm, setContactFormState) }/>
            </FormInputRow>

            <FormInputRow>
                <FormInput type="text" placeholder="Email..." value={ contactForm.email.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'email', contactForm, setContactFormState) }/>
            </FormInputRow>

            <FormInputRow>
                <Button type="submit"> Submit </Button>
            </FormInputRow>
        </Form>
    );
};

const updateContactFormState = (value: string | number, key: string, contactForm: IContactForm, setContactFormState: Dispatch<SetStateAction<IContactForm>>) => {
    const contactFormCopy: IContactForm = { ...contactForm };

    contactFormCopy[key].value = value;

    setContactFormState(contactFormCopy);
};

const submit = (e: FormEvent<HTMLFormElement>, contactForm: IContactForm) => {
    e.preventDefault();

    const request = {};

    for (const key in contactForm) {
        request[key] = contactForm[key].value;
    }

    console.log('submit request =', request);
    
    post('http://localhost:5000/email/contact', request);
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