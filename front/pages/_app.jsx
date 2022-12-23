import Head from 'next/head';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Nav from '../src/components/common/Nav';
import { GlobalStyles } from '../styles/ResetStyled';
import { lightTheme } from '../theme/theme';
import MobNav from '../src/components/common/MobNav';
import { useEffect, useState } from 'react';
import AppRoot from '../src/components/common/AppRoot';
import AppLayOut from '../src/components/common/AppLayOut';
import "../src/assests/font/font.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LoadingBox } from '../src/components/project/slideWrapStyle';
import Loading from '../src/components/common/Loading';


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const {asPath: path} = useRouter();

  const pathName = path.replace("/","");
  const capitalizePath = pathName.charAt(0).toUpperCase() + pathName.replace("/","").slice(1);

  const splitPath = path.split("/");
  const pathTitle = splitPath[1].charAt(0).toUpperCase() + splitPath[1].slice(1);
  const projectName = splitPath[2];

  const [isMobSize, setIsMobSize] = useState(null);
  const windowSize = ()=>{
    if(window.innerWidth <= 860){
      setIsMobSize(true);
    }else{
      setIsMobSize(false);
    }
  }
  useEffect(()=>{
    windowSize();
  },[])
  useEffect(()=>{
    window.addEventListener('resize',windowSize)
  })
  

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
          <Head>
            <title>{`${path !== "/" ? (projectName === undefined ? capitalizePath : projectName + " | " + pathTitle) + ` - ` : ""}KyeongWon's Portfolio`}</title>
          </Head>
          <GlobalStyles />
          <AppRoot>
            <AppLayOut>
              <Component {...pageProps} />
            </AppLayOut>
            {isMobSize ? <MobNav/> : <Nav/>}
          </AppRoot>
        </ThemeProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
