/* eslint-disable no-undef */
import {fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { LoginPage } from "../../../src/auth/Pages/index.js";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import {notAuthenticatedState} from "../../fixtures/authFixtures.js";
import {authSlice} from "../../../src/store/auth/authSlice.js";


const mockStartGoogleSignIn =  jest.fn();
const mockStartLoginWithEmailAndPassword =  jest.fn();

jest.mock('../../../src/store/auth/authThunks.js', () => ({
	startGoogleSignIn: () => mockStartGoogleSignIn,
	startLoginWithEmailAndPassword: ({email, password}) => {
		return () => mockStartLoginWithEmailAndPassword({email, password})
	}
}));

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => fn => fn()
}));

const store = configureStore({
	reducer:{
		auth: authSlice.reducer
	},
	preloadedState: {
		auth: notAuthenticatedState
	}
});

describe('Test on <LoginPage />', () => {

	beforeEach(() => jest.clearAllMocks());

	test('should render the component', ()=> {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
	});

	test('google buttons should trigger the startGoogleSignIn function', ()=>{
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const googleBtn = screen.getByLabelText('google-btn');
		fireEvent.click(googleBtn);

		expect(mockStartGoogleSignIn).toHaveBeenCalled();
	});

	test('should call the function startLoginWithEmailAndPassword in the onSubmit',()=> {

		const email = 'esteban@mail.com';
		const password = '1234567890';

		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const emailField = screen.getByRole('textbox', {name: 'Email'});
		fireEvent.change(emailField, {target: {name: 'email', value: email}});

		const passwordField = screen.getByTestId('password');
		fireEvent.change(passwordField, {target: {name: 'password', value: password}});

		const loginForm = screen.getByLabelText('submit-form');
		fireEvent.submit(loginForm);

		expect(mockStartLoginWithEmailAndPassword).toHaveBeenCalledWith({ email, password });
	});

});