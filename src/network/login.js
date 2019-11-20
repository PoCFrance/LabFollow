import { apolloFetch } from './index'

export async function loginPatient(email, password) {

  const query = `
      mutation getPatientToken ($email: String!, $password: String!) {
        loginPatient (
          email: $email
          password: $password
        ) {
          token
        }
      }
    `;

  const variables = {
    email: email,
    password: password,
  };

  return apolloFetch({ query, variables })
    .then(res => {
      return (res);
    })
    .catch(err => {
      console.log(err)
      return (err)
    })
}