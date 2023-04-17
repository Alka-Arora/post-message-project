import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from "next/script";
import { store,persistor } from '../store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { ClerkLoaded } from '@clerk/clerk-react';

const clerkReactKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }: AppProps) {
  const router=useRouter()
  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Provider store={store}>
      <PersistGate loading={
        <div className='text-success fs-4 text-center'>Loading...</div>
      } persistor={persistor}>
        <ClerkProvider frontendApi={clerkReactKey}>
        <ClerkLoaded>
          <SignedIn>
        <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        </ClerkLoaded>
        </ClerkProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
