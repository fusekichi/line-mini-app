"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import liff from '@line/liff';

type LiffContextType = {
  liff: typeof liff | null;
  isLoggedIn: boolean;
  // profile: any;
  profile: {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
  } | null;
  isLoading: boolean;
  error: Error | null;
};

const LiffContext = createContext<LiffContextType>({
  liff: null,
  isLoggedIn: false,
  profile: null,
  isLoading: true,
  error: null,
});

export const LiffProvider = ({ children, liffId }: { children: ReactNode, liffId: string }) => {
  const [state, setState] = useState<LiffContextType>({
    liff: null,
    isLoggedIn: false,
    profile: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // LIFFの初期化
    import('@line/liff')
      .then((liffModule) => {
        const liff = liffModule.default;
        console.log("LIFF初期化を開始します");
        
        liff.init({ liffId })
          .then(() => {
            console.log("LIFF初期化完了");
            
            // const isLoggedIn = liff.isLoggedIn();
            // let profilePromise = Promise.resolve(null);
            
            // if (isLoggedIn) {
            //   profilePromise = liff.getProfile();
            // }

            const isLoggedIn = liff.isLoggedIn();
            let profilePromise: Promise<any | null> = Promise.resolve(null);
                        
            if (isLoggedIn) {
              profilePromise = liff.getProfile();
            }
            
            return profilePromise.then(profile => {
              setState({
                liff,
                isLoggedIn,
                profile,
                isLoading: false,
                error: null,
              });
            });
          })
          .catch((error) => {
            console.error("LIFF初期化エラー", error);
            setState({
              liff: null,
              isLoggedIn: false,
              profile: null,
              isLoading: false,
              error,
            });
          });
      });
  }, [liffId]);

  return (
    <LiffContext.Provider value={state}>
      {children}
    </LiffContext.Provider>
  );
};

export const useLiff = () => useContext(LiffContext);