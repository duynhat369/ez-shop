import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import "./styles.scss";

function Box() {
    const color = useMagicColor();

    return (
        <React.Fragment>
            <div
                className="boxed"
                style={{ backgroundColor: color }}
            ></div>
            <p style={{ color: color }}>123</p>
        </React.Fragment>
    );
}

export default Box;