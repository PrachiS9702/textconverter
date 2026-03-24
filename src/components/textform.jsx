import { React, useState } from 'react';
import PropTypes from 'prop-types';
// import '../App.css';



function TextForm(props) {



    const handleUppercase = () => {
     
        setText(text.toUpperCase());
        console.log("Uppercase clicked", text);
        props.showAlert("Uppercase clicked", "success");
    }

    const handleLowercase = () => {

        setText(text.toLowerCase());
        console.log("Lowercase clicked", text);
        props.showAlert("Lowercase clicked", "success");
    }

    const handleFirstLetterCapital = () => {
    
        setText(text.charAt(0).toUpperCase() + text.slice(1));
        console.log("First letter capital clicked", text);
        props.showAlert("First letter capital clicked", "success");
    }

    const handleRemoveExtraSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim());
       
        props.showAlert("Remove extra space clicked", "success");
    }

    const handleClearText = () => {
       setText("");
       props.showAlert("Text cleared", "success");
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{padding: '30px'}}>
                <div className="row">
                    <div className="col">
                        <h1>{props.title}</h1>


                        <textarea className='textarea' placeholder="Enter text here" value={text} 
                        style={{
                            width: '50vw',
                            border: props.mode === 'dark' ? '4px solid #ffffff' : '4px solid #000000', 
                            backgroundColor: props.mode === 'dark' ? '#7d7b7b' : '#ffffff',
                            color: props.mode === 'dark' ? '#ffffff' : '#000000',
                           
                        }}
                            onChange={(e) => setText(e.target.value)} rows="10" cols="100" >

                        </textarea>


                    </div>

                    <div className="text-center" style={{gap: '10px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <button className="button" disabled={text.length === 0}
                            style={{color: props.mode === 'dark' ? '#ffffff' : '#000000', backgroundColor: props.mode === 'dark' ? '#072f6c7c' : '#3996f2'}}
                            onClick={handleUppercase}>Convert To Uppercase</button>

                        <div className="text-center" style={{ spacing: '10px' }}>
                            <button className="button" disabled={text.length === 0} 
                            style={{
                                color: props.mode === 'dark' ? '#ffffff' : '#000000', 
                                backgroundColor: props.mode === 'dark' ? '#072f6c7c' : '#3996f2'}} 
                            onClick={handleLowercase}>Convert To Lowercase</button>
                        </div>

                        <div className="text-center" style={{ spacing: '10px' }}>
                            <button className="button" disabled={text.length === 0} 
                            style={{
                                color: props.mode === 'dark' ? '#ffffff' : '#000000', 
                                backgroundColor: props.mode === 'dark' ? '#072f6c7c' : '#3996f2'}} 
                            onClick={handleFirstLetterCapital}>Convert To First Letter Capital</button>
                        </div>

                       
                        <div className="text-center" style={{ spacing: '10px' }}>
                            <button className="button" disabled={text.length === 0} style={{color: props.mode === 'dark' ? '#ffffff' : '#000000', backgroundColor: props.mode === 'dark' ? '#072f6c7c' : '#3996f2'}} onClick={handleClearText}>Clear Text</button>
                        </div>

                        <div className="text-center" style={{ spacing: '10px' }}>
                            <button className="button" disabled={text.length === 0} style={{color: props.mode === 'dark' ? '#ffffff' : '#000000', backgroundColor: props.mode === 'dark' ? '#072f6c7c' : '#3996f2'}} onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
                        </div>
                    </div>



                </div>




                <div className="container my-2">



                    <h1>Text Summary </h1>
                    <p><strong>Words:</strong> {text.split(" ").filter((word) => {return word.length !== 0}).length}</p>
                    <p><strong>Characters:</strong> {text.length}</p>
                    <p><strong>Minutes to read:</strong> {text.length * 0.008}</p>

                    <div>

                        <h2 className="my-2">Preview</h2>
                        <p style={{
                            border: props.mode === 'dark' ? '4px solid #ffffff' : '4px solid #000000', 
                            padding: '10px',
                            backgroundColor: props.mode === 'dark' ? '#7d7b7b' : '#ffffff',
                            color: props.mode === 'dark' ? '#ffffff' : '#000000'
                        }}>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
                      
                    </div>
                </div>
            </div>

        </>
    );
}

export default TextForm;