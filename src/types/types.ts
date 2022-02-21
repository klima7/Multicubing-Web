export interface AccountResponse {
  email: string;
  username: string;
  date_joined: string;
}

export class Account {
  email: string;
  username: string;
  dateJoined: Date;

  constructor(response: AccountResponse) {
    this.email = response.email;
    this.username = response.username;
    this.dateJoined = new Date(response.date_joined);
  }
}


export interface LoginResponse {
  token: string;
  account: Account;
}
