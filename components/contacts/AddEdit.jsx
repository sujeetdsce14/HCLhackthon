import { useRouter } from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { alertService, conatctService } from 'services';

export { AddEdit };

function AddEdit(props) {
    const  contact = props?.contact;
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('name  is required'),
        email: Yup.string()
            .required('email required'),
        phone: Yup.string()
            .required('phone is required'),
        query: Yup.string()
            .required('query is required'),
        
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (contact) {
        formOptions.defaultValues = props.conatct;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    // const designationRef= useRef()
   
    // function designation(event){
    //   setData1({designation:event.target.value})
    // }

    async function onSubmit(data) {
        console.log(data)
        alertService.clear();
        try {
            // create or update user based on user prop
            let message;
            if (contact) {
                
            } else {
                await conatctService.register(data);
                message = 'Query submitted sucessfully';
            }

            // redirect to user list with success message
            router.push('/contact');
            alertService.success(message, true);
        } catch (error) {
            alertService.error(error);
            console.error(error);
        }
    }

    return (
        <div className="contact-us">
        <form onSubmit={handleSubmit(onSubmit)} >
            <h1>Contact Us</h1>
            <div className="row">
                <div className="mb-7 col">
                    <label className="form-label">Name</label>
                    <input name="name" type="text" {...register('name')} className={`form-control ${errors.name? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                </div>
                </div>
                <div className="row">
                <div className="mb-7 col">
                    <label className="form-label">Email</label>
                    <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
            </div>
            <div className="row">
                <div className="mb-7 col">
                    <label className="form-label">Phone</label>
                    <input name="phone" type="tel" {...register('phone')} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.phone?.message}</div>
                </div>
                
                </div>
                <div className="row">
                    
                <div className="mb-7 col">
                    <label className="form-label">Query</label>
                    <textarea  name="query" type="text" {...register('query')} className={`form-control ${errors.query ? 'is-invalid' : ''}`} > </textarea>
                    <div className="invalid-feedback">{errors.query?.message}</div>
                </div>
                   
              
                   
            
            </div>
           
            <div className="mb-3">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary me-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                    Save
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
                <Link href="/" className="btn btn-link">Cancel</Link>
            </div>
        </form>
        </div>
    );
}