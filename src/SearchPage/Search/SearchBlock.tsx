import { useState } from "react"
import { SearchList } from "./SearchList"
import { SearchPanel } from "./SearchPanel"
import s from './SearchBlock.module.css'


export const SearchBlock = () => {

    let [searchValue, setSearchValue] = useState('')

    return <div className={s.searchPage}>
        <SearchPanel setSearchValue={setSearchValue} />
        <SearchList searchValue={searchValue} />
    </div>
}