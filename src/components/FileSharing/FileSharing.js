const { Button, View } = require("react-native");
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

import React from 'react';

class FireSharing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    StartShare () {
        NfcManager.start();
        //this.WriteData();
        //this.ReadData();
    }

    async WriteData(){

    }

    async ReadData(){

    }


    render(){
        return(
            <View>
                <Button onPress={this.StartShare}>Share Info</Button>
            </View>     
        )
    }
}