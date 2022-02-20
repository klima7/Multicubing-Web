export interface Account {
  email: string;
  username: string;
}


export interface LoginResponse {
  token: string;
  account: Account;
}
