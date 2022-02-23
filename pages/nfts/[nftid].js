import Header from "../../components/Header"
import { useState , useEffect , useMemo } from "react"
import { useWeb3 } from "@3rdweb/hooks"
import { ThirdwebSDK } from "@3rdweb/sdk"
import { makePublicRouterInstance, useRouter } from "next/router"
import NFTImage from "../../components/nft/NFTImage"
import ItemActivity from "../../components/nft/ItemActivity"
import GeneralDetails from "../../components/nft/GeneralDetails"
import EventItem from "../../components/nft/itemActivity/EventItem"



const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
  }


import React from "react"
import Purchase from "../../components/nft/Purchase"

const Nft = () => {

    const {provider} = useWeb3()
    const [selectedNft , setSelectedNft] = useState()
    const [listings , setListings] = useState([])
    const router = useRouter()

    const nftModule = useMemo(() => {

        if(!provider) return
        
        const sdk = new ThirdwebSDK(
        provider.getSigner()
        
        )
        return sdk.getNFTModule('0xD147a3Df843e9826045F6e7D190a485bF34897bb')
    },[provider])

 useEffect(() => {

        if(!nftModule) return

        ;(async () => {
            const nfts = await nftModule.getAll()

            const selectedNftItem = nfts.find(
                (nft) => nft.id === router.query.nftid 

            )

            setSelectedNft(selectedNftItem)
           
        })()
    },[nftModule])

    const marketPlaceModule = useMemo(() => {

        if(!provider) return

        const sdk = new ThirdwebSDK(
            provider.getSigner()
            
        )
        return sdk.getMarketplaceModule(
            '0xA3Bb75f35f015981B407C647F2eA0886BfCCB3b7'
        )

    },[provider])

    useEffect(() => {
        if(!marketPlaceModule) return
        ;(async () => {
            setListings(await marketPlaceModule.getAllListings())

        })()
    },[marketPlaceModule])


    return (<div>

        <Header />
        <div className={style.wrapper}>
        <div className={style.container}>
        <div className={style.topContent}>
        <div className={style.nftImgContainer}>
        <NFTImage selectedNft = {selectedNft} />
        </div>
        <div className={style.detailsContainer}>
            <GeneralDetails selectedNft={selectedNft} />
            <Purchase
            isListed={router.query.isListed}
            selectedNft={selectedNft}
            listings={listings}
            marketPlaceModule={marketPlaceModule}
            
            />
        </div>
        

        </div>
        <ItemActivity />


        </div>
        </div>
        </div>
        
        )

}

export default Nft