import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState("authenticated");
  const [userId, setUserId] = useState(null);

  const updateUser = (id) => {
    setUserId(id);
    setUser("authenticated");
  };

  return (
    <UserContext.Provider value={{ user, userId, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
