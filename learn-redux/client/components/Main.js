import React from 'react';
import { link } from 'react-router';


const Main = React.createClass({
    render() {
        return (
            <div>
            <h1>MaxStagram</h1>
            {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
})

export default Main;
