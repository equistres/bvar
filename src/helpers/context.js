
import React from 'react';

export const Store = React.createContext();

export function StoreProvider(props) {
  return <Store.Provider value={{value1:1, value2:2}}>{props.children}</Store.Provider>;
}