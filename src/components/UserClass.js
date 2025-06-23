import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: null,
        }
    }
    
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/shubham-sharma25')
        const json = await data.json()
        this.setState({userInfo: json})
    }
    render() {

        const {name, loc} = this.props
        const {userInfo} = this.state
        return userInfo!==null ? (
            <div className="user-card">
                <h2>Name: {userInfo.login}</h2>
                <img src={userInfo.avatar_url}/>
            </div>
        ) : <h1>Loading</h1>
    }
}
export default UserClass;