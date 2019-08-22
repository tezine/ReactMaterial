import {IItemProps, VItem} from "../VItem";
import * as React from "react";

export interface IMatTextAreaProps extends IItemProps{
    floatingLabelText?:string;
    placeHolderText?:string;
    text?:string;
}

export class VMatTextArea extends VItem<IMatTextAreaProps> {
    render() {
        return (
            <div className="form-group" style={this.getStyle()} id={this.props.id}>
                <div className="floating-label">
                    <label htmlFor="exampleFormControlTextarea1">{this.props.floatingLabelText}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={1} placeholder={this.props.placeHolderText} onChange={(e)=>this.onTextChanged(e)} value={this.props.text}/>
                </div>
            </div>
        );
    }

    onTextChanged(e:any){

    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
