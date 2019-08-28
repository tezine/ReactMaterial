import React, {Component} from "react";
import {RouteComponentProps} from "react-router-dom";
import queryString from 'query-string'
import {PostsService} from "../services/PostsService";
import {VMatTable} from "../components/material/VMatTable";
import {EPost} from "../entities/EPost";
import {ETableColumn} from "../entities/ETableColumn";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {TableColumnType} from "../enums/TableColumnType";

export interface Page2Props{
    id?:number;
}

export interface Page2State {

}

@observer
export class Page2 extends Component<RouteComponentProps<{}> & Page2Props, Page2State> {

    @observable posts:EPost[]=[];

    constructor(props: RouteComponentProps<{}> & Page2Props) {
        super(props);
    }

    async componentDidMount() {
        const query:Page2Props = queryString.parse(this.props.location.search);
        console.log('id:', query.id);
        this.posts=await PostsService.getAllPosts();
        console.log('recebeu posts');
        for(let post of this.posts){
            //console.log('post:',post.title);
        }
    }

    render(){
        let columns:ETableColumn[]=[
            this.addTableColumn('Title', 'title',TableColumnType.Text)
        ];
        console.log('rendereizando tabela', this.posts.length);
        return <VMatTable
            columns={columns}
            rows={this.posts}
            rowsPerPage={5}
            bordered={false}
            displayInCard={true}     />
    }

    private addTableColumn(name:string, bindTo:string, type:TableColumnType):ETableColumn{
        let eTableColumn=new ETableColumn();
        eTableColumn.name=name;
        eTableColumn.bindTo=bindTo;
        eTableColumn.type=TableColumnType.Text;
        return eTableColumn;
    }
}
