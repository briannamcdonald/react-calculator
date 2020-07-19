import React from 'react';

import {Text} from '@chakra-ui/core';

const CalculatorDisplay = (props) => {

    let {displayValue} = (props);

    return(
        <div>
            <Text
                fontSize="lg"
                color="gray.700"
                textOverflow="ellipsis"
                overflow="hidden"
            >{displayValue}</Text>
        </div>
    );
};

export default CalculatorDisplay;