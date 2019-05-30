const config = {

    apiUrl : process.env.REACT_APP_ENV === 'production' ? "https://devfriendapi.herokuapp.com/graphql" : "http://localhost:4000/graphql"
    
}

export default config;