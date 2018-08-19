import gql from 'graphql-tag';

export const GET_POSTS = gql`
{
  posts {
    id
    title
    content
    person {
      id
      firstName
      lastName
      email
    }
  }
}
`;

export const GET_PERSON = gql`
{
  people {
    id
    email
    firstName
    lastName
  }
}
`

export const ADD_PERSON = gql`
mutation($firstName: String!, $lastName: String!, $email: String!) {
  addPerson(firstName: $firstName, lastName: $lastName, email: $email ) {
    id
    firstName
    lastName
    email
    posts {
      id
      title
      content
    }
  }
}
`

export const DELETE_PERSON = gql`
mutation($email: String!) {
deletePerson(email: $email ) {
    id
    firstName
    lastName
    email
  }
}
`

export const UPDATE_PERSON = gql`
mutation($email: String!,$firstName:String!,$lastName:String!) {
updatePerson(email: $email,firstName:$firstName,lastName:$lastName ) {
    id
    email
    firstName
    lastName
  }
}
`