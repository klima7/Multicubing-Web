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

export type Cube = 'two' | 'three' | 'four' | 'five';

export interface ApiErrorData {
  error: string;
  details?: any;
}

export class ApiError extends Error {
  data: ApiErrorData;
  status: number;

  constructor(data: ApiErrorData, status: number) {
    super('Api error');
    this.data = data;
    this.status = status;
  }
}

export interface RoomResponse {
  name: string;
  slug: string;
  description: string | null;
  cube: string;
  private: boolean;
  creation_date: string;
}

export class Room {
  name: string;
  slug: string;
  description: string | null;
  cube: string;
  private: boolean;
  creation_date: Date;

  constructor(response: RoomResponse) {
    this.name = response.name;
    this.slug = response.slug;
    this.description = response.description;
    this.cube = response.cube;
    this.private = response.private;
    this.creation_date = new Date(response.creation_date);
  }
}

export class RoomsFilters {
  constructor(readonly cube: string, readonly publicOnly: boolean, readonly notEmpty: boolean) {}
}
