import React, {Component} from "react";
import { RouteComponentProps } from "react-router-dom";
import queryString from 'query-string'
import {PostsService} from "../services/PostsService";

export interface Page2Props{
    id?:number;
}

export interface Page2State {

}

export class Page2 extends Component<RouteComponentProps<{}> & Page2Props, Page2State> {
    constructor(props: RouteComponentProps<{}> & Page2Props) {
        super(props);

    }

    async componentDidMount() {
        const query:Page2Props = queryString.parse(this.props.location.search);
        console.log('id:', query.id);
        let posts=await PostsService.getAllPosts();
        for(let post of posts){
            console.log('post:',post.title);
        }
    }

    render(){
        return <div>ola</div>;
    }
}
