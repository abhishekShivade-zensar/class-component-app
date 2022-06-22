import './App.css';
import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  // constructor(){
  //   super()
  //   this.state={
  //     myName: 'Abhishek'
  //   }
  // }
  //OR
  state = {
    // person1:{
    //   name:'David'
    // },
    // person2:{
    //   name:'Scott'
    // },
    // person3:{
    //   name:'Allan'
    // },

    // for users
    // users:[
    //   // {
    //   //   id:100,
    //   //   name:'David'
    //   // },
    //   // {
    //   //   id:101,
    //   //   name:'Scott'
    //   // },
    //   // {
    //   //   id:102,
    //   //   name:'Allan'
    //   // }
    // ]

    // for employee database
    // Employee:[]

    // for Api from internet 
    users: []

    // for book api
    // books:[]
  }

  // nameChangeHandler=()=>{
  //   this.setState({
  //     myName:'Zensar Technologies.....'
  //   })
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // for Api from internet
      // fetch('http://localhost:5000/books') // for book Api
      // fetch('http://localhost:4000/api') // for employee database
      .then((response) => {
        // for book Api
        // response.json().then((books) => {
        //    console.log(books)
        //   this.setState(() => {
        //     return { books }
        //   },

        // for user and Api from internet
        response.json().then((users) => {
          console.log(users)
          this.setState(() => {
            return { users }
          }

// for employee database
        // response.json().then((employees) => {
        //   console.log(employees)
        //   this.setState(() => {
        //     return { employees }
        //   },

        //     () => {
        //       // console.log(`Now current state is ${JSON.stringify(this.state)}`)
        //     }
        )
        })
        // console.log(response)
      })

      }
  searchUserHandler = (event) => {
          // console.log({ strtingArray: this.state.users })
          const serachFeild = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return { serachFeild }
          })

          // this.setState(()=>{
          //   return { users:filteredUsers}
          // }, ()=>{console.log({endingArray:this.state.users})})
        }
  render() {
        // const {users,serachFeild} = this.state
        // const{searchUserHandler}= this


        // for employee database use this
        // const filteredUsers = this.state.employees.filter((employee) => { 
        // return employee.name.toLocaleLowerCase().includes(this.state.serachFeild) 

        // for book use this
        // const filteredUsers = this.state.books.filter((book) => { 
        // return book.name.toLocaleLowerCase().includes(this.state.serachFeild)

        // for user and Internet Api use this
        const filteredUsers = this.state.users.filter((user) => {
          return user.name.toLocaleLowerCase().includes(this.state.serachFeild)
          // OR 
          // const filteredUsers = users.filter((user) => {
          // return user.name.toLocaleLowerCase().includes(serachFeild)
        })

    // test(){
    return(
      <div className = 'mx-5 my-5' >
            <h1 className='mx-5 my-5'>This is class Component...........</h1>
        {/* <input type='search' className='serachBox' placeholder='Search Users' onChange={this.searchUserHandler} /> */ }
        {/* <input type='search' className='serachBox' placeholder='Search Users' onChange={searchUserHandler} /> */ }

        {/* <h3>{this.state.person1.name}</h3>
        <h3>{this.state.person2.name}</h3>
        <h3>{this.state.person3.name}</h3> */}

        {/* {filteredUsers.map((u, idx) => {
          return (
            <h3 key={u.
              id}>{u.name}</h3>
          )
        }
        )} */}
        <SearchBox searchUserHandler = { this.searchUserHandler } placeholder = { this.placeholder } />
            <CardList users={filteredUsers} />
      </div>
    )
  }
}


export default App;
