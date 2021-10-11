import React from "react";
import { Input } from 'antd';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemoeratureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ''}
    }

    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }

    render(){
        const temperature = this.props.temperature
        const scale = this.props.scale
        const isDisabled = this.props.disabled
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <Input value = {temperature}
                style = {{ width: 200 }}
                disabled = {isDisabled}
                onChange = {this.handleChange} />
            </fieldset>
        )
    }
}

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}

function toFahreheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

class Caculatior extends React.Component{
    constructor(props){
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {temperature: '', scale: 'c'}
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature})
    }
    handleFahrenheitChange(temperature){
        this.setState({scale:'f', temperature})
    }

    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius): temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahreheit) : temperature

        return(
            <div>
                <TemoeratureInput scale='c' 
                temperature={celsius}
                disabled = {false}
                onTemperatureChange={this.handleCelsiusChange}/>
                <TemoeratureInput scale='f' 
                temperature={fahrenheit}
                disabled = {true}
                onTemperatureChange={this.handleFahrenheitChange}/>
            </div>
        )
    }
}

export default Caculatior