import React, { Component } from 'react'
import Home from './component/Home/Home'
import Destination from './component/Destination/Destination'
import Crew from './component/Crew/Crew'
import Tech from './component/Tech'
import Header from './component/Header'
export default class App extends Component {
    

    constructor(props){
        super(props);
    }


    render(){
        return (
          <Header home={<Home/>} dest={<Destination/>} crew={<Crew/>} tech={<Tech/>} />
        );}
};