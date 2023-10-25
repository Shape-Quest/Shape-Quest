import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import LoginForm from '../src/components/LoginForm';
import ColorTools from '../src/components/ColorTools';
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import LoginForm from '../src/components/LoginForm';

>>>>>>> dev
//does the login form render input fields?..
//test the buttons

describe('Unit testing React components', () => {

  describe('LoginForm', () => {
<<<<<<< HEAD

=======
    let loginForm;
>>>>>>> dev
    const props = {
      username: 'Robert',
      password: 'stabrabbit',
      loggedIn: false
    };

<<<<<<< HEAD
    beforeEach(() => {
=======
    beforeAll(() => {
>>>>>>> dev
      render(
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm {...props}/>} />
          </Routes>
        </Router>
        )
<<<<<<< HEAD
    });
=======
    })
>>>>>>> dev

    test('Contains a Login In button', async () => {
      
      const buttons = await screen.findAllByRole('button');
      // console.log('this should be the amount of buttons: ', buttons.length)
      // console.log('login button: ', buttons)
      expect(buttons.length).toBe(1);
      expect(buttons[0]).toHaveTextContent('Log In');

    })

<<<<<<< HEAD
    test('Login button does not trigger when clicked without username and password input', async () => {
      const props = {
        handleSubmit: jest.fn(),
      }

      const buttons = await screen.findAllByRole('button');
      console.log(buttons[0]);
      userEvent.click(buttons[0]);
      expect(props.handleSubmit).toHaveBeenCalledTimes(0);
    })

  })

  describe('Unit testing ColorTools', () => {
    
    describe('ColorTools', () => {
      beforeEach(() => {
        render(<ColorTools />)
      })
    })
  })

=======
    test('HandleSubmit function is invoked when button is clicked', async () => {
      const buttons = await screen.findAllByRole('button');
      
    })

  })
>>>>>>> dev
})