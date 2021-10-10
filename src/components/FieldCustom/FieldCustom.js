import React, { Component } from 'react';

import './FieldCustom.css'

class FieldCustom extends Component {
    render() {
        return (
            <div className="input">
                <input
                    type={this.props.type}
                    placeholder={this.props.placehoder}
                    required={this.props.required}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default FieldCustom;