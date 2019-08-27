import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";
import {ColorType} from "../../enums/ColorType";
import {observable} from "mobx";
import {observer} from "mobx-react";

export class MatAlertProps extends IItemProps{
    colorType:ColorType=ColorType.Danger;
}

@observer
export class VMatAlert extends VItem<MatAlertProps> {

    @observable visible:boolean=false;
    @observable text='';

    render() {
        let alertClass="alert alert-" + this.props.colorType.toString().toLowerCase() + " alert-dismissible fade show";
        if(this.visible)
        return (
            <div className={alertClass} role="alert">
                {this.text}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>this.onBtnCloseClicked()}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
        else return null;
    }

    onBtnCloseClicked():void{
        this.visible=false;
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
