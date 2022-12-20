import { TimeTravelerModel } from "./time-traveler.model";

export interface LoginInputModel {
  passport: string;
  password: string;
}

export interface LoginModel {
  token: string;
  timeTraveler: TimeTravelerModel;
}

export interface TokenData {
  id: string;
  passport: string;
}
