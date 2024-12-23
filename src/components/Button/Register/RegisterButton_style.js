import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: 'gray', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',  
    fontSize: 17,  
    fontWeight: '500', 
    letterSpacing: 0.5,  
  },
});
