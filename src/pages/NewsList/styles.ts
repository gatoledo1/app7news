import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    teacherList: {
        marginTop: -60,
    },

    searchForm: { 
        marginBottom: 24,
    },

    title: {
        paddingVertical: 30,
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264d',
        fontSize: 20,
    },

    label: { 
        color: '#fff',
        fontFamily: 'Poppins_400Regular'
    },
    
    input: { 
        minHeight: 48, 
        backgroundColor: '#f4f4f4',
        borderRadius: 8, 
        justifyContent: 'center', 
        paddingHorizontal: 16, 
        marginTop: 4, 
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: '#353535', 
        height: 56, 
        borderRadius: 8, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    modalButton: {
        backgroundColor: '#ffe8cf', 
        height: 45,
        width: 150,
        borderRadius: 8, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    modalButtonText: {
        color: '#dd9a05',
        fontFamily: 'Poppins_400Regular', 
        fontSize: 17, 
    },
    submitButtonText: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular', 
        fontSize: 19, 
    }, 


});

export default styles;