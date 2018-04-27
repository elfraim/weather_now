import React, { Component } from 'react';


class Input extends Component {
    render() {
        return (
            <div>
              <input placeholder="Choose a city" onChange={e => this.props.onChange(e)}></input>
              <button type="submit" className="button" onClick={this.props.onClick}><span>Search</span></button>
            </div>
        )
    }
}

export default Input;