import React from "react"
import $ from "jquery"

class Dashboard extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {firstName:"FN", headline:"Title"};
    }

    componentDidMount(){
        var o = this;
        $.ajax("http://localhost:5000/profiledata").done(function (data) {
            console.log("data  ", data);
            o.setState(data);
            
        })
    }

    render(){

        return (
            <div>
                Welcome
                <div>{this.state.firstName} {this.state.lastName}</div>

                <div>{this.state.headline}</div>

            </div>
        )
    }
}



export default Dashboard