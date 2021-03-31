import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 60,
        paddingHorizontal: 20,
        backgroundColor: '#efc754',
    },
    topBar: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 360,
        marginTop: 20,
        marginBottom: 30,
    },
    imgHeader: {
        height: 35,
        width: 35,
    }

});

export default styles;