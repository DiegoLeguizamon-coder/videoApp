import React from 'react';
import{
    View,
    StyleSheet,
    Text
} from 'react-native';

function VerticalSeparator (props){
    return(
        <View style={[styles.separator,
            {
                borderTopColor: (props.color) ? props.color : '#00ff00'
            }
        ]}>
        </View>
    );
}

export default VerticalSeparator;

const styles = StyleSheet.create({
    separator:{
        borderTopWidth: 1,
    }
})