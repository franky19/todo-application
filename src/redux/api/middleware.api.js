import axios from "axios";

export const API=axios.create({
    baseURL:'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list',
    responseType:"json"
});

export const apiMiddleware = store => next=> action =>{
    API.interceptors.request.use(
        config=>{
            //do something before request is sent (example check access token on localStorage)
            return config;
        },
        error=>{
            //do something with request error
            return Promise.reject(error)
        }
    );
    
    //add a response interceptor
    API.interceptors.response.use(
        response=>{
            //any status code  that lie within the range of 2xx cause this function to trigger
            //do something with response data
            return response;
        },
        error=>{
            //any status codes that falls outside the range of 2xx this function trigger
            //do something with request error
            return Promise.reject(error)
        }
    );
    //call the next action
    next(action);
};

