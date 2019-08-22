import {IItemProps, VItem} from "./VItem";
import * as React from "react";
import {CssHelper} from "../codes/CssHelper";

export interface ILabelProps extends IItemProps{
     fontStyle?:string;
     fontFamily?:string;
     fontSize?:string;
     text:string;
     color?:string;
}

export class VLabel extends VItem<ILabelProps> {
    render() {
        return (
            <span style={this.getStyle()} id={this.props.id}>{this.props.text}</span>
        );
    }

    getStyle(){
        let style=super.getStyle();
        if(this.props.fontStyle)this.updateStyle(CssHelper.FontStyle,this.props.fontStyle);
        if(this.props.fontFamily)this.updateStyle(CssHelper.FontFamily,this.props.fontFamily);
        if(this.props.fontSize)this.updateStyle(CssHelper.FontSize,this.props.fontSize);
        if(this.props.color)this.updateStyle(CssHelper.Color,this.props.color);
        return style;
    }
}
