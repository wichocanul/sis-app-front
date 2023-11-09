export interface CitizenResponse {
  message: string;
  data: Citizen[];
}

export interface Citizen {
  id: number;
  name: string;
  lastName: string;
  motherLastName: string;
  curp: string;
  ine: string;
  address: string;
  street: string;
  serviceType: string;
  observations: string;
  created_at?: null|string;
  updated_at?: null|string;
}
