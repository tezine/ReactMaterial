import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";
import {ColorType} from "../../enums/ColorType";

export class MatButtonProps extends IItemProps{
    text:string='';
    colorType?:ColorType=ColorType.Primary;
    rippleEnabled?:boolean=true;
    onClick?:(ev:React.MouseEvent<HTMLButtonElement>)=>void;
}

export class VMatButton extends VItem<MatButtonProps> {
    render() {
        return <button id={this.props.id}  type="button" className={this.getClassName()} style={this.getStyle()} onClick={(e)=>this.onBtnClicked(e)}>{this.props.text}</button>;
    }

    protected onBtnClicked(ev:React.MouseEvent<HTMLButtonElement>){
        if(this.props.onClick)this.props.onClick(ev);
    }

    getClassName():string{
        let colorType=this.props.colorType?this.props.colorType:ColorType.Primary;
        let className='btn btn-'+colorType.toString().toLowerCase();
        return className;
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
