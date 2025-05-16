function UserGreeting({isLoggedIn, userName}) {
    if( isLoggedIn ) {
        return <h1>Welcome back {userName}</h1>
    } 
    return <h1>Please Login</h1>
}

export default UserGreeting