import { mockReactNativeFirestore } from 'firestore-jest-mock';
import { mockCollection } from 'firestore-jest-mock/mocks/firestore';

mockReactNativeFirestore({
  database: {
    users: [{"id":"diZqYcp7jZFn8qUgOalE","userName":"Yaren","password":"12345678"},{"id":"mfU12DAF67QIooMG9Et0","userName":"Cankat","password":"1234567"},{"id":"roCGOruDxAf1Aa9CXaJi","userName":"Sedat","password":"123456"}],
  },
});


test('Kullanıcılar içerisinde Sedat kullanıcına ait bir kullanıcı var mı?', () => {
    const { Firestore } = require('@react-native-firebase/firestore');
    const firestore = new Firestore();
  
    return firestore
      .collection('users')
      .get()
      .then(userDocs => {
        expect(mockCollection).toHaveBeenCalledWith('users');

        const userNames = userDocs.docs.map(doc => doc.data().userName);
        
        expect(userNames.includes('Sedat')).toBe(true);
      });
  });