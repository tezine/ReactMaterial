import {IItemProps, VItem} from "./VItem";
import {CssHelper} from "../../codes/CssHelper";
import * as React from "react";

export class ColumnLayoutProps extends IItemProps{
}

export class VColumnLayout extends VItem<ColumnLayoutProps> {
    render() {
        return <div id={this.props.id} style={this.getStyle()}>{this.props.children}</div>
    }

    getStyle(){
        let style=super.getStyle();
        this.updateStyle(CssHelper.Display,'flex');
        this.updateStyle(CssHelper.FlexDirection,'column');
        this.updateStyle(CssHelper.AlignItems,this.props.verticalAlignItems);
        return style;
    }
}
