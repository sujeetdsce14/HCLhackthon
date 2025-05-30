// components/CKEditorComponent.js
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';


//import { Context } from '@ckeditor/ckeditor5-core';
// import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
// import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { Paragraph } from '@ckeditor/ckeditor5-paragraph';


// Import required plugins
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
// import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import Link from '@ckeditor/ckeditor5-link/src/link';
// import List from '@ckeditor/ckeditor5-list/src/list';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

const CKEditorComponent = ({ value, onChange }) => {
  const [editorLoaded, setEditorLoaded] = useState(false);

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
  useEffect(() => {
    // Use this to simulate dynamic import loading if necessary
    setEditorLoaded(true);
  
  }, []);



 


  return (
    <div >
 
    


      {editorLoaded ? (
        <CKEditor
         
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
           
            toolbar: {
                items: [
                  'heading', '|',
                  'bold', 'italic', 'underline', 'strikethrough', '|',
                  'link', 'blockQuote', 'insertTable', 'imageUpload', '|',
                  'bulletedList', 'numberedList', '|',
                  'alignment', '|',
                  'undo', 'redo'
                ],
                shouldNotGroupWhenFull: true // Avoid toolbar grouping on smaller screens
              },
              image: {
                toolbar: [
                  'imageStyle:full',
                  'imageStyle:side',
                  '|',
                  'imageTextAlternative'
                ],
                styles: [
                  'full',
                  'side'
                ],
                upload: {
                  types: ['png', 'jpg', 'jpeg', 'gif']
                }
              },
              table: {
                contentToolbar: [
                  'tableColumn',
                  'tableRow',
                  'mergeTableCells'
                ]
              },
              heading: {
                options: [
                  { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                  { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                  { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                  { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                  // Add more heading options as needed
                ]
              },
              link: {
                decorators: {
                  openInNewTab: {
                    mode: 'manual',
                    label: 'Open in a new tab',
                    attributes: {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  }
                }
              },
              placeholder: 'Start typing your content here...', // Placeholder text for the editor
              removePlugins: ['Title'], // Remove unnecessary plugins
              language: 'en', // Set the default language
            
            }}
         
        />
      ) : (
        <p>Loading editor...</p>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(CKEditorComponent), { ssr: false });
