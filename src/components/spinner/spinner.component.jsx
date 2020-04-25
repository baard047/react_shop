import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

//HOC component
const WithSpinner = ComponentToRender => ({isLoading, ...props}) => {
    return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        )
        : (<ComponentToRender { ...props }/>)
};

export default WithSpinner;