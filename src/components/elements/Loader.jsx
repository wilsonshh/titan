import React from 'react';
import {Bars} from 'react-loader-spinner';

/**
 * Loader component displays a loading spinner.
 * @returns {JSX.Element} The Loader component.
 */
function Loader() {
    return (
        <Bars
            height={60}
            width={60}
            color="#615dfa"
            visible={true}
        />
    );
}

export default Loader;
