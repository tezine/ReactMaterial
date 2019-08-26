import * as React from "react";
import {VItem, IItemProps} from "./VItem";
import {BorderStyle} from "../../enums/BorderStyle";
import {CssHelper} from "../../codes/CssHelper";

export interface IRectangleProps extends IItemProps {
    borderStyle?: BorderStyle;
    borderColor?: string;
    borderRadius?: string;
    borderWidth?: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class VRectangle extends VItem<IRectangleProps> {
    render() {
        return <div
            style={this.getStyle()}
            onClick={() => this.onRectClicked()}>
            {this.props.children}
        </div>;
    }

    onRectClicked(): void {
        console.log('rect clicked');
    }

    getStyle() {
        let style = super.getStyle();
        if (this.props.borderStyle) this.updateStyle(CssHelper.BorderStyle, this.props.borderStyle);
        if (this.props.borderColor) this.updateStyle(CssHelper.BorderColor, this.props.borderColor);
        if (this.props.borderWidth) this.updateStyle(CssHelper.BorderWidth, this.props.borderWidth);
        if (this.props.borderRadius) this.updateStyle(CssHelper.BorderRadius, this.props.borderRadius);
        return style;
    }
}
