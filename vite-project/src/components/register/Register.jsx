function Register(){
    return(
        <div>
            <header>Register</header>
            <label for= "username">Name</label>
            <input type="text"id="name"name="username"></input>

            <label for ="password">Password</label>
            <input type="password"></input>

            <label for="email">Email</label>
            <input type="email" id="email"></input>

        </div>
    )

};
export default Register;
