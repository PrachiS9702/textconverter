import { React, useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';


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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{props.title}</h1>


                        <textarea className='textarea' placeholder="Enter text here" value={text} style={{border: '4px solid #000000', backgroundColor: props.mode === 'dark' ? '#333333' : '#ffffff'}}
                            onChange={(e) => setText(e.target.value)} rows="10" cols="100" >

                        </textarea>


                    </div>

                    <div className="text-center" >
                        <button className="button" disabled={text.length === 0}
                            style={{color: props.mode === 'dark' ? '#ffffff' : '#000000', backgroundColor: props.mode === 'dark' ? '#333333' : '#ffffff'}}
                            onClick={handleUppercase}>Convert To Uppercase</button>

                        <div className="text-center" style={{ spacing: '10px' }}>
                            <button className="button" disabled={text.length === 0} 
                            style={{
                                color: props.mode === 'dark' ? '#ffffff' : '#000000', 
                                backgroundColor: props.mode === 'dark' ? '#333333' : '#ffffff'}} 
                            onClick={handleLowercase}>Convert To Lowercase</button>
                        </div>

                        <div className="text-center" style={{ spacing: '10px' }}>
                            <button className="button" disabled={text.length === 0} 
                            style={{
                                color: props.mode === 'dark' ? '#ffffff' : '#000000', 
                                backgroundColor: props.mode === 'dark' ? '#044779' : '#04740d'}} 
                            onClick={handleFirstLetterCapital}>Convert To First Letter Capital</button>
                        </div>

                       
                        <div className="text-center" style={{ spacing: '10px' }}>
                            <button className="button" disabled={text.length === 0} style={{color: props.mode === 'dark' ? '#ffffff' : '#000000', backgroundColor: props.mode === 'dark' ? '#333333' : '#ffffff'}} onClick={handleClearText}>Clear Text</button>
                        </div>

                        <div className="text-center" style={{ spacing: '10px' }}>
                            <button className="button" disabled={text.length === 0} style={{color: props.mode === 'dark' ? '#ffffff' : '#000000', backgroundColor: props.mode === 'dark' ? '#333333' : '#ffffff'}} onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
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
                        <p style={{border: '4px solid #000000', padding: '10px' }}>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
                      
                    </div>
                </div>
            </div>

        </>
    );
}

export default TextForm;