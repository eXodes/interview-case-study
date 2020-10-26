import { auth, dbUsers } from '@/firebase/';
import store from '@/stores/';
import router from '@/router/';
import { toRef } from 'vue';

const useUser = () => {
  const isLoggedIn = toRef(store, 'isLoggedIn');

  auth.onAuthStateChanged(function(credentials) {
    if (credentials) {
      dbUsers
        .doc(credentials.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            store.user.value = userData;
            isLoggedIn.value = true;
            router.push({ name: 'Home' });
          } else {
            throw new Error('No such document!');
          }
        })
        .catch((error) => {
          throw new Error(`Error getting document: ${error}`);
        });
    } else {
      store.user.value = null;
      isLoggedIn.value = false;
      router.push({ name: 'Home' });
    }
  });

  return { isLoggedIn };
};

export default useUser;
