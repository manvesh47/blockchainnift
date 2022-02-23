import React from 'react'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://media.istockphoto.com/photos/concept-cryptographic-nft-on-a-hundreddollar-bill-franklin-in-glasses-picture-id1313353553?b=1&k=20&m=1313353553&s=170667a&w=0&h=leO19ogTi5MnJ0D6jd_olZvda6q_CDSpB9oJgGtpkGQ=')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () => {
    return <div className={style.wrapper}>
        <div className={style.container}>
        <div className={style.contentWrapper}>
        <div className={style.copyContainer}>
            <div className={style.title}>
                Mint and sell collectibles NFT 

                </div>
            <div className={style.description}>
                Join the future , join decentrailzed net
            </div>
            <div className={style.ctaContainer}>
                <button className={style.accentedButton}>Explore</button>
                <button className={style.button}>Create</button>

            </div>

             </div>
             <div className={style.cardContainer}>
                 <img className="rounded-t-lg"
                 src="https://media.istockphoto.com/photos/concept-cryptographic-nft-on-a-hundreddollar-bill-franklin-in-glasses-picture-id1313353553?b=1&k=20&m=1313353553&s=170667a&w=0&h=leO19ogTi5MnJ0D6jd_olZvda6q_CDSpB9oJgGtpkGQ="
                 alt=''/>
                   <div className={style.infoContainer}>
                 <img className="h-[2.25rem] rounded-full"
                 src="https://media.istockphoto.com/photos/concept-cryptographic-nft-on-a-hundreddollar-bill-franklin-in-glasses-picture-id1313353553?b=1&k=20&m=1313353553&s=170667a&w=0&h=leO19ogTi5MnJ0D6jd_olZvda6q_CDSpB9oJgGtpkGQ="
                 alt=''/>
                 <div className={style.author}>
                     <div className={style.name}>
                         Jolly
                     </div>
                     <a className="text-[#186b7]">yeet boi</a>
                 </div>
             </div>
             </div>
           
            </div>
        </div>
    </div>
}

export default Hero