import {IItemProps, VItem} from "../VItem";
import * as React from "react";

export interface IMatSwitchProps extends IItemProps {
    checked?:boolean;
    text:string;
}

export class VMatSwitch extends VItem<IMatSwitchProps> {
    render() {
        return (
            <div className="custom-control custom-switch" id={this.props.id} style={this.getStyle()}>
                <input className="custom-control-input" id="customSwitch" type="checkbox" checked={this.props.checked} onChange={(e)=>this.onCheckedChanged(e)}/>
                <span className="custom-control-track"></span>
                <label className="custom-control-label" htmlFor="customSwitch">{this.props.text}</label>
            </div>
        );
    }

    onCheckedChanged(e: React.ChangeEvent<HTMLInputElement>):void{//todo ver
        console.log("alterou o status do check:"+ e.target.value);
    }

    getStyle() {
        let style = super.getStyle();
        return style;
    }
}
