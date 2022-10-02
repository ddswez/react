import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {

    state = {
        comments: [
            {id: 1, name: 'jack', content: '沙发！！！'},
            {id: 2, name: 'jack2', content: '沙发2！！！'},
            {id: 3, name: 'jack3', content: '沙发3！！！'}
        ],
        userName: '',
        userContent: ''
    }

    renderList() {
        if (this.state.comments.length === 0) {
            return (<div className="no-comment">暂无评论</div>)
        }
        return (<ul>
            {
                this.state.comments.map(item => (
                        <li key={item.id}>
                            <h3>评论人：{item.name}</h3>
                            <p>评论内容：{item.content}</p>
                        </li>
                    )
                )
            }
        </ul>)
    }

    handleForm = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
            })
    }

    addComment = () => {
        const {comments, userName, userContent} = this.state
        if (userName.trim() === '' || userContent.trim() === '') {
            alert("没有内容")
            return
        }
        const newComments = [{
            id: Math.random(),
            name: userName,
            content: userContent
        }, ...comments]
        this.setState({
            comments: newComments,
            userName: '',
            userContent: ''
        })
    }

    render() {
        const {userName, userContent} = this.state

        return (
            <div className="app">
                <div>
                    <input className="user" type="text" placeholder="请输入评论人" value={userName} name='userName'
                    onChange={this.handleForm} />
                    <br/>
                    <textarea
                        className="content"
                        cols="30"
                        rows="10"
                        placeholder="输入内容"
                        value={userContent}
                        name="userContent"
                        onChange={this.handleForm}
                    />
                    <br/>
                    <button onClick={this.addComment}>发表评论</button>
                </div>

                {this.renderList()}
                {/*  {
                    this.state.comments.length === 0 ?
                        (<div className="no-comment">暂无评论</div>) :
                        (<ul>
                            {
                                this.state.comments.map(item => (
                                        <li key={item.id}>
                                            <h3>评论人：{item.name}</h3>
                                            <p>评论内容：{item.content}</p>
                                        </li>
                                    )
                                )
                            }
                        </ul>)
                }
            */}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))