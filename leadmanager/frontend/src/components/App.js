import React, {Component} from 'react'
import ReactDom from 'react-dom'

class App extends Component {
    render(){
        return <h1>HELLO WORLD!!!</h1>
        
    }
}

ReactDom.render(<App />, document.getElementById('app'))