import * as React from 'react';
import { Dispatch, SetStateAction, FormEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { post } from '../../../../../services/http-service';

import FormRow from './form_row';
import FormInput from './form_input';
import Button from '../../../../ui/button';
import FormTextArea from './form_textarea';

interface IContactFormField<T> {
    value: T;
    valid?: boolean;
}

interface IContactForm {
    firstName: IContactFormField<string>;
    lastName: IContactFormField<string>;
    email: IContactFormField<string>;
    role: IContactFormField<string>;
    companyName: IContactFormField<string>;
    companyWebsite: IContactFormField<string>;
    message: IContactFormField<string>;
}

const ContactForm: FunctionComponent = () => {
    const [ contactForm, setContactFormState ] = useState<IContactForm>({
        firstName: { value: '' },
        lastName: { value: '' },
        email: { value: '' },
        role: { value: '' },
        companyName: { value: '' },
        companyWebsite: { value: '' },
        message: { value: '' }
    });

    return (
        <Form onSubmit={ e => submit(e, contactForm) }>
            <FormRow>
                <h2> Get in touch </h2>
            </FormRow>

            <FormRow doubleItemRow>
                <FormInput type="text" placeholder="First name*" value={ contactForm.firstName.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'firstName', contactForm, setContactFormState) }/>
                <FormInput type="text" placeholder="Last name*" value={ contactForm.lastName.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'lastName', contactForm, setContactFormState) }/>
            </FormRow>

            <FormRow>
                <FormInput type="email" placeholder="Email*" value={ contactForm.email.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'email', contactForm, setContactFormState) }/>
            </FormRow>

            <FormRow doubleItemRow>
                <FormInput type="text" placeholder="Company name" value={ contactForm.companyName.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'companyName', contactForm, setContactFormState) }/>
                <FormInput type="text" placeholder="Role" value={ contactForm.role.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'role', contactForm, setContactFormState) }/>
            </FormRow>

            <FormRow>
                <FormInput type="text" placeholder="Company website" value={ contactForm.companyWebsite.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'companyWebsite', contactForm, setContactFormState) }/>
            </FormRow>

            <FormRow>
                <FormTextArea rows={ 5 } maxLength={ 4000 } placeholder="Message*" value={ contactForm.message.value } onChange={ e => updateContactFormState(e.currentTarget.value, 'message', contactForm, setContactFormState) }/>
            </FormRow>

            <FormRow>
                <Button type="submit"> Submit </Button>
            </FormRow>
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