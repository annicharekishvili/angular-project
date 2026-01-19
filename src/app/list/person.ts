export interface Person {
  id: number;
  name: string;
  lastname: string;
  age: number | null;
  address?: {
    country: string;
    city: string;
  };
}
