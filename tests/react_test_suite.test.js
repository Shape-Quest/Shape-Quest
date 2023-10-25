import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import LoginForm from '../src/components/LoginForm';

//does the login form render input fields?..
//test the buttons

describe('Unit testing React components', () => {

  describe('LoginForm', () => {
    let loginForm;
    const props = {
      username: 'Robert',
      password: 'stabrabbit',
      loggedIn: false
    };

    beforeAll(() => {
      render(
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm {...props}/>} />
          </Routes>
        </Router>
        )
    })

    test('Contains a Login In button', async () => {
      
      const buttons = await screen.findAllByRole('button');
      // console.log('this should be the amount of buttons: ', buttons.length)
      // console.log('login button: ', buttons)
      expect(buttons.length).toBe(1);
      expect(buttons[0]).toHaveTextContent('Log In');

    })

    test('HandleSubmit function is invoked when button is clicked', async () => {
      const buttons = await screen.findAllByRole('button');
      
    })

  })
})