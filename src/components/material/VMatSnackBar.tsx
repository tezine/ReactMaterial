import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";

export interface IMatSnackBarProps extends IItemProps{
    text?:string;
}

export class VMatSnackBar extends VItem<IMatSnackBarProps> {
    render() {
        return (
            <div className="snackbar">
                <div className="snackbar-body">
                    {this.props.text}
                </div>
            </div>
        );
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
