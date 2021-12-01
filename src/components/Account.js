import React from 'react'
import  jwt  from 'jsonwebtoken';

export default function Account(props) {

    const decodedJWT = jwt.decode(props.jwt);
    console.log(decodedJWT);
    return (
        <div>
            <h1>Hello from Account</h1>
        </div>
    )
}
