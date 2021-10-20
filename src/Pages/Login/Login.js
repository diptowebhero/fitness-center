import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import './Login.css'
import login from '../../assets/images/Mobile-login-removebg-preview.png'
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Slide from 'react-reveal/Slide';
const Login = () => {
    const history = useHistory()
    const { allContext } = useAuth()
    const location = useLocation()
    const redirect = location?.state?.from || './home'
    const { signInWithGoogle,
        signInWithEmailPassword,
        getEmail,
        getPassword,
        error,
        setError,
        setUser,
    } = allContext
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
                            <h2 style={{ fontWeight: "bold" }}>Please Login</h2>
                            <Form onSubmit={(e)=>{
                                e.preventDefault()
                                signInWithEmailPassword()
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
                                    window.history.go()
                                    setError('')
                                })
                                .catch(error => {
                                    setError(error.message)
                                })
                            }}>
                                <div className="form-row py-2 pt-3">
                                    <p className="text-danger">{error}</p>
                                    <div className="offset-1 col-lg-10">
                                        <input onBlur={getEmail} className="inp px-3 shadow" type="email" placeholder="Enter Email" required />
                                    </div>
                                </div>
                                <div className="form-row py-2">
                                    <div className="offset-1 col-lg-10">
                                        <input onBlur={getPassword} className="inp px-3 shadow" type="password" placeholder="Enter Password" required />
                                    </div>
                                </div>
                                <div className="form-row py-3">
                                    <div className="offset-1 col-lg-10">
                                        <button type="submit" className="btn-1">Login</button>
                                    </div>
                                </div>
                                <p>New User? <Link to="/signUp">Sign Up</Link></p>
                            </Form>
                            <p>Or Login With</p>
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

export default Login;