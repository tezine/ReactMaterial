import {IItemProps, VItem} from "../VItem";
import {CssHelper} from "../../codes/CssHelper";
import * as React from "react";
import {EToolbarItem} from "../../entities/EToolbarItem";

export class IMatToolBarProps extends IItemProps{
    title?:string;
    items:EToolbarItem[]=[];
}

export class VMatToolBar extends VItem<IMatToolBarProps> {
    render() {
        return (
            <nav className="navbar navbar-dark" style={this.getStyle()}>
                <div className="form-inline">
                    {this.renderItems()}
            </div>
            <a className="navbar-brand" href="#">{this.props.title}</a>
            </nav>
        );
    }

    renderItems(){
        let result=[];
        let i=0;
        for(let item of this.props.items){
            result.push(<button className="btn btn-outline-secondary" style={{color:'white'}} onClick={(e)=>this.onItemClicked(e)} key={i}>
                {item.iconName?<i className="material-icons" style={{marginRight: '5px'}}>item.iconName</i>:null}
                {item.text}
            </button>);
            i++;
        }
        return result;
    }

    onItemClicked(toolbarItem:any):void{

    }

    getStyle(){
        let style=super.getStyle();
        this.updateStyle(CssHelper.BackgroundColor,'#37474F');
        return style;
    }
}
