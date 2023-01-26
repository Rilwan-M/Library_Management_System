import React, { PureComponent } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRegister } from "../../actions/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends PureComponent {
    constructor() {
        super();

        this.state = {
            username:"",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    register = e => {
        e.preventDefault();
        const { username,email, password, confirmPassword } = this.state;
        this.setState({  username:"",email: "", password: "", confirmPassword: "" });
        console.log(username,email, password, confirmPassword);
        this.props.register(this.state);
    };

    render() {
        const { username,email, password, confirmPassword } = this.state;
        return (
            <form className="loginForm">
                {this.props.registered ? "Registered" : ""}
                {this.props.registering && !this.props.registered ? "Registering" : ""}
                <h1 className="heading">Create an Account</h1>
                <div className="field">
                    <div className="customInput">
                        <FontAwesomeIcon className="inputicon" icon="envelope" />
                        <input
                            className="inputfield"
                            type="email"
                            placeholder="Email.."
                            autoComplete="username"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="customInput">
                        <FontAwesomeIcon className="inputicon" icon="envelope" />
                        <input
                            className="inputfield"
                            type="text"
                            placeholder="User Name"
                            autoComplete="username"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </div>

                </div>
                <div className="field">
                    <div className="customInput">
                        <FontAwesomeIcon className="inputicon" icon="key" />
                        <input
                            className="inputfield"
                            type="password"
                            placeholder="Password.."
                            autoComplete="new-password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="customInput">
                        <FontAwesomeIcon className="inputicon" icon="key" />
                        <input
                            className="inputfield"
                            type="password"
                            placeholder="Confirm Password.."
                            autoComplete="new-password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="field submitfield">
                    <input
                        className="submit"
                        type="submit"
                        value="SIGN UP"
                        onClick={this.register}
                    />
                </div>
                <div className="field signupfield">
                    <span className="linkfield">
                        <Link to="/login">Already signed up? Login here</Link>
                    </span>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        registered: state.registered,
        registering: state.registering
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: content => dispatch(startRegister(content))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
