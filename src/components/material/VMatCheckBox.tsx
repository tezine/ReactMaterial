import {IItemProps, VItem} from "../base/VItem";
import {CssHelper} from "../../codes/CssHelper";
import * as React from "react";
import {observable} from "mobx";

export class CheckBoxProps extends IItemProps{
    text:string='';
    checked?:boolean=false;
    onCheckChanged?:(checked:boolean)=>void;
}

export class VMatCheckBox extends VItem<CheckBoxProps> {

    @observable checked:boolean=this.props.checked?this.props.checked:false;

    render() {
        return (
            <div className="custom-control custom-checkbox" style={this.getStyle()} id={this.props.id}>
                <input type="checkbox" className="custom-control-input" id={this.props.id+ "customCheck1"} checked={this.props.checked} onChange={(ev:any)=>this.onCheckedChangedHandled(ev)}/>
                <label className={"custom-control-label"} htmlFor={this.props.id+ "customCheck1"}>{this.props.text}</label>
            </div>
        );
    }

    onCheckedChangedHandled(ev:any){
        this.checked=!this.checked;
        if(this.props.onCheckChanged) this.props.onCheckChanged(this.checked);
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
