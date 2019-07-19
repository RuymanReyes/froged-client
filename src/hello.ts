import { HttpClient } from 'typed-rest-client/HttpClient';
import { IHeaders, IHttpClientResponse } from 'typed-rest-client/Interfaces';

export function hello() {
    let client: HttpClient = new HttpClient('');
    return client.get("https://dev-api.froged.com")
      .then((resp: IHttpClientResponse) => resp.readBody())
      .then((body: string) => {
          console.log( body )
        })
      .catch((err) => console.log({ err }));
  }
export function hello2() {
    let headers: IHeaders = { 'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1eW1hbkBmcm9nZWQuY29tIiwiaWF0IjoxNTYzNDM0NjA5fQ.OU6NmzltLKuFvKpYj_b17SOjKN-Rm9ChiPxALoVpb40' };
    let client: HttpClient = new HttpClient('');
    return client.get("https://dev-api.froged.com/private/apps", headers)
      .then((resp: IHttpClientResponse) => resp.readBody())
      .then((body: string) => {
          console.log( JSON.parse(body) )
        })
      .catch((err) => console.log({ err }));
  }
