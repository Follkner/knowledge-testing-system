export const loginValidate = (login) => {
	return /^[a-z]{1}[a-z0-9]{3,15}$/.test(login);
}

export const emailValidate = (email) => {
	return /^[a-z][a-z0-9.]{1,30}[a-z0-9]@[\w]{1,8}[.][\w]{1,6}$/.test(email);
}

export const passwordValidate = (password, passwordRepeat) => {
	return /^[\w]{8,24}$/.test(password) && /^[\w]{8,24}$/.test(passwordRepeat)
	&& password === passwordRepeat;
}

