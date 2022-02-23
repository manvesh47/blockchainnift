import {BsFillCartFill } from "react-icons/bs"

const style = {
    eventItem: `flex px-4 py-5 font-medium`,
    event: `flex items-center`,
    eventIcon: `mr-2 text-xl`,
    eventName: `text-lg font-semibold`,
    eventPrice: `flex items-center`,
    eventPriceValue: `text-lg`,
    ethLogo: `h-5 mr-2`,
    accent: `text-[#2081e2]`,
  }

  const EventItem = ({event}) => {
      return (
          <div className={style.eventItem}>
              <div className={`${style.event} flex-[2]`}>
                  <div className={style.eventIcon}>
                      <BsFillCartFill/>
                  </div>
                  <div className={style.eventName}>
                      Sale
                  </div>
                  <div className={`${style.eventPrice} flex-[2]`}>
                      <img    src="https://media.istockphoto.com/photos/concept-cryptographic-nft-on-a-hundreddollar-bill-franklin-in-glasses-picture-id1313353553?b=1&k=20&m=1313353553&s=170667a&w=0&h=leO19ogTi5MnJ0D6jd_olZvda6q_CDSpB9oJgGtpkGQ="

                      alt="eth"
                      className={style.ethLogo}/>
                      <div className={style.eventPriceValue}>
                          {event.price}
                      </div>
                  </div>
                  <div className={`${style.accent} flex-[3]`}>
                      {event.from}
                  </div>
                  <div className={`${style.accent} flex-[3]`}>
                      {event.to}
                  </div>
                  <div className={`${style.accent} flex-[3]`}>
                      {event.date}
                  </div>
              </div>
          </div>
      )





  }



export default EventItem