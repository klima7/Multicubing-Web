export class Account {

  dateJoined: Date;
  lastSeen?: Date;
  active: boolean;

  constructor(
    public email: string, 
    public username: string, 
    dateJoined: string, 
    lastSeen?: string) {
    this.dateJoined = new Date(dateJoined);
    if(lastSeen) this.lastSeen = new Date(lastSeen);
    this.active = this.lastSeen == null;
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

export class Message {

  constructor(
    public id: number,
    public sender: string, 
    public room: string, 
    public content: string, 
    public send_time: Date) {}
}
