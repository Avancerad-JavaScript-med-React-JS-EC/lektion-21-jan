import React from 'react';
import { useSelector } from 'react-redux';

function View() {
    //useSelector hämtar från vårt redux state
    const counter = useSelector((state) => { return state });

    return (
        <h2>Counter: { counter }</h2>
    )
}

export default View;