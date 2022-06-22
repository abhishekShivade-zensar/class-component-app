import React,{Component} from "react";

export default class SearchBox extends Component{
render(){
    return(
        <div className="mx-5 my-5">
            <input type='search' className='serachBox' placeholder={this.placeholder} onChange={this.props.searchUserHandler} />
        </div>
    )
}
}