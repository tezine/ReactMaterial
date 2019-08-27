import axios from 'axios';
import {EPost} from "../entities/EPost";

export class PostsService{

    static async getAllPosts():Promise<EPost[]>{
        let response=await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        let posts=response.data;
        return posts;
    }

    static async getByID(id:number):Promise<EPost>{
        let response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let post=response.data;
        return post;
    }
}
