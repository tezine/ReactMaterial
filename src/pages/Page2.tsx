import React, {Component} from "react";
import { RouteComponentProps } from "react-router-dom";

export interface IBookingSiteOverviewProps{
    page2Prop?:string;
}

export interface IBookingSiteOverviewState {

}

export class Page2 extends React.Component<RouteComponentProps<{}> & IBookingSiteOverviewProps, IBookingSiteOverviewState> {
    constructor(props: RouteComponentProps<{}> & IBookingSiteOverviewProps) {
        super(props);
    }

    render(){
        return <div>ola</div>;
    }
}
