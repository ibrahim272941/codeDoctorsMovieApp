import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (prop) => {
  const [currentUser, setCurrentUser] = useState();
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {prop.children}
    </AuthContext.Provider>
  );
};
