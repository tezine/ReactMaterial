import {IItemProps, VItem} from "../base/VItem";
import {CssHelper} from "../../codes/CssHelper";
import * as React from "react";

export class CheckBoxProps extends IItemProps{
    text:string='';
    checked?:boolean=false;
}

export class VMatCheckBox extends VItem<CheckBoxProps> {
    render() {
        return (
            <div className="custom-control custom-checkbox" style={this.getStyle()} id={this.props.id}>
                <input type="checkbox" className="custom-control-input" id={this.props.id+ "customCheck1"} checked={this.props.checked} onChange={(ev:any)=>this.checkedChangedHandled(ev)}/>
                <label className={"custom-control-label"} htmlFor={this.props.id+ "customCheck1"}>{this.props.text}</label>
            </div>
        );
    }

    checkedChangedHandled(ev:any){

    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
