import React from "react";

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userinfo: {
        name: "Dummy",
        bio: "test@gmail.com",
        avatar_url: "",
      }
    }

  }

  async componentDidMount(){
    const response = await fetch("https://api.github.com/users/kausaranjum94");
    const data = await response.json();
    console.log(data);
    this.setState({
      userinfo: data,
    })
  }

  render(){
    const {name, bio, avatar_url} = this.state.userinfo;
    return (
      <div className="aboutBio">
        <h1>You have landed to About Page.</h1>
        <div className="aboutBioContent">
          <div className="aboutBioImage">
            <img src={avatar_url} />
          </div>
          <div className="aboutBioDetail">
            <h3>{name}</h3>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    )
  }
  
}

export default About
