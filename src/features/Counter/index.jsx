import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    const handleIncreaseClick = () => {
        const action = increase()
        dispatch(action)
    }

    const handleDecreaseClick = () => {
        const action = decrease()
        dispatch(action)
    }

    return (
        <div className="container">
            <p> Counter: {count}</p>

            <div className="buttons">
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;