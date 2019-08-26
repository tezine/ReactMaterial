import {IItemProps, VItem} from "../base/VItem";
import {CssHelper} from "../../codes/CssHelper";
import * as React from "react";

export class MatButtonProps extends IItemProps{
}

export class VMatButtonGroup extends VItem<MatButtonProps> {
    render() {
        return (
            <div className="btn-group" role="group" aria-label="button group">
                {this.props.children}
            </div>
        );
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
