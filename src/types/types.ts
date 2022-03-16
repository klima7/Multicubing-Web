export interface AccountResponse {
  email: string;
  username: string;
  date_joined: string;
  active: boolean;
  last_seen?: string;
}

export class Account {
  email: string;
  username: string;
  dateJoined: Date;
  active: boolean;
  lastSeen?: Date;

  constructor(response: AccountResponse) {
    this.email = response.email;
    this.username = response.username;
    this.dateJoined = new Date(response.date_joined);
    this.active = response.active;
    if(response.last_seen) {
      console.log(response.last_seen);
      this.lastSeen = new Date(response.date_joined);
    }
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
  count: number;
  private: boolean;
  creation_date: string;
}

export class Room {
  name: string;
  slug: string;
  description: string | null;
  cube: string;
  count: number;
  private: boolean;
  creation_date: Date;

  constructor(response: RoomResponse) {
    this.name = response.name;
    this.slug = response.slug;
    this.description = response.description;
    this.cube = response.cube;
    this.count = response.count;
    this.private = response.private;
    this.creation_date = new Date(response.creation_date);
  }
}

export class RoomsFilters {
  constructor(readonly cube: string, readonly publicOnly: boolean, readonly notEmpty: boolean) {}
}

export type ThemeIdentifier = "light" | "dark";