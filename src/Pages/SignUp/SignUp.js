import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import login from '../../assets/images/Mobile-login-removebg-preview.png'
import useAuth from '../../hooks/useAuth';
import './SignUp.css'
const SignUp = () => {
    const history = useHistory()
    const location = useLocation()
    const redirect = location?.state?.from ||  '/home'
    const { allContext } = useAuth()
    const { signInWithGoogle,
        signIn,
        getEmail,
        error,
        getPassword,
        getName,
        setUser,
        setError,
        setUserInfo
    } = allContext

    return (
        <div className="login py-5  mt-5">
            <Container>
                <Row className="main g-0 shadow">
                    <div className="col-lg-5">
                        <img className="img fluid w-100" src={login} alt="" />
                    </div>
                    <div className="col-lg-7 py-5 text-center">
                        <h2 style={{fontWeight:"bold"}}>Create Account</h2>
                        <Form onSubmit={()=>{
                            signIn()
                            .then(result => {
                                setUserInfo()
                                setUser(result.user)
                                history.push(redirect)
                            })
                            .catch(error => {
                                setError(error.message)
                            })
                        }}>
                            <p className="text-danger">{error}</p>
                            <div className="form-row py-2 pt-3">
                                <div className="offset-1 col-lg-10">
                                    <input onBlur={getName} className="inp px-3 shadow" type="name" placeholder="Enter Name" required />
                                </div>
                            </div>
                            <div className="form-row py-2">
                                <div className="offset-1 col-lg-10">
                                    <input onBlur={getEmail} className="inp px-3 shadow" type="email" placeholder="Enter email" required />
                                </div>
                            </div>
                            <div className="form-row py-2">
                                <div className="offset-1 col-lg-10">
                                    <input onSubmit={getPassword} className="inp px-3 shadow" type="password" placeholder="Enter Password" required />
                                </div>
                            </div>
                            <div className="form-row py-3">
                                <div className="offset-1 col-lg-10">
                                    <button type="submit" className="btn-1">Sign Up</button>
                                </div>
                            </div>
                            <p>Already Sign up? <Link to="/login">login</Link></p>
                        </Form>
                        <p>Or Login With</p>
                        <span><i onClick={() => {
                            signInWithGoogle()
                                .then(result => {
                                    setUser(result.user)
                                    history.push(redirect)
                                })
                                .catch(error => {
                                    setError(error.message)
                                })
                        }} class="fab fa-google"></i></span>
                        <span><i class="fab fa-github"></i></span>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;