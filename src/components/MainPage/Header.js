import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import ContactUs from './ContactUs';
import About from './About';
import Music from './Music';
import MeetTheTeam from './MeetTheTeam';
import FormikSignUpForm from './SignUp'



export default function Header() {
    return(
        <div className='header'>
            <h1>Decoded</h1>
            <Navigation />

            <Route exact path='/' component={Home}/>
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/about' component={About} />
            <Route path='/music' component={Music} />
            <Route path='/meet-the-team' component={MeetTheTeam} />
            <Route path='/sign-up' component={FormikSignUpForm} />
            



        </div>
    )
}