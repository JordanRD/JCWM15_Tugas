import React from 'react'
import './styling.css'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['ibadah', 'coding', 'makan']
        }
    }
    klik = () => {
        let list = [...this.state.list]
        list.push( document.getElementById('text').value)
        this.setState({ list: list })
    }
    button = (i) => {
        let templis = [...this.state.list]
        templis.splice(i, 1)
        this.setState({ list: templis })
    }
    edit = (i) => {
        let templis = [...this.state.list]
        templis.splice(i, 1,<input type='text' id='edit' />)
        this.setState({ list: templis })
        document.getElementsByClassName('save')[i].style.display=''
        document.getElementsByClassName('edit')[i].style.display='none'
        document.getElementsByClassName('button')[i].style.display='none'
    }
    save = (i) => {
        let templist=[...this.state.list]
        templist.splice(i, 1, document.getElementById("edit").value)
        this.setState({ list: templist })
        document.getElementsByClassName('save')[i].style.display='none'
        document.getElementsByClassName('edit')[i].style.display=''
        document.getElementsByClassName('button')[i].style.display=''
    }

    show = (a) => {

        return this.state.list.map((a, b) => <tr>
            <td>{a}</td>
            <td><button className='button' onClick={() => this.button(b)}>X</button>
                <button className='edit' onClick={() => this.edit(b)}>EDIT</button>
                <button className='save' style={{display:"none"}} onClick={()=>this.save(b)}>SAVE</button>
            </td>
        </tr>)
    }

    render() {
        return (
            <div id='container'>
                <h1>To Do list Exercise</h1>
                <div id='input'>
                    <input ref='list' placeholder='masukan input' id='text' type="text" />
                    <button onClick={this.klik}>Add</button>
                </div>
                <table id='table'>
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.show()}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default App