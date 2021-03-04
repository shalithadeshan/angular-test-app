export class Users{
  id: number;
  name: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: {
      lat: number,
      lng: number
    }
  };
  phone: string;
  site: string;
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  };
}
