import * as React from "react";
import {CssHelper} from "../codes/CssHelper";

export class IItemProps {
    id?:string;
    width?: string;
    height?: string;
    backgroundColor?:string;
    gridLayoutColumnStart?:string;//comeca com coluna 1
    gridLayoutColumnEnd?:string;
    paddingTop?:string;
    paddingLeft?:string;
    paddingRight?:string;
    centerHorizontally?:boolean;
}

// State is never set so we use the '{}' type.
export class VItem<P> extends React.Component<P & IItemProps> {

    style:any;

    constructor(props:any){
        super(props);
        this.style={};
    }

    componentDidMount(): void {
    }

    protected updateStyle(key:string, value?:any):void{
        if(!value)return;
        this.style[key]=value;
    }


    getStyle(){
        //let style:any={};
        if(this.props.id) console.log('retornando o style do ',this.props.id, this.style);
        if(this.props.width) this.updateStyle(CssHelper.Width,this.props.width);
        if(this.props.height) this.updateStyle(CssHelper.Height,this.props.height);
        if(this.props.gridLayoutColumnStart)this.updateStyle(CssHelper.GridColumnStart,this.props.gridLayoutColumnStart);
        if(this.props.gridLayoutColumnEnd)this.updateStyle(CssHelper.GridColumnEnd,this.props.gridLayoutColumnEnd);
        if(this.props.backgroundColor)this.updateStyle(CssHelper.BackgroundColor,this.props.backgroundColor);
        if(this.props.paddingTop)this.updateStyle(CssHelper.PaddingTop,this.props.paddingTop);
        if(this.props.paddingLeft)this.updateStyle(CssHelper.PaddingLeft,this.props.paddingLeft);
        if(this.props.paddingRight)this.updateStyle(CssHelper.PaddingRight,this.props.paddingRight);
        if(this.props.centerHorizontally)this.updateStyle(CssHelper.Margin,'auto');
        return this.style;
    }
}
