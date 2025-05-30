import React, { useEffect,useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'; 
// Dynamically import CKEditor without server-side rendering
// const CKEditor = dynamic(
//     () => import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor),
//     { ssr: false }  // Disable server-side rendering
//   );
//   const ClassicEditor = dynamic(
//     () => import('@ckeditor/ckeditor5-build-classic'),
//     { ssr: false }  // Disable server-side rendering
//   );
  
//   const EditorComponent = ({ onChange }) => {
//     // State to manage the editor instance
//     const [editorLoaded, setEditorLoaded] = useState(false);
  
//     // useEffect to set editorLoaded to true after component mounts
//     useEffect(() => {
//       setEditorLoaded(true);
//     }, []);

//import dynamic from 'next/dynamic';
const CKEditorComponent = dynamic(() => import('../CKEditorComponent'), { ssr: false });

import { blogService, alertService } from 'services';

export { AddEdit };

function AddEdit(props) {
    const blog = props?.blog;
    const router = useRouter();
    
     const [editorContent, setEditorContent] = useState('<p>Initial content</p>');

    // ClassicEditor
    // .create(document.querySelector('#editor'), {
    //     toolbar: [ 'bold', 'italic', 'link', 'bulletedList', 'numberedList' ],
    //     height: 900 // Set the height here
    // })
    // .then(editor => {
    //     editor.ui.view.editable.element.style.height = '900px'; // Adjust the height
    // })
    // .catch(error => {
    //     console.error(error);
    // });

    // form validation rules 
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('title  is required'),
        metaKey: Yup.string()
            .required('meta key is required'),
        shortDescription: Yup.string()
            .required('short description is required'),
        longDescription: Yup.string()
            .required('long description is required'),
        published: Yup.string()
            .required('status is required'),
        category: Yup.string()
            .required('category is required'),
        featured: Yup.string()
            .required('featured is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (blog) {
        formOptions.defaultValues = props.blog;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    // const designationRef= useRef()
   
    // function designation(event){
    //   setData1({designation:event.target.value})
    // }

    async function onSubmit(data) {
        alertService.clear();
        try {
            // create or update user based on user prop
            let message;
            if (blog) {
                console.log("hi"+JSON.stringify(blog));
                let blognew=JSON.stringify(blog)
                
                console.log(blog.id);
                await blogService.update(blog.id, data);
                message = 'blog updated';
            } else {
                await blogService.register(data);
                message = 'blog added';
            }

            // redirect to user list with success message
            router.push('/blogs');
            alertService.success(message, true);
        } catch (error) {
            alertService.error(error);
            console.error(error);
        }
    }

    return (
        <form className="fullwidth" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Title</label>
                    <input name="title" type="text" {...register('title')} className={`form-control ${errors.title? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.title?.message}</div>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Meta Key</label>
                    <input name="metaKey" type="text" {...register('metaKey')} className={`form-control ${errors.metaKey ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.metaKey?.message}</div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Short Description</label>
                   
                    <textarea  name="shortDescription" type="text" {...register('shortDescription')} className={`form-control ${errors.shortDescription ? 'is-invalid' : ''}`} > </textarea>
                    <div className="invalid-feedback">{errors.shortDescription?.message}</div>
                </div>
                <div className="mb-3 col">
                                    
                    <label className="zero">Category</label>
                    <select name="category"  {...register('category')} aria-label="Default select example"  className={`form-control ${errors.category ? 'is-invalid' : ''}`}s   >
                    <option>Select Category</option>
                    <option selected={register('category')==="javascript"} value="javascript" > JavaScript</option>
                    <option  selected={register('category') ==="nodejs"} value="nodejs" > NodeJs</option>
                    <option selected={register('category')==="reactjs"} value="reactjs" > ReactJs</option>
                    <option  selected={register('category') ==="nextjs"} value="nextjs" > NextJs</option>
                    <option selected={register('category')==="nestjs"} value="nestjs" > NestJs</option>
                    <option  selected={register('category') ==="typescript"} value="typescript" > TypeScript</option>
                    <option  selected={register('category') ==="jest"} value="jest" > Jest</option>
                    <option selected={register('category')==="data-structure-algorithms"} value="data-structure-algorithms" > Data Structure & Algorithms</option>
                    <option  selected={register('category') ==="system-design"} value="system-design" >System Design</option>
                    <option  selected={register('category') ==="software-engineering"} value="software-engineering" >Software Engineering</option>
                    </select>
                    <div className="invalid-feedback">{errors.category?.message}</div>
                   
                </div>
            </div>
            <div className="row">
            <div className="mb-3 col">
                    
                    
                    <label className="zero">featured</label>
                    <select name="featured"  {...register('featured')} aria-label="Default select example"  className={`form-control ${errors.featured ? 'is-invalid' : ''}`}s   >
                    <option>Select featured</option>
                    <option selected={register('featured')==="true"} value="true" >true</option>
                    <option  selected={register('featured') ==="false"} value="false" > false</option>
                   
                    </select>
                    <div className="invalid-feedback">{errors.featured?.message}</div>
                   
                </div>
                <div className="mb-3 col">
                    
                    
                    <label className="zero">Status</label>
                    <select name="published"  {...register('published')} aria-label="Default select example"  className={`form-control ${errors.published ? 'is-invalid' : ''}`}s   >
                    <option>Select Status</option>
                    <option selected={register('published')==="published"} value="published" > published</option>
                    <option  selected={register('published') ==="Unpublished"} value="Unpublished" > Unpublished</option>
                   
                    </select>
                    <div className="invalid-feedback">{errors.published?.message}</div>
                   
                </div>
            </div>
            <div className="row">
             
                <div className="mb-9 col">
                 <CKEditorComponent value={editorContent} onChange={setEditorContent} /> 
                    <label className="form-label">Long Description</label>
                    <textarea id="editor" name="longDescription" type="text" {...register('longDescription')} className={`form-control ${errors.longDescription ? 'is-invalid' : ''}`} > </textarea>
                    <div className="invalid-feedback">{errors.longDescription?.message}</div>
                </div>
            </div>
            <div className="mb-3">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary me-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                    Save
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
                <Link href="/blogs" className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}