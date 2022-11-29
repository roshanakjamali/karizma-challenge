type GeolocationType = {
  lat: string;
  long: string;
};

type NameType = {
  firstname: string;
  lastname: string;
};

interface AddressProps {
  geolocation: GeolocationType;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface UserProps {
  id: number;
  __v: number;
  email: string;
  phone: string;
  name: NameType;
  username: string;
  password: string;
  address: AddressProps;
}

export interface UsersState {
  collection: UserProps[];
  status: 'idle' | 'loading' | 'failed';
}
