import React from 'react';


function Alert(props) {
  const capitalize = (word) => {
     const lower = word.toLowerCase(); 
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }





    return (
       <div className='container' style={{height: '10px', width: '100%', display: 'flex', alignItems: 'center'}}>
        {props.alert && 
        <div class={`alert alert-${props.alert?.type}`}>
            {capitalize(props.alert?.type)}: {props.alert?.msg}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
       </div>
       
    );
}

export default Alert;