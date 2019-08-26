import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";
import {MouseEvent } from 'react';
import {ColorType} from "../../enums/ColorType";

export class IMatButtonProps extends IItemProps{
    text:string='';
    colorType:ColorType=ColorType.Primary;
    rippleEnabled?:boolean=true;
    onClick?:(ev:React.MouseEvent<HTMLButtonElement>)=>void;
}

export class VMatButton extends VItem<IMatButtonProps> {
    render() {
        return <button id={this.props.id}  type="button" className={this.getClassName()} style={this.getStyle()} onClick={(e)=>this.onBtnClicked(e)}>{this.props.text}</button>;
    }

    protected onBtnClicked(ev:React.MouseEvent<HTMLButtonElement>){
        if(this.props.onClick)this.props.onClick(ev);
    }

    getClassName():string{
        let className='btn btn-'+this.props.colorType.toString().toLowerCase();
        return className;
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
