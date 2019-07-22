import { FrogedClient, iOrigin } from './src';

let frogedClient: FrogedClient = new FrogedClient(true);

frogedClient.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1eW1hbkBmcm9nZWQuY29tIiwiaWF0IjoxNTYzNDM0NjA5fQ.OU6NmzltLKuFvKpYj_b17SOjKN-Rm9ChiPxALoVpb40");
frogedClient.setSlug("3GWhIy");

// frogedClient.public.login("aromero86@contablio.com", "Ejemplo123");


frogedClient.origins.getAll().then((data: { origins: iOrigin[] }) => {
    console.log(data);
  }); 

// let MiOrigen = { origin: "MiOrigen" }
// frogedClient.origins.create(MiOrigen)
//   .then((data: { origin: iOrigin }) => {
//       if (data)
//           console.log({ originCreado: data.origin })
//       else
//           console.log("ERROR")
//     });


  // EJEMPLO DE USABILIDAD
  // let frogedClient: FrogedClient = new FrogedClient();
  // frogedClient.private.login("aromero86", "Ejemplo123")
  //   .then((token: string) => frogedClient.setToken(token))
  //   .then(() => frogedClient.apps.getAll())
  //   .then((apps: iApp[]) => frogedClient.setSlug(apps[0].slug))
  //   .then(() => frogedClient.contacts.getAll())
  //   .then((contacts: iContact[]) => {
  //   })