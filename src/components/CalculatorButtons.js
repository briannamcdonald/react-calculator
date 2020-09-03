import React from 'react';
import { Button, useColorMode } from "@chakra-ui/core";

import Hearts from './Hearts/Hearts';

const CalculatorButtons = (props) => {

    const { colorMode } = useColorMode();

    const buttonStyling = {
        variantColor: colorMode === "light" ? "pink" : "teal",
        variant: "solid",
        size: "md",
        margin: "2px",
        width: "20px",
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                    {...buttonStyling}
                    variantColor="purple"
                    name="CE"
                    onClick={e => props.onClick(e.target.name)}
                >CE</Button>
                <Button
                    {...buttonStyling}
                    variantColor="purple"
                    name="C"
                    onClick={e => props.onClick(e.target.name)}
                >C</Button>
                <Hearts />
            </div>
            <Button
                {...buttonStyling}
                name="7"
                onClick={e => props.onClick(e.target.name)}
            >7</Button>
            <Button
                {...buttonStyling}
                name="8"
                onClick={e => props.onClick(e.target.name)}
            >8</Button>
            <Button
                {...buttonStyling}
                name="9"
                onClick={e => props.onClick(e.target.name)}
            >9</Button>
            <Button
                {...buttonStyling}
                name="/"
                onClick={e => props.onClick(e.target.name)}
            >/</Button>
            <br />
            <Button
                {...buttonStyling}
                name="4"
                onClick={e => props.onClick(e.target.name)}
            >4</Button>
            <Button
                {...buttonStyling}
                name="5"
                onClick={e => props.onClick(e.target.name)}
            >5</Button>
            <Button
                {...buttonStyling}
                name="6"
                onClick={e => props.onClick(e.target.name)}
            >6</Button>
            <Button
                {...buttonStyling}
                name="*"
                onClick={e => props.onClick(e.target.name)}
            >*</Button>
            <br />
            <Button
                {...buttonStyling}
                name="1"
                onClick={e => props.onClick(e.target.name)}
            >1</Button>
            <Button
                {...buttonStyling}
                name="2"
                onClick={e => props.onClick(e.target.name)}
            >2</Button>
            <Button
                {...buttonStyling}
                name="3"
                onClick={e => props.onClick(e.target.name)}
            >3</Button>
            <Button
                {...buttonStyling}
                name="-"
                onClick={e => props.onClick(e.target.name)}
            >-</Button>
            <br />
            <Button
                {...buttonStyling}
                name="0"
                onClick={e => props.onClick(e.target.name)}
            >0</Button>
            <Button
                {...buttonStyling}
                name="."
                onClick={e => props.onClick(e.target.name)}
            >.</Button>
            <Button
                {...buttonStyling}
                name="="
                onClick={e => props.onClick(e.target.name)}
            >=</Button>
            <Button
                {...buttonStyling}
                name="+"
                onClick={e => props.onClick(e.target.name)}
            >+</Button>
        </div>
    );
};

export default CalculatorButtons;