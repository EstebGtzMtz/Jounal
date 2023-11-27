/* eslint-disable no-undef */
import {fireEvent, render, screen} from "@testing-library/react";
import { LoginPage } from "../../../src/auth/Pages/index.js";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth/index.js";

describe('Test on <LoginPage />', () => {

	const store = configureStore({
		reducer:{
			auth: authSlice.reducer
		}
	});

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

	test('google buttons should trigger the startGoogleSignIn action', ()=>{
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const googleBtn = screen.getByLabelText('google-btn');
		fireEvent.click(googleBtn);

		// screen.debug();
	});

});