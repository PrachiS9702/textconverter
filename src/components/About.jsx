import React from 'react'

function About() {
    return (
        <div className='container my-3'>
            <h1>About</h1>

            <p>A Text Converter is a tool or web application that transforms text from one format to another automatically. 
                It is commonly used to change text case, format, or structure quickly without manual editing. </p>

            <h3>Common Features of a Text Converter</h3>

            <p>A typical text converter includes:
                <ul>
                    <li>Uppercase converter (hello → HELLO)</li>
                    <li>Lowercase converter (HELLO → hello)</li>
                    <li>Capitalize text (hello world → Hello World)</li>
                    <li>Remove extra spaces</li>
                    <li>Copy converted text</li>
                    <li>Clear text</li>
                    <li>Character / word counter</li>
                </ul>
            </p>

           <h3>Use Cases</h3>

           <p>Text converters are useful for:</p>
           <ul>
               <li>Formatting content</li>
               <li>Writing titles or headings</li>
               <li>Cleaning copied text</li>
               <li>Preparing text for databases</li>
               <li>Coding and documentation formatting</li>
               <li>Coding and documentation formatting</li>
           </ul>
        </div>
    )
}

export default About