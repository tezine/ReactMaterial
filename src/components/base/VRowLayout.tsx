import {IItemProps, VItem} from "./VItem";
import * as React from "react";
import {CssHelper} from "../../codes/CssHelper";

export class RowLayoutProps extends IItemProps{
}

export class VRowLayout extends VItem<RowLayoutProps> {
    render() {
        return <div id={this.props.id} style={this.getStyle()}>{this.props.children}</div>
    }

    getStyle(){
        let style=super.getStyle();
        this.updateStyle(CssHelper.Display,'flex');
        this.updateStyle(CssHelper.FlexDirection,'row');
        this.updateStyle(CssHelper.JustifyContent,this.props.horizontalAlignItems);
        return style;
    }
}
