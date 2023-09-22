import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {

	const [ formState, setFormState ] = useState( initialForm );
	const [formValidation, setFormValidation] = useState({});

	useEffect(() => {
		checkedFormValidations();
	}, [formState])

	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)){
			if(formValidation[formValue] !== null) return false;
		}
		return true;
	}, [formValidation])

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[ name ]: value
		});
	}

	const onResetForm = () => {
		setFormState( initialForm );
	}

	const checkedFormValidations = () => {
		const formCheckedValues = {};
		for (const formField of Object.keys(formValidations)) {
			const [validatorFunction, feedbackMessage = 'some information was not correct'] = formValidations[formField];

			formCheckedValues[`${formField}Valid`] = validatorFunction(formState[formField]) ? null : feedbackMessage;
		}
		setFormValidation(formCheckedValues);
	}

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		formValidation,
		isFormValid
	}
}