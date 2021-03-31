import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        borderWidth: 1, 
        borderColor: '#e6e6f0',
        borderRadius: 14, 
        marginBottom: 16, 
        overflow: 'hidden' 
}, 
    header: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 24, 
    }, 
    avatar: { 
        width: 64, 
        height: 64,
        borderRadius: 32, 
        backgroundColor: '#efc754',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264d',
        fontSize: 20,
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
    },
    NewsText: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
        marginHorizontal: 28,
        lineHeight: 27,
    },
    footer: {
        backgroundColor: '#fafafc',
        paddingVertical: 24, 
        marginTop: 24,
    },   
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
   
    button: {  
        height: 38,
        paddingHorizontal: 14, 
        borderRadius: 8, 
        justifyContent: 'center', 
        marginRight: 8, 
    },
    buttonEdit: {
        backgroundColor: '#cecece',
    },

    buttonDelete: {
        backgroundColor: '#fcd2d2',
    },

    buttonText: {
        fontFamily: 'Poppins_400Regular', 
        fontSize: 13, 
    },
    
    buttonRed: {
        color: '#c11616',
    },

    buttonGrey: {
        color: '#333',
    },


});

export default styles;