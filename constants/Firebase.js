
import ApiKeys from '../constants/apiKeys';
import * as firebase from 'firebase';

firebase.initializeApp(ApiKeys.FirebaseConfig);

export default firebase;