import {IItemProps, VItem} from "../VItem";
import * as React from "react";
import {CssHelper} from "../../codes/CssHelper";

export interface IMatCardProps extends IItemProps {
    title?: string;
    subTitle?: string;
}

export class VMatCard extends VItem<IMatCardProps> {
    render() {
        let title = null;
        let subTitle=null;
        if (this.props.title) title = <h5 className="card-title">{this.props.title}</h5>;
        if(this.props.subTitle)subTitle= <h6 className="card-subtitle mb-2 text-muted">{this.props.subTitle}</h6>;
        return (
            <div className='card' style={this.getStyle()}>
                <div className="card-body">
                    {title}
                    {subTitle}
                    {this.props.children}
                </div>
            </div>);
    }

    getStyle() {
        let style = super.getStyle();
        if(!this.props.width) this.updateStyle(CssHelper.Width,"100%");
        return style;
    }
}
