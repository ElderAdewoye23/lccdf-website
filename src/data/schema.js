
import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full Name is required')
        .min(4, 'Full Name must be at least 4 characters'),

        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

    subject: Yup.string()
        .required('Subject is required')
        .min(4, 'Subject must be at least 2 characters'),

    message: Yup.string()
        .required('Message is required')
        .min(4, 'Message must be at least 2 characters')


})