import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    constructor(props) {
		super(props);
		this.state ={
			render: false
		}
		this.clickHandle = this.clickHandle.bind(this);
	};

	clickHandle(){
		this.setState({render : !this.state.render});
	}

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				{this.state.render && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
				<button id="click" type="button" onClick={this.clickHandle}>Click</button>
    		</div>
    	);
    }
}

export default App;

