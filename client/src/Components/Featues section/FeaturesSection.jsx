import React from 'react'
import FeatureDetails from '../../assets/component data/featureDetails'
import FeatureTile from '../Feature Tile/FeatureTile'
import desktopBg from "../../assets/images/desktopSizeFeatureBg.png"
import tabBg from "../../assets/images/tabSizeFeatureBg.png"
import mobileBg from "../../assets/images/mobileSizeFeatureBg.png"

export default function FeaturesSection() {
  return (
    <div className={`featureSection flex flex-col lg:gap-24 gap-10 justify-center xl:h-dvh max-[1280px]:py-10 bg-[url(${mobileBg})]  sm:bg-[url(${tabBg})] lg:bg-[url('../../assets/images/desktopSizeFeatureBg.png')] bg-cover bg-no-repeat`} style={{backgroundImage: `url(${window.innerWidth > 1024 ? desktopBg : window.innerWidth > 648 ? tabBg : mobileBg})`}}>
        <h1 className="heading sm:text-4xl min-[500px]:text-3xl min-[340px]:text-2xl text-xl text-center font-semibold font-serif text-white">Features you like!</h1>
        <div className="featureTiles flex flex-wrap gap-8 justify-center items-center">
        {FeatureDetails.map((elem, index) => {
            return <FeatureTile key={index} featureIcon={elem.icon} featureDetails={elem}  />
        })}
        </div>
    </div>
  )
}
