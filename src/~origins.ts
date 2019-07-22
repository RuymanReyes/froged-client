import * as request from "request";
import { Requester } from "./core/requester";
import { iOrigin } from './interfaces/origin.interface';

export class OriginsRoutes extends Requester {

    public dev: boolean;
    public token: string;
    public slug: string;
    public apikey: string;

    getAll(): Promise<{ origins: iOrigin[] }> {
        let headers: any = { token: this.token };
        let url: string = `https://${ this.dev? 'dev-' : '' }api.froged.com/ws/${ this.slug }/origins`;
        if (this.apikey) 
            headers.apikey = this.apikey;
        let opt: request.CoreOptions = { headers, json: true }
        return this.makeGetRequest(url, opt);
    } 
    getOne_byId(idOrigin: string): Promise<{ origins: iOrigin[] }> {
        let headers: any = { token: this.token };
        let url: string = `https://${ this.dev? 'dev-' : '' }api.froged.com/ws/${ this.slug }/origins/${ idOrigin }`;
        if (this.apikey) 
            headers.apikey = this.apikey;
        let opt: request.CoreOptions = { headers, json: true }
        return this.makeGetRequest(url, opt);
    } 
    create(origin: iOrigin): Promise<{ origin: iOrigin }> {
        let headers: any = { token: this.token };
        let body: any = { origin };
        let url: string = `https://${ this.dev? 'dev-' : '' }api.froged.com/ws/${ this.slug }/origins`;
        if (this.apikey) 
            headers.apikey = this.apikey;
        let opt: request.CoreOptions = { body, headers, json: true }
        return this.makePostRequest(url, opt);
    } 
    updateOne_byId(origin: iOrigin): Promise<{ origin: iOrigin }> {
        let headers: any = { token: this.token };
        let body: any = { origin };
        let url: string = `https://${ this.dev? 'dev-' : '' }api.froged.com/ws/${ this.slug }/origins/${ origin.id }`;
        if (this.apikey) 
            headers.apikey = this.apikey;
        let opt: request.CoreOptions = { body, headers, json: true }
        return this.makePutRequest(url, opt);
    } 
    deleteOne_byId(idOrigin: string): Promise<{ origins: iOrigin[] }> {
        let headers: any = { token: this.token };
        let url: string = `https://${ this.dev? 'dev-' : '' }api.froged.com/ws/${ this.slug }/origins/${ idOrigin }`;
        if (this.apikey) 
            headers.apikey = this.apikey;
        let opt: request.CoreOptions = { headers, json: true }
        return this.makeDeleteRequest(url, opt);
    } 
}