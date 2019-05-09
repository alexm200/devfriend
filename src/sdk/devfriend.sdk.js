
import axios from 'axios';
import gql from "graphql-tag";

class APICall {

    constructor(url){
        this.url = url;
    }

    send(data = {}) {
        
        return axios({ 
            method: "POST",
            url: this.url,
            data: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => { 
            if (response.status >= 400) { // check for 4XX, 5XX, wtv
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                });
            }
            if (response.status >= 200 && response.status <= 202) {          
                return response.data.data;
            }
            return {};            
        })
        .catch((error)=>{            
            return Promise.reject({
                error: error                
            });                        
        });
    
    }
}

export default class DevFriendSdk {
    
    constructor(options) {
        this.options = options;
        this.api = new APICall(
            options.apiUrl
        );
    }    
 
    getUserByUsername = (username) => {
        return this.api.send({
            query: gql`
                    query {
                        userByUsername (username: "${username}") {
                            _id
                        }
                    }`,
            variables: null
        });
    }

    createUser = (username, password) => {
        return this.api.send({
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
        });
    }

    getUser = (username, password) => { 
        return this.api.send({ 
            query: gql`
                query {
                    user (username: "${username}", password: "${password}") {
                        _id
                    }
                }`,
            variables: null
        });
    }

    getCards = (user_id, category) => { 
        return this.api.send({
            query: gql`
                query{
                    cardsByCategory(
                        user_id : "${user_id}",
                        category: "${category}"
                    ) {    	
    	                _id,    	
    	                title,
    	                text
                    }
                }`,
            variables: null
        });
    }     

}