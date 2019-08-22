import {IItemProps, VItem} from "../VItem";
import * as React from "react";
import {ColorType} from "../../enums/ColorType";

export interface IMatButtonProps extends IItemProps{
    text:string;
    colorType:ColorType;
    rippleEnabled?:boolean;
}

export class VMatButton extends VItem<IMatButtonProps> {
    render() {
        return <button type="button" className={this.getClassName()} style={this.getStyle()}>{this.props.text}</button>;
    }

    protected  setColorType(colorType:ColorType):void{
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
