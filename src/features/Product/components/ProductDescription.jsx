import { Paper } from '@material-ui/core';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import React from 'react';

ProductDescription.propTypes = {
    product: PropTypes.object,
};

function ProductDescription(props) {
    const { product } = props
    const safeDescription = DOMPurify.sanitize(product.description)

    return (
        <Paper elevation={0} style={{ padding: '16px' }}>
            <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
        </Paper>
    );
}

export default ProductDescription;