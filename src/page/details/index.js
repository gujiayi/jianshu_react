import React ,{ Component } from 'react';

class Details extends Component{
    constructor(props){
        super(props)
        this.state={
            id:props.match.params.id
        }
    }
    render(){
        return(
            <div>{this.state.id}</div>
        )
    }
}

export default Details;