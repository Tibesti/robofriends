import React from 'react';

const card = (props) => {
    const {name, email, id} = props //JS destructurings was done here to make code cleanner
    /*
    without destructuring, our div would contain this
    <h2>{props.name}</h2>
    <p>{props.email}</p>
    */
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 grow tc">
            <img src={`https://robohash.org/${id}`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card