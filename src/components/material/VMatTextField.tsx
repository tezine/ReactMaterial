import {IItemProps, VItem} from "../VItem";
import * as React from "react";

export interface IMatTextFieldProps extends IItemProps {
    text:string;
    floatingLabelText?:string;
    placeHolderText?:string;
    type?:string;
    underText?:string;
    readonly?:boolean;
}

export class VMatTextField extends VItem<IMatTextFieldProps> {
    render() {
        let type=this.props.type?this.props.type:'text';
        let readOnly=this.props.readonly?this.props.readonly:false;
        return (
            <div className="form-group" style={this.getStyle()} id={this.props.id}>
                <div className="floating-label">
                    <label htmlFor="exampleFloatingLabel1">{this.props.floatingLabelText}</label>
                    <input aria-describedby="exampleFloatingLabel1Help" className="form-control" id="exampleFloatingLabel1" placeholder={this.props.placeHolderText}
                           type={type} onChange={(e)=>this.onInputChanged(e)} value={this.props.text} readOnly={readOnly}/>
                    <small id="exampleFloatingLabel1Help" className="form-text text-muted">{this.props.underText}</small>
                </div>
            </div>
        );
    }

    onInputChanged(e: React.ChangeEvent<HTMLInputElement>):void{//todo ver
        console.log("alterou o status do input:"+ e.target.value);
    }

    getStyle() {
        let style = super.getStyle();
        return style;
    }
}
