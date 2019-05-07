import gql from "graphql-tag";

export const gql_user = {
    getUsers: () => ({ 
        query: gql`
            query {
                users {
                    username
                }
            }`,
        variables: null
    }),
    getUser: (username, password) => ({ 
        query: gql`
            query {
                user (username: "${username}", password: "${password}") {
                    _id
                }
            }`,
        variables: null
    }),    
    createUser: (username, password) => ({
        query: gql`
            mutation createUser($user: CreateUserInput) {
                createUser(user: $user) {
                    _id
                }
            }`,
        variables: { 
            user: { 
                username: username, 
                password: password 
            } 
        }
    })
}

