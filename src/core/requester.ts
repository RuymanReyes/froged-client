import * as request from "request";

export class Requester
  {
    makeGetRequest(url: string, opt: request.CoreOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            return request.get(url, opt, (error: any, response: request.Response) => {
                if (error || !response.body.data) {
                    reject();
                    return;
                  }
                resolve(response.body.data);
              });
          });
      }
    makePostRequest(url: string, opt: request.CoreOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            return request.post(url, opt, (error: any, response: request.Response) => {
                if (error || !response.body.data) {
                    reject();
                    return;
                  }
                resolve(response.body.data);
              });
          });
      }
    makePutRequest(url: string, opt: request.CoreOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            return request.put(url, opt, (error: any, response: request.Response) => {
                if (error || !response.body.data) {
                    reject();
                    return;
                  }
                resolve(response.body.data);
              });
          });
      }
    makePatchRequest(url: string, opt: request.CoreOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            return request.patch(url, opt, (error: any, response: request.Response) => {
                if (error || !response.body.data) {
                    reject();
                    return;
                  }
                resolve(response.body.data);
              });
          });
      }
    makeDeleteRequest(url: string, opt: request.CoreOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            return request.delete(url, opt, (error: any, response: request.Response) => {
                if (error || !response.body.data) {
                    reject();
                    return;
                  }
                resolve(response.body.data);
              });
          });
      }
  }