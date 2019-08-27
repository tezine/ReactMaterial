import React from "react";
import {VGridLayout} from "../components/base/VGridLayout";
import {VRectangle} from "../components/base/VRectangle";
import {VMatToolBar} from "../components/material/VMatToolBar";
import {VMatProgressBar} from "../components/material/VMatProgressBar";
import {VMatCard} from "../components/material/VMatCard";
import {VMatButton} from "../components/material/VMatButton";
import {ColorType} from "../enums/ColorType";
import {VMatTextField} from "../components/material/VMatTextField";
import {VCircle} from "../components/base/VCircle";
import {VMatTextArea} from "../components/material/VMatTextArea";
import {VRowLayout} from "../components/base/VRowLayout";
import {HorizontalAlignItems} from "../enums/HorizontalAlignItems";
import {VLabel} from "../components/base/VLabel";
import {VColumnLayout} from "../components/base/VColumnLayout";
import {VMatCheckBox} from "../components/material/VMatCheckBox";
import {VMatRadioButton} from "../components/material/VMatRadioButton";
import {VMatSwitch} from "../components/material/VMatSwitch";
import {VMatButtonGroup} from "../components/material/VMatButtonGroup";
import {BorderStyle} from "../enums/BorderStyle";
import {VMatSnackBar} from "../components/material/VMatSnackBar";
import {VMatConfirmDlg} from "../components/material/VMatConfirmDlg";
import {EToolbarItem} from "../entities/EToolbarItem";
import {RouteComponentProps} from "react-router";
import {VMatAlert} from "../components/material/VMatAlert";

export interface IHomeProps{
    homeProp?:string;
}

export interface IHomeState {

}

export class Home extends React.Component<RouteComponentProps<{}> & IHomeProps, IHomeState> {

    checkBoxRef = React.createRef<VMatCheckBox>();
    alertRef=React.createRef<VMatAlert>();

    constructor(props: RouteComponentProps<{}> & IHomeProps) {
        super(props);
    }

    render(){
        let eToolBarItemA = new EToolbarItem();
        eToolBarItemA.text = 'Save';
        return <div className="App">
            <VGridLayout
                id="gridLayout"
                columns="auto auto"
                columnGap="10px"
                backgroundColor="brown"
            >
                <VRectangle
                    backgroundColor='gray'
                >
                    <VMatToolBar
                        items={[eToolBarItemA]}
                        onClick={(e)=>this.onToolBarItemClicked(e)}/>
                    <VMatProgressBar/>
                    <VMatAlert ref={this.alertRef} colorType={ColorType.Success}/>
                    <VMatCard
                        title={'VMatCard'}
                        subTitle={'subtitulo'}>
                        Card content, bla bla bla
                    </VMatCard>
                    <VMatButton
                        text={'Go to page2'}
                        colorType={ColorType.Success}
                        onClick={(ev) => this.onBtnClicked(ev)}
                    />
                    <VMatTextField text={'ola'}/>
                    <VCircle
                        width={'100px'}
                        backgroundColor={'orange'}/>
                    <VMatTextArea
                        floatingLabelText={'textarea'}
                        onTextChanged={(txt) => this.onTextAreaChanged(txt)}
                    />
                    <VRowLayout
                        height={'100px'}
                        backgroundColor={'lightgray'}
                        horizontalAlignItems={HorizontalAlignItems.Center}>
                        <VMatButton
                            text={'hi'}
                            colorType={ColorType.Primary}/>
                        <VMatButton
                            text={'there'}
                            colorType={ColorType.Danger}/>
                        <VLabel text={'VRowLayout'}/>
                        <VRectangle width={'100px'}/>
                        <VColumnLayout>
                            <VLabel text={'VColumnLayout item1'}/>
                            <VLabel text={'VColumnLayout item2'}/>
                        </VColumnLayout>
                    </VRowLayout>
                    <VRowLayout>
                        <VMatCheckBox
                            ref={this.checkBoxRef}
                            text={'VMatCheckBox'}
                            onCheckChanged={(checked) => this.onCheckChanged(checked)}/>
                        <VMatRadioButton text={'radio'}/>
                        <VMatSwitch text={'switch'}/>
                    </VRowLayout>
                    <VMatButtonGroup>
                        <VMatButton text={'1'}/>
                        <VMatButton text={'2'}/>
                        <VMatButton text={'3'}/>
                        <VMatButton text={'4'}/>
                    </VMatButtonGroup>
                </VRectangle>
                <VRectangle
                    gridLayoutColumnStart="2"
                    gridLayoutColumnEnd="2"
                    paddingTop="100px"
                    width="100%"
                    height="400px"
                    backgroundColor="lightblue"
                    borderColor='red'
                    borderRadius='10px'
                    borderWidth='3px'
                    borderStyle={BorderStyle.Dashed}>
                    <VLabel
                        text='VLabel'
                        fontSize='20px'
                        color='brown'/>
                </VRectangle>
            </VGridLayout>

            <VMatSnackBar text={'snackBar'}/>
            <VMatConfirmDlg
                id="confirmDlg"
                title="Confirma a remoção?"
                cancelText="Cancelar"
                confirmText="Sim"/>
        </div>
    }

    private onBtnClicked(ev: any): void {
        this.props.history.push('/page2');
    }

    private onCheckChanged(checked: boolean): void {
        let checkBox = this.checkBoxRef.current;
        if (checkBox) console.log('checked:', checked, checkBox.checked);
    }

    private onTextAreaChanged(txt: string): void {
        //console.log('txt:',txt);
    }

    private onToolBarItemClicked(toolbarItem:EToolbarItem):void{
        console.log('clicou no toolbar:',toolbarItem.text);
        let alertRef=this.alertRef.current;
        if(alertRef){
            alertRef.text='Saved successfully';
            alertRef.visible=true;
        }
    }
}
