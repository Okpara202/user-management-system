// User Type

export interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// initialState type

export interface IinitialState {
  loading: boolean;
  data: Iuser[];
  error: string | null;
}

// Api
export const api: string = "https://jsonplaceholder.typicode.com/users";
