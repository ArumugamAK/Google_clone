import React from 'react'
import { SearchHeader } from './SearchHeader'
import { SearchSubHeader } from './SearchSubHeader'

export const Header = ({searchTerm,setSearch,openvoicesearch}) => {
  
  return (
    <div>
        <SearchHeader searchTerm={searchTerm} setSearch={setSearch} openvoicesearch={openvoicesearch}/>
        <SearchSubHeader/>
    </div>
  )
}
