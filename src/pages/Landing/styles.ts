import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffaee',
        justifyContent: 'center',
        padding: 40
    },

    logoBanner: {
        width: '100%',
        alignItems: 'center',
        marginBottom: -40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#222',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 30,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonContainer: {       
        alignItems: 'flex-end',
    }, 

    button: { 
        height: 120, 
        width: '60%', 
        backgroundColor: '#333', 
        borderRadius: 12,
        marginTop: 40,
        paddingLeft: 30, 
        justifyContent: 'center',

    }, 

    buttonPrimary: { 
        backgroundColor: '#353535' 
    }, 

    buttonSecondary: { 
        backgroundColor: '#efc754'
    }, 


    buttonText: { 
        fontFamily: 'Poppins_400Regular', 
        color: '#333',
        fontSize: 20, 
    }, 
});

export default styles;
