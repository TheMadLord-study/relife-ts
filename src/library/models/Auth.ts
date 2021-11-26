export interface Login {
	phonenumber?: string;
	phonenumberLogin?: string;
	username?: string;
	password: string;
}

export interface LoginResponse {
	key: string;
}

export interface PasscodeCreate {
	phonenumber: string;
}

export interface VerifyOnRegister {
	phonenumber: string;
	passcode: string;
	password: string;
}

export interface VerifyResponse {
	token: string;
	id: number;
}
