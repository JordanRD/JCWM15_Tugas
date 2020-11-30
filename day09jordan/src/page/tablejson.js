import React, { Component } from 'react'
import Axios from 'axios'
import {
    Table,Button,Form
} from 'react-bootstrap'
export default class TableJSON extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dbusers: [],
            editdata: [],
            paramedit: false,
            first_name: '',
            last_name:'',
            email:''
        }
    }
    componentDidMount() {
        this.getData()
}

    getData = () => {
        Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({dbusers:res.data})
            })
            .catch((err) => {
            console.log(err)
        })

    }
    
    tableHead = () => {
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }
    tableBody = (a) => {
        let { dbusers, editdata } = this.state
        let gantiInput = dbusers
        // if (typeof (editdata) !== 'object') {
        //     // this.setState({first_name:gantiInput[editdata].first_name})
        //     // this.setState({last_name:gantiInput[editdata].last_name})
        //     // this.setState({ email: gantiInput[editdata].email })
            
        //     gantiInput[editdata] = ({
        //         id: gantiInput[editdata].id,
        //         first_name:<input name='first_name'onChange={i=>this.savevalue(i)} value={this.state.first_name} type='text' placeholder='firstname'/>,
        //         last_name:<input name='last_name' onChange={i=>this.savevalue(i)} value={this.state.last_name} type='text' placeholder='lastname'/>,
        //         email:<input name='email' onChange={i=>this.savevalue(i)} value={this.state.email} type='text' placeholder='email'/>

        //     })
        //     this.setState({ paramedit: true })
        //     this.setState({editdata:[]})
        // }
        // if (typeof (editdata) === 'object') {
            
        // }
        return (
            <tbody>
                {dbusers.map((item, index) => {

                    if (editdata === index) {
                        return (
                            <tr key={index}>
                                <td>#</td>
                                <td><input name='first_name' ref='gafirstname' type='text' placeholder='firstname'/></td>
                                <td><input name='last_name'  ref='galastname' type='text' placeholder='lastname'/></td>
                                <td><input name='email'  ref='gaemail' type='text' placeholder='email'/></td>
                                <td>
                                {this.showbutton(true,index,item.id)}
                                </td>
                            </tr>
                        )
                    } else {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.first_name}</td>
                                <td>{ item.last_name }</td>
                                <td>{item.email}</td>
                                <td>
                                {this.showbutton(false,index,item.id)}
                                </td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        )
    }

    showbutton = (i,d,s) => {
        if (i===false) {
            return (
                <div>
                    <Button value={d}onClick={()=>this.edit(d)}>Edit</Button>
                    <Button value={s} onClick={() =>this.deleteButton(s)}>Delete</Button>
                </div>
            )
        }
        if (i===true) {
            return (
                    <div>
                    <Button value={s}onClick={()=>this.save(s)}>Save</Button>
                    <Button value={d} onClick={() =>this.cancelButton(d)}>Cancel</Button>
                    </div>
            )
        }

    }
    save = (a) => {
        let firstname=this.refs.gafirstname.value
        let lastname=this.refs.galastname.value
        let email = this.refs.gaemail.value
        Axios.put(`http://localhost:2000/users/${a}`, {
            first_name: firstname,
            last_name: lastname,
            email:email
        })
            .then((res)=>{
            this.getData()
            }).catch((err) => {
            console.log(err);
            })
            this.setState({ paramedit: false })
            this.setState({ editdata: [] })
    }
    cancelButton = (b) => {
        this.setState({ paramedit: false })
        this.setState({ editdata: [] })
        
}
    tableInput = () => {
        return (
            <tbody>
                <tr >
                    <td>#</td>
                    <td>
                    <Form.Control type="text" placeholder="First name" ref='firstname' />
                    </td>
                    <td>
                    <Form.Control type="text" placeholder="Last name"ref='lastname' />
                    </td>
                    <td>
                    <Form.Control type="email" placeholder="Email" ref='email'/>
                    </td>
                    <td >
                        <Button onClick={this.handleAdd}>Save</Button>
                        {/* <Button>Cancel</Button> */}
                    </td>
                </tr>
            </tbody>
        )
    }
    table = () => {
        return (
            <Table>
                {this.tableHead()}
                {this.tableBody()}
                {this.tableInput()}
            </Table>
        )
    }
    handleAdd = () => {
        
        let first_name=this.refs.firstname.value
        let last_name=this.refs.lastname.value
        let email = this.refs.email.value

        console.log(first_name, last_name, email)
        Axios.post('http://localhost:2000/users', {
            first_name,
            last_name,
            email
        })
            .then((res) => {
                console.log(res);
                this.getData()
            })
            .catch((err) => {
            console.log(err);
            })
            this.refs.firstname.value=''
            this.refs.lastname.value=''
            this.refs.email.value=''
    }
    deleteButton = (i) => {
        let del = i
        Axios.delete(`http://localhost:2000/users/${del}`)
            .then((res)=>{
            this.getData()
            })
            .catch((err) => {
            console.log(err)
            })
    }
    edit = (i) => {
        let butval=i
        this.setState({ editdata: butval })
        
    }
    render() {
        // console.log(this.state);
        // console.log(this.state.editdata)
        // console.log(this.state.dbusers);
        return (
            <div>
                <h1>Table JSON</h1>
                {this.table()}
            </div>
        )
    }
}
