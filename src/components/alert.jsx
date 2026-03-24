import React from 'react';


function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div className='container'
    style={{ 
     
      height: '30px', 
     
      
     }}
     >
      {props.alert &&
        <div className={`alert alert-${props.alert?.type}`} style={{width: '100%'}}>
          {capitalize(props.alert?.type)}: {props.alert?.msg}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
    </div>

  );
}

export default Alert;