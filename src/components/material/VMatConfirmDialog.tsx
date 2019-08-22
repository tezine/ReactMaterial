import {IItemProps, VItem} from "../VItem";
import * as React from "react";

export interface IMatConfirmDialog extends IItemProps{
    title:string;
    cancelText:string;
    confirmText:string;
}

export class VMatConfirmDialog extends VItem<IMatConfirmDialog> {
    render() {
        return (
            <div className="modal fade" id="@ID" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p className="text-black-secondary typography-subheading">{this.props.title}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-info" data-dismiss="modal" type="button">{this.props.cancelText}</button>
                            <button className="btn btn-outline-info" type="button" onClick="@OnConfirmClicked" data-dismiss="modal">@ConfirmText</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
