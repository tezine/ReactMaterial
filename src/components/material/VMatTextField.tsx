import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";

export class IMatTextFieldProps extends IItemProps {
    text:string='';
    floatingLabelText?:string;
    placeHolderText?:string;
    type?:string='text';
    underText?:string;
    readonly?:boolean=false;
}

@observer
export class VMatTextField extends VItem<IMatTextFieldProps> {

    @observable text=this.props.text;

    render() {
        return (
            <div className="form-group" style={this.getStyle()} id={this.props.id}>
                <div className="floating-label">
                    <label htmlFor="exampleFloatingLabel1">{this.props.floatingLabelText}</label>
                    <input aria-describedby="exampleFloatingLabel1Help" className="form-control" id="exampleFloatingLabel1" placeholder={this.props.placeHolderText}
                           type={this.props.type} onChange={(e)=>this.onInputChanged(e)} value={this.text} readOnly={this.props.readonly}/>
                    <small id="exampleFloatingLabel1Help" className="form-text text-muted">{this.props.underText}</small>
                </div>
            </div>
        );
    }

    onInputChanged(e: React.ChangeEvent<HTMLInputElement>):void{
        this.text=e.target.value;
        //console.log('texto:',e.target.value);
    }

    getStyle() {
        let style = super.getStyle();
        return style;
    }
}
