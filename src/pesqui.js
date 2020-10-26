import React, { useState, useEffect, Component } from 'react';

function Apps(){

    const [obternome, setobternome] = useState('')
  
    function pegarNome(){
        const setobternome = setobternome.length > 0 ? `&ethnicity=${setobternome}` : ''
        console.log('teste entrou na funcção', setobternome)
    }

    return(
            <div className='Form'>
                <input type="text" onChange={e => setobternome(e.target.value)}/>
                <button type='button' onClick={pegarNome}></button>
            </div>
        );

    

};

export default Apps;