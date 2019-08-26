import {IItemProps, VItem} from "./VItem";
import * as React from "react";
import {CssHelper} from "../../codes/CssHelper";

export interface ICircleProps extends IItemProps{
}

export class VCircle extends VItem<ICircleProps> {
    render() {
        return <span style={this.getStyle()} id={this.props.id}>{this.props.children}</span>;
    }

    getStyle(){
        let style=super.getStyle();
        this.updateStyle(CssHelper.Display,'inline-block');
        this.updateStyle(CssHelper.BorderRadius,'50%');
        if(this.props.width) this.updateStyle(CssHelper.Height,this.props.width);
        else if(this.props.height)this.updateStyle(CssHelper.Width,this.props.height);
        if(!this.props.width && !this.props.height)console.error('you must define width or height for the circle '+this.props.id);
        return style;
    }
}
