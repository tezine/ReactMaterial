import {IItemProps, VItem} from "./VItem";
import * as React from "react";
import {CssHelper} from "../../codes/CssHelper";

export interface IGridLayoutProps extends IItemProps{
     rows?:string;
     columns?:string;
     gridAutoFlow?:string;// = "row";//significa que vai colocar os itens em cada coluna. Qdo acabar as colunas, coloca na linha de baixo.
     columnGap?:string;//espaçamento entre colunas.
     rowGap?:string;//espaçamento entre linhas
}

export class VGridLayout extends VItem<IGridLayoutProps> {
    render() {
        return <div style={this.getStyle()}>{this.props.children}</div>;
    }

    getStyle(){
        let style=super.getStyle();
        this.updateStyle(CssHelper.Display,'grid');
        if(this.props.gridAutoFlow)this.updateStyle(CssHelper.GridAutoFlow,this.props.gridAutoFlow);
        else this.updateStyle(CssHelper.GridAutoFlow,'row');
        if(this.props.columnGap)this.updateStyle(CssHelper.GridColumnGap,this.props.columnGap);
        if(this.props.rowGap)this.updateStyle(CssHelper.GridRowGap,this.props.rowGap);
        if(!this.props.width)this.updateStyle(CssHelper.Width,'100%');
        if(this.props.columns)this.updateStyle(CssHelper.GridTemplateColumns,this.props.columns);
        if(this.props.rows)this.updateStyle(CssHelper.GridTemplateRows,this.props.rows);
        return style;
    }
}
