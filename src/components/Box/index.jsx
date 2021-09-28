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
            >
                <p style={{ color: color }}>/box</p>
            </div>
        </React.Fragment>
    );
}

export default Box;