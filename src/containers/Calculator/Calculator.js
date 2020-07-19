import React, {Component} from 'react';

import './Calculator.css';
import CalculatorButtons from '../../components/CalculatorButtons';
import CalculatorDisplay from '../../components/CalculatorDisplay';

class Calculator extends Component {
    state = {
        displayValue: ""
    }

    calculate = () => {
        try {
            this.setState({
                displayValue: (eval(this.state.displayValue) || "") + ""
            });
        } catch(e) {
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
        if(buttonName === "=") {
            this.calculate();
        }
        else if(buttonName === "C") {
            this.clear();
        }
        else if(buttonName === "CE") {
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
            <div className="calculator">
                <div className="displayDiv">
                    <CalculatorDisplay displayValue={this.state.displayValue} />
                </div>
                <CalculatorButtons onClick={this.buttonClickHandler} />
            </div>
        );
    }
}

export default Calculator;