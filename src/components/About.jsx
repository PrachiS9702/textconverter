import React from 'react'

function About(props) {



    return (
        <div className='container '>
            <div className='About-header' 
            style={{
               padding: '10px',
               margin: '40px',
                border: props.mode === 'dark' ? '2px solid #ffffff' : '2px solid #000000',
                borderRadius: props.mode ===  'dark' ? '10px' : '10px',
                boxShadow: props.mode === 'dark' ? '0 0 20px #f87e7e' : '0 0 10px #000000',
            }}>
                <h1 style={
                    {
                        fontWeight: 'bold',
                        backgroundColor: props.mode === 'dark' ? '#000000' : '#ffffff',
                        color: props.mode === 'dark' ? '#1741cd' : '#0b8244'
                    }
                }>About Text Converter</h1>


                <p>A Text Converter is a tool or web application that transforms text from one format to another automatically.
                    It is commonly used to change text case, format, or structure quickly without manual editing. </p>
            </div>

            <div className='about-features'
            
            
            
            
            style={{
                padding: '10px',
                margin: '40px',
                border: props.mode === 'dark' ? '2px solid #ffffff' : '2px solid #000000',
                borderRadius: props.mode ===  'dark' ? '10px' : '10px',
                boxShadow: props.mode === 'dark' ? '0 0 20px #f87e7e' : '0 0 20px #000000',
            }}>
                <h3
                
                style={
                    {
                        fontWeight: 'bold',
                        backgroundColor: props.mode === 'dark' ? '#000000' : '#ffffff',
                        color: props.mode === 'dark' ? '#026953' : '#c17d07'
                    }}
                    
                    >Common Features of a Text Converter</h3>
            


           
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
            </div>

            <div className='about-use-cases' 
            style={{
                padding: '10px',
                margin: '40px',
                border: props.mode === 'dark' ? '2px solid #ffffff' : '2px solid #000000',
                borderRadius: props.mode ===  'dark' ? '10px' : '10px',
                boxShadow: props.mode === 'dark' ? '0 0 20px #f87e7e' : '0 0 20px #000000',
            }}>
                <h3
                
                style={
                    {
                        fontWeight: 'bold',
                        backgroundColor: props.mode === 'dark' ? '#000000' : '#ffffff',
                        color: props.mode === 'dark' ? '#712c04' : '#631503'
                    }}
                    >Use Cases</h3>
            

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
        </div>
    )
}

export default About