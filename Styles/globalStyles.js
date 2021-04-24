import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        width: '100%',
        opacity: 1
      },
      backgroundImage:{
        width: '100%',
        height: '100%',

      },
      header: {
        height: 60,
        backgroundColor: '#006600',
        padding: 15,
      },
      text:{
          color: '#fff',
          fontSize: 23,
          textAlign: 'center',
          fontFamily: 'nunito-bold'
      },
      listItem: {
        padding: 15,
        backgroundColor: '#e6ffe6',
        borderWidth: 1,
        borderColor: '#006600',
        marginHorizontal: 15,
        marginBottom: 5,
      },
      listItemView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      listItemText:{
        fontSize: 18,
        fontFamily: 'nunito-semibold',
        color: '#006600'
      },
      input:{
        height: 60,
        padding: 8,
        fontSize: 18,
        fontFamily: 'nunito-light',
        borderWidth:1,
        backgroundColor: '#e6ffe6',
        borderColor: '#006600',
        marginHorizontal: 15,
        marginTop: 5,
        
    },
    btn:{
        backgroundColor: '#006600',
        padding: 9 ,
        margin: 6,
        borderRadius: 10,
        marginHorizontal: 15,
    },
    btnText:{
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'nunito-bold'
    }
})