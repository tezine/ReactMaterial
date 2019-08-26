import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";
import {observable} from "mobx";

export class IMatRadioButtonProps extends IItemProps {
    checked?:boolean=false;
    text:string='';
    onCheckChanged?:(checked:boolean)=>void;
}

export class VMatRadioButton extends VItem<IMatRadioButtonProps> {

    @observable checked:boolean=this.props.checked?this.props.checked:false;

    render() {
        return (
            <div className="custom-control custom-radio" style={this.getStyle()} id={this.props.id}>
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked={this.props.checked} onChange={(ev)=>this.onCheckedChanged(ev)}/>
                <label className="custom-control-label" htmlFor="customRadio1">{this.props.text}</label>
            </div>
        );
    }

    onCheckedChanged(e: React.ChangeEvent<HTMLInputElement>):void{//todo ver
        this.checked=!this.checked;
        if(this.props.onCheckChanged) this.props.onCheckChanged(this.checked);
    }

    getStyle() {
        let style = super.getStyle();
        return style;
    }
}
