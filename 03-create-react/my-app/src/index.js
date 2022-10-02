import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'

// const loading = false
// const loadData = () => {
//     return loading ? (<div>loading</div>) : (<div>loaded</div>)
// }
// const title = (
//     <h1 className='title' style={{color: 'red'}}>
//         条件渲染：
//         {loadData()}
//     </h1>
// )

// function Hello() {
//     return (
//         <div>Hello</div>
//     )
// }

// import Hello from "./Hello";

class App extends React.Component {
    handleClick = e => {
        this.setState({txt: e.target.value})
    }

    state = {
        txt: ''
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.txt} onChange={this.handleClick}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
