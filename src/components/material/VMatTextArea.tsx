import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";


export class MatTextAreaProps extends IItemProps{
    floatingLabelText?:string;
    placeHolderText?:string;
    text?:string;
    onTextChanged?:(txt:string)=>void;
}

@observer
export class VMatTextArea extends VItem<MatTextAreaProps> {

    @observable text=this.props.text;

    render() {
        return (
            <div className="form-group" style={this.getStyle()} id={this.props.id}>
                <div className="floating-label">
                    <label htmlFor="exampleFormControlTextarea1">{this.props.floatingLabelText}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={1} placeholder={this.props.placeHolderText} onChange={(e)=>this.onTextChanged(e)} value={this.text}/>
                </div>
            </div>
        );
    }

    componentDidMount(): void {
        super.componentDidMount();
        let x:any=$('.floating-label .custom-select, .floating-label .form-control');
        //todo x.floatinglabel();
    }

    onTextChanged(e:React.ChangeEvent<HTMLTextAreaElement>){
        this.text=e.target.value;
        if(this.props.onTextChanged) this.props.onTextChanged(this.text);
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
