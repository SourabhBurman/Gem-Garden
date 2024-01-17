
import React from 'react'
import { MainPagemainComponent } from '../Components/MainPage-mainComponent'
import { NewCollection } from '../Components/NewCollection'
import { CategoriesSection } from '../Components/CategoriesSection'

export const Home = () => {
  return (
    <>
    <MainPagemainComponent />
    <NewCollection />
    {/* <CategoriesSection /> */}
    </>
  )
}
