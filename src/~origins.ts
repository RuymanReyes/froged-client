import { HttpClient } from 'typed-rest-client/HttpClient';
import { IHttpClientResponse } from 'typed-rest-client/Interfaces';

export class OriginsRoutes {

    public dev: boolean;
    public token: string;
    public slug: string;

    getAll() {
        let client: HttpClient = new HttpClient('');
        console.log(`https://${ this.dev? 'dev-' : '' }api.froged.com/ws/${ this.slug }/origins`);
        return client.get(`https://${ this.dev? 'dev-' : '' }api.froged.com/ws/${ this.slug }/origins`, { token: this.token })
          .then((resp: IHttpClientResponse) => resp.readBody())
          .then((body: string) => {
              return JSON.parse(body).data;
            })
          .catch((err) => console.error("Error de petición"));
    }  
}