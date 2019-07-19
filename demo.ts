import { FrogedClient } from './src';

let frogedClient: FrogedClient = new FrogedClient(true);

frogedClient.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1eW1hbkBmcm9nZWQuY29tIiwiaWF0IjoxNTYzNDM0NjA5fQ.OU6NmzltLKuFvKpYj_b17SOjKN-Rm9ChiPxALoVpb40");
frogedClient.setSlug("3GWhIy");

frogedClient.origins.getAll().then(a => console.log({ a }));
