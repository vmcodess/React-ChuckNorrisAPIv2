import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


// function ApiCall() {

//     const [ quote, setQuote ] = useState('');

//     const URL = 'https://api.chucknorris.io/jokes/random';
//     fetch(URL)
//     .then((res) => {
//         res.json()
//         .then(data => {
//             console.log(data.value)

            
//         })
//     })
//     return null;
// }

function Api() {

    const [ quote, setQuote ] = useState('');

    function fetchQuote () {
        const URL = 'https://api.chucknorris.io/jokes/random';
        fetch(URL)
        .then((res) => {
            res.json()
            .then(data => {
                console.log(data.value)
                setQuote(data.value);
            })
        })
    }

    return(
        <div>
            <p className='quote'> { quote }</p>
            <Button variant='contained' color='primary' onClick={fetchQuote}>Click Me</Button>
        </div>
    )
}

export default Api;
