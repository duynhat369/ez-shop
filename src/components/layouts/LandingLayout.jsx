import Header from 'components/Header';
import React from 'react';

LandingLayout.propTypes = {

};

function LandingLayout(props) {
    const { children } = props
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default LandingLayout;