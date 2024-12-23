import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: '#1F41BB',  // Apple'ın mavi rengi
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,  // Daha yumuşak, yuvarlatılmış köşeler
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,  // Hafif gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,  // Daha hafif bir gölge
    shadowRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',  // Yazı rengi beyaz
    fontSize: 17,  // Apple tarzına uygun font büyüklüğü
    fontWeight: '500',  // Orta ağırlık font
    letterSpacing: 0.5,  // Harf aralığı
  },
});
