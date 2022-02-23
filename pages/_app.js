import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

/**
 * the chain id4 is used to connect to rinkeby network
 * the `injected connector is a web3 connection method used by metamask`
 */

const supportedChainIds = [4]
const connectors = {
  injected:{},
}


function MyApp({ Component, pageProps }) {
  return(
  <ThirdwebWeb3Provider
  supportedChainIds={supportedChainIds}
  connectors={connectors}>
  <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
