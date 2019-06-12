import React from 'react';
import{
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Platform,
    Image
} from 'react-native';


function Header(props){
    return(
        <View style={styles.container}>
            <Image 
            source={require('../../../assets/Logo-dbd.png')}
            style={styles.logo}
            />
            <View styles={styles.right}>
                {props.children}
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    logo: {
        width: 200, 
        height: 100,
        resizeMode:'contain',

    },
    container:{
        paddingVertical: 20,
        flexDirection: 'row'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
         
    }
    

})

/*export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor:nplBlue,
        paddingTop: Platform.OS === 'android' ? 25: 0
    }
})*/