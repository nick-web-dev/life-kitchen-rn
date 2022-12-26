export interface LoginFormValues {
  email: string;
  password: string;
  token: string | undefined;
}

export interface RegisterFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface ResetEmail {
  email: string;
}
