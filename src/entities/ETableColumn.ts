import {TableColumnType} from "../enums/TableColumnType";

export class ETableColumn{
    type:TableColumnType=TableColumnType.Text;
    name:string='';
    bindTo:string='';
    dateFormat:string='';
    onClick?:(ev:any)=>void;
}
