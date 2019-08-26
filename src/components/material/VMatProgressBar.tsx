import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";

export interface IProgressBarProps extends IItemProps{
}

export class VMatProgressBar extends VItem<IProgressBarProps> {
    render() {
        return (
            <div className="progress" id={this.props.id} style={this.getStyle()}>
                <div className="progress-bar progress-bar-indeterminate" role="progressbar"/>
            </div>
        );
    }

    getStyle(){
        let style=super.getStyle();

        return style;
    }
}
