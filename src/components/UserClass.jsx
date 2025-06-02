import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {name, email, designatin} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <h2>{email}</h2>
                <p>{designatin}</p>
            </div>
        );
    }
}

export default UserClass