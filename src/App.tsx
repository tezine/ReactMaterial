import React from 'react';
import './App.css';
import 'daemonite-material/css/material.min.css'
import {VRectangle} from "./components/VRectangle";
import {BorderStyle} from "./enums/BorderStyle";
import {VLabel} from "./components/VLabel";
import {VGridLayout} from "./components/VGridLayout";
import {VMatButton} from "./components/material/VMatButton";
import {ColorType} from "./enums/ColorType";
import {VMatCard} from "./components/material/VMatCard";
import {VMatSwitch} from "./components/material/VMatSwitch";
import {VMatRadioButton} from "./components/material/VMatRadioButton";
import {VMatTextField} from "./components/material/VMatTextField";
import {VCircle} from "./components/base/VCircle";
import {VMatProgressBar} from "./components/material/VMatProgressBar";
import {VMatTextArea} from "./components/material/VMatTextArea";
import {VMatToolBar} from "./components/material/VMatToolBar";
import {EToolbarItem} from "./entities/EToolbarItem";
import {VMatSnackBar} from "./components/material/VMatSnackBar";

const App: React.FC = () => {
    let eToolBarItemA=new EToolbarItem();
    eToolBarItemA.text='Save';
    return (
        <div className="App">
            <VGridLayout
                id="gridLayout"
                columns="auto auto"
                columnGap="10px"
                backgroundColor="brown"
            >
                <VRectangle
                    backgroundColor='gray'
                >
                    <VMatToolBar items={[eToolBarItemA]}/>
                    <VMatProgressBar/>
                    <VMatCard title={'card'} subTitle={'subtitulo'}>Conteudo do card, bla bla bla </VMatCard>
                    <VMatButton
                        text={'Ola'}
                        colorType={ColorType.Success}/>
                    <VMatSwitch  text={'switch'}/>
                    <VMatRadioButton text={'radio'}/>
                    <VMatTextField text={'ola'}/>
                    <VCircle
                        width={'100px'}
                        backgroundColor={'orange'}/>
                    <VMatTextArea floatingLabelText={'textarea'}/>
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
                        text='ola do vlabel'
                        fontSize='20px'
                        color='brown'/>
                </VRectangle>
            </VGridLayout>

            <VMatSnackBar text={'snackBar'}/>
        </div>
    );
};

export default App;
