const config = {

    apiUrl : process.env.REACT_APP_ENV === 'production' ? "http://devfriendapi.herokuapp.com/graphql" : "http://localhost:4000/graphql"
    
}

export default config;