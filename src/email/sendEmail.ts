import emailjs from 'emailjs-com';
import { Email } from '.';
import { EmailHandlerResponse, messageValidation } from '@/shared';




export const sendEmail = async (formData: Email): Promise<EmailHandlerResponse> => {
    
    const {from_email, message} = formData;
    
    if(!messageValidation(message)){
        return {
            error: 'invalid message'
        }
    }

    const templateParams = {
        to_name: 'Santiago Triviño',
        from_email,
        message   
    }
    let data;
    try {
        data = await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
            )
        
    } catch (error) {
        return {
            error: 'something went wrong',
            data: error
        }
    }

    return {
        data
    }
    
}