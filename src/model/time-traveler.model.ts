export interface TimeTravelerInputModel {
  name: string;
  birthDate: string;
  passport: string;
}

export interface TimeTravelerModel {
  id: string;
  name: string;
  birthDate: Date;
  passport: string;
}
