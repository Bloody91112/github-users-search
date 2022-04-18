import s from './SearchPanel.module.css'
import { useState } from "react"

type propsType = {
    setSearchValue:any
}

export const SearchPanel:React.FC<propsType> = ({setSearchValue}) => {

    let [tempValue, setTempValue] = useState('')

    return <div className={s.searchInput}>
        <input
            className={s.searchText}
            onChange={(e) => { setTempValue(e.currentTarget.value) }}
            type="text" />
        <button className={s.button}
        onClick={() => { setSearchValue(tempValue) }}>
            find
        </button>
    </div>


}