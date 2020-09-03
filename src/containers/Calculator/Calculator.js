import React, { Component } from 'react';
import { Text, Box } from "@chakra-ui/core";

import './Calculator.css';
import CalculatorButtons from '../../components/CalculatorButtons';
import CalculatorDisplay from '../../components/CalculatorDisplay';
import NavBar from '../../components/NavBar';

class Calculator extends Component {
    state = {
        displayValue: ""
    }

    calculate = () => {
        try {
            this.setState({
                displayValue: (eval(this.state.displayValue) || "") + ""
            });
        } catch (e) {
            this.setState({
                displayValue: "error"
            });
        };
    };

    clear = () => {
        this.setState({
            displayValue: ""
        });
    };

    clearEntry = () => {
        this.setState({
            displayValue: this.state.displayValue.slice(0, -1)
        });
    };


    buttonClickHandler = (buttonName) => {
        if (buttonName === "=") {
            this.calculate();
        }
        else if (buttonName === "C") {
            this.clear();
        }
        else if (buttonName === "CE") {
            this.clearEntry();
        }
        else {
            this.setState({
                displayValue: this.state.displayValue + buttonName
            });
        }
    };


    render() {
        return (
            <Box marginTop={["50px", "40px", "0"]}>
                <NavBar />
                <Text
                    className="text"
                    fontSize={["2xl", "xl"]}
                    fontWeight="bold"
                    padding="10px"
                >Simple Calculator</Text>
                <Box className="calculator" padding={["15px", "10px"]} borderRadius={["6px", "4px"]}>
                    <div className="displayDiv">
                        <CalculatorDisplay displayValue={this.state.displayValue} />
                    </div>
                    <CalculatorButtons onClick={this.buttonClickHandler} />
                </Box>
            </Box>
        );
    }
}

export default Calculator;