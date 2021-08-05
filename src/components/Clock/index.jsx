import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {

};

function Clock(props) {
    const { timeString } = useClock();
    return (
        <div>
            {timeString}
        </div>
    );
}

export default Clock;