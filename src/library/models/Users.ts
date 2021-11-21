export interface User {
	id: number;
	email: string;
	phone: string[];
}

export interface IAm {
	id: number;
	user: User;
}
