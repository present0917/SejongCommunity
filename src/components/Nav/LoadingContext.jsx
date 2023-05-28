import React from 'react';
import Pulse from '../ui/loading/Pulse';

const LoadingContext = React.createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingText,setLoadingText] = React.useState("로딩중...")
  const updateLoading = (bool,text) => {
    setIsLoading(bool);
    if(text){
        setLoadingText(text);
    } else {
        setLoadingText("로딩중...");
    }
  };

  return (
    <LoadingContext.Provider value={{ updateLoading }}>
        <Pulse isLoading={isLoading}>{loadingText}</Pulse>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;