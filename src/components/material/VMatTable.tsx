import {IItemProps, VItem} from "../base/VItem";
import * as React from "react";
import {ETableColumn} from "../../entities/ETableColumn";
import {TableColumnType} from "../../enums/TableColumnType";
import {observer} from "mobx-react";
import {observable} from "mobx";

export class MatTableProps extends IItemProps{
    columns:ETableColumn[]=[];
    rows:any[]=[];
    count?:number;
    rowsPerPage:number=50;
    bordered?:boolean=false;
    displayInCard?:boolean=true;
    parentDivClass?:string='';
    tableClass?:string;
}


export class VMatTable extends VItem<MatTableProps> {

    tableClass=this.props.tableClass?this.props.tableClass:'table table-hover table-sm mb-0';

    render() {
        //console.log('rendereizando: ',this.props.rows.length);
        return (
            <div
                className={this.props.parentDivClass}
                id={this.props.id}
                >
                <table className={this.tableClass}>
                    <thead>
                    <tr>
                        {this.renderHeaderColumns()}
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderBody()}
                </tbody>
                </table>
            </div>
        );
    }

    renderHeaderColumns(){
        let result:any[]=[];
        let i=0;
        for(let eTableColumn of this.props.columns){
            switch (eTableColumn.type) {
                case TableColumnType.MaterialIconButton:
                    result.push(<th scope="col" style={{width:"20px"}} key={i}/>);
                    break;
                case TableColumnType.Text:
                    result.push(<th scope="col" key={i}>{eTableColumn.name}</th>);
                    break;
            }
            i++;
        }
        return result;
    }

    renderBody(){
        let result:any[]=[];
        let i=0;
        for(let row of this.props.rows) {
            result.push(<tr key={i}>{this.renderBodyColumns(row)}</tr>);
            i++;
        }
        return result;
    }

    renderBodyColumns(row:any){
        let result:any[]=[];
        let i=0;
        for(let col of this.props.columns) {
            result.push(this.renderBodyCell(col,i, row));
        }
        return result;
    }

    renderBodyCell(col:ETableColumn, colNumber:number, row:any){
        if(col.type==TableColumnType.Text){
            let cell = this.getCellValue(row, colNumber);
            if (cell != null) {
                return (<td>{cell}</td>);
            }
        }else if(col.type==TableColumnType.MaterialIconButton){
            return (<td style={{cursor: 'pointer'}} onClick={()=>this.onMaterialIconClicked(colNumber,row)}><i className="material-icons">col.name</i></td>);
        }
    }

    private getCellValue(myObject:any, column:number):string {
        if (myObject == null) return "";
        let eTableColumn:ETableColumn = this.props.columns[column];
        let propertyName = eTableColumn.bindTo;
        let result=myObject[eTableColumn.bindTo];
        return result;
        //return myObject[propertyName];
        //let result=myObject.GetType().GetProperty(propertyName).GetValue(myObject, null);
        // if (result == null) return "";
        // if (string.IsNullOrEmpty(eTableColumn.DateFormat)) return result.ToString();
        // else {
        // if(result!=null&&DateTime.TryParse(result.ToString(), out DateTime dt))return dt.ToString(eTableColumn.DateFormat);
        // }
}

    onMaterialIconClicked(col:number, obj:any){
        console.log('clicou no material icon');
    }

    getStyle(){
        let style=super.getStyle();
        return style;
    }
}
