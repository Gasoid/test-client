import React from 'react';
import { useQuery } from 'react-query';

export const SettingsContext = React.createContext({
  data: {},
  isLoading: true,
});

type SettingsProviderProps = {};

const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const { data, isLoading } = useQuery(
    'settings',
    async () => {
      const response = await fetch(process.env.REACT_APP_SETTINGS_API_URL || "");
      return await response.json();
    },
    {
      retry: false,
    },
  );
  return (
    <SettingsContext.Provider value={{ data, isLoading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
