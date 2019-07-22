import { HttpClient } from 'typed-rest-client/HttpClient';
import { IHeaders, IHttpClientResponse } from 'typed-rest-client/Interfaces';

export class PublicRoutes {

    public dev: boolean;
    public token: string;
    public slug: string;

    login(email: string, password: string) {
        let client: HttpClient = new HttpClient('');
        return client.patch("http://localhost:5000/public/login", JSON.stringify({ email, password }))
          .then((resp: IHttpClientResponse) => resp.readBody())
          .then((body: string) => {
              console.log({ body })
            })
          .catch((err) => console.log({ err }));
    }  
}