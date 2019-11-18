import { apolloFetch } from './index'

export async function signupPatient(name, email, password, birthday) {

  const query = `
      mutation createPatientToken ($email: String!, $password: String!, $name: String!, $birthday: String!) {
        signupPatient (
          name: $name
          email: $email
          password: $password
          birthday: $birthday
        ) {
          token
        }
      }
    `;

  const variables = {
    name, name,
    email: email,
    password: password,
    birthday: birthday,
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