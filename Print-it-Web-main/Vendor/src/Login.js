import React, { Component } from "react";



class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }
  componentDidMount() {
    console.log("Hello");
  }
  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  

  render() {
    const { email, password, loading } = this.state;

   

    return (
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">
              <i class="fas fa-sign-in-alt"></i> Login
            </h1>
            <form>
              {loading ? (
                <div className="jumbotron text-center">
                  <h2>Loading....</h2>
                </div>
              ) : (
                ""
              )}
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  onChange={this.handleChange("email")}
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter Email"
                  value={email}
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  onChange={this.handleChange("password")}
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Enter Password"
                  value={password}
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block" >
                Login 
              </button>
            </form>
            <p class="lead mt-4">
              <a href="/dashboard">dashboard</a>
            </p>
            <p classs="lead mt-4">
              <a href="/Signup">Create account?</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
