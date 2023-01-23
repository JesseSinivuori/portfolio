import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from './store/components'
import StateContext from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import { DashboardContext } from './dashboard/contexts/ContextProvider'
import { useDashboardContext } from './dashboard/contexts/ContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  

  return (
    <div>

      <StateContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
      </StateContext>
    </div>
  )
}
