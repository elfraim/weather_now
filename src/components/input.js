import React, { Component } from 'react';


class Input extends Component {
    render() {
        return (
            <div id="input">
              <input placeholder="Choose a city" className="effect-24" onChange={e => this.props.onChange(e)}></input>
              <button type="submit" className="button" onClick={this.props.onClick}><span>Search</span></button>
            </div>
        )
    }
}

export default Input;