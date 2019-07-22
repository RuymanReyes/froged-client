import { HttpClient } from 'typed-rest-client/HttpClient';
import { IHttpClientResponse } from 'typed-rest-client/Interfaces';
import { iOrigin } from './interfaces/origin.interface';

export class OriginsRoutes {

    public dev: boolean;
    public token: string;
    public slug: string;
    public apikey: string;

    getAll(): Promise<iOrigin[]> {
        let client: HttpClient = new HttpClient('');
        let headers: any = { token: this.token };
        if (this.apikey) 
            headers.apikey = this.apikey;
        return client.get(`https://${ this.dev? 'dev-' : '' }api.froged.com/ws/${ this.slug }/origins`, headers)
            .then((resp: IHttpClientResponse) => resp.readBody())
            .then((body: string) => {
                return JSON.parse(body).data;
              })
            .catch((err) => console.error("Error de petición"));
    }  
}