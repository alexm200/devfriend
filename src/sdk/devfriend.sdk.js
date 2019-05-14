
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

    createCard = (user_id, category, title, text, date_created) => {            
        return this.api.send({
            query: gql`
                    mutation createCard($card: CreateCardInput) {
                        createCard(card: $card) {
                            _id,
                            user_id,
                            category,
                            title,
                            text,
                            date_created
                        }
                    }`,
            variables: { 
                card: {                    
                    user_id         : user_id, 
                    category        : category,
                    title           : title,
                    text            : text,
                    date_created    : date_created
                } 
            }
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
                        user_id,
                        category,
    	                title,
    	                text,
                        date_created
                    }
                }`,
            variables: null
        });
    }

    deleteCard = (_id) => {
        return this.api.send({
            query: gql`
                    mutation deleteCard($id: String!) {
                        deleteCard(_id: $id) {
                            _id
                        }
                    }`,
            variables: { 
                id: _id
            }
        });
    }

    updateCard = (_id, card) => {
        return this.api.send({
            query: gql`
                    mutation updateCard($id: String!, $card: UpdateCardInput!) {
                        updateCard(_id: $id, card: $card) {
                            _id,
                            user_id,
                            category,
                            title,
                            text,
                            date_created
                        }
                    }`,
            variables: {
                id: _id,
                card: card 
            }
        });
    }    

}