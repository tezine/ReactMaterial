import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";
import {observable} from "mobx";

export class IMatRadioButtonProps extends IItemProps {
    checked?:boolean;
    @observable text:string='';
}

export class VMatRadioButton extends VItem<IMatRadioButtonProps> {
    render() {
        return (
            <div className="custom-control custom-radio" style={this.getStyle()} id={this.props.id}>
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked={this.props.checked} onChange={this.onCheckedChanged}/>
                <label className="custom-control-label" htmlFor="customRadio1">{this.props.text}</label>
            </div>
        );
    }

    onCheckedChanged(e: React.ChangeEvent<HTMLInputElement>):void{//todo ver
        console.log("alterou o status do radio:"+ e.target.value);
        //this.props.text=e.target.value;
    }

    getStyle() {
        let style = super.getStyle();
        return style;
    }
}
