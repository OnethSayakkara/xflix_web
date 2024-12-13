import React from 'react'
import ModelsHero from '../components/ModelsHero'
import Header from '../components/Header'
import ModelPartTwo from '../components/ModelPartTwo'
import ModelPartThree from '../components/ModelPartThree'
import ModelPartFour from '../components/ModelPartFour'
import ReviewSlide from '../components/ReviewSlide'
import CustomLanguageSwitcher from '../components/CustomLanguageSwitcher';



const ContentPartner = () => {
  return (
      
    <div>
      <CustomLanguageSwitcher />
      <Header/>
      <ModelsHero/>
      <ModelPartTwo/>
      <ModelPartThree/>
      <ModelPartFour/>
      <ReviewSlide/>

      
      

      
      </div>
  )
}

export default ContentPartner