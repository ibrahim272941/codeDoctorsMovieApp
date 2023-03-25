import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase-config';

export const AuthContext = createContext();

const AuthContextProvider = (prop) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onStateChangedFunc();
  }, [currentUser]);

  const onStateChangedFunc = async () => {
    try {
      onAuthStateChanged(auth, (validUser) => {
        setCurrentUser(validUser);
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {prop.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
