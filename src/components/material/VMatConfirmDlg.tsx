import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";

export interface IMatConfirmDialog extends IItemProps{
    title:string;
    cancelText:string;
    confirmText:string;
}

export class VMatConfirmDlg extends VItem<IMatConfirmDialog> {
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p className="text-black-secondary typography-subheading">{this.props.title}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-info" data-dismiss="modal" type="button">{this.props.cancelText}</button>
                            <button className="btn btn-outline-info" type="button" onClick={()=>this.onBtnConfirmClicked()} data-dismiss="modal">{this.props.confirmText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onBtnConfirmClicked(){

    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
