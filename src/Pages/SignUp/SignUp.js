import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import login from '../../assets/images/Mobile-login-removebg-preview.png'
import useAuth from '../../hooks/useAuth';
import Slide from 'react-reveal/Slide';
import './SignUp.css'
const SignUp = () => {
    const history = useHistory()
    const location = useLocation()
    const redirect = location?.state?.from || '/home'
    const { allContext } = useAuth()
    const { signInWithGoogle,
        handleRegister,
        logOut,
        getEmail,
        error,
        getPassword,
        getName,
        setUser,
        setError,
        setUserInfo
    } = allContext;

    return (
        <div className="login py-5  mt-5">
            <Container>
                <Row className="main g-0 shadow">
                    <Slide left cascade>
                        <div className="col-lg-5">
                            <img className="img fluid w-100" src={login} alt="" />
                        </div>
                    </Slide>
                    <Slide right cascade>
                        <div className="col-lg-7 py-5 text-center">
                            <h2 style={{ fontWeight: "bold" }}>Create Account</h2>
                            <Form onSubmit={(e)=>{
                                e.preventDefault()
                                handleRegister()
                                .then(result => {
                                    setUser(result.user)
                                    setUserInfo()
                                    setError('')
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'Sign Up Successful',
                                        showConfirmButton: false,
                                        timer: 2000
                                    })
                                    logOut()
                                    history.push("/login")
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
                                        <input onBlur={getPassword} className="inp px-3 shadow" type="password" placeholder="Enter Password" required />
                                    </div>
                                </div>
                                <div className="form-row py-3">
                                    <div className="offset-1 col-lg-10">
                                        <button type="submit" className="btn-1">Sign Up</button>
                                    </div>
                                </div>
                                <p style={{fontWeight:"500",fontSize:"15px"}}>Already Sign up? <Link to="/login">Please login</Link></p>
                            </Form>
                            <p style={{fontWeight:"500",fontSize:"15px"}}>Or Login With</p>
                            <span><i onClick={() => {
                                signInWithGoogle()
                                    .then(result => {
                                        setUser(result.user)
                                        Swal.fire({
                                            position: 'top-center',
                                            icon: 'success',
                                            title: 'Login Successful',
                                            showConfirmButton: false,
                                            timer: 2000
                                        })
                                        history.push(redirect)
                                    })
                                    .catch(error => {
                                        setError(error.message)
                                    })
                            }} class="fab fa-google"></i></span>
                        </div>
                    </Slide>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;