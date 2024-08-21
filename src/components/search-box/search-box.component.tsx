
import { ChangeEventHandler,ChangeEvent } from 'react'
import './search-box.styles.css'


type SearchBoxProps = {
    className: string, 
    placeholder?: string,
    // onSearchHandler: ChangeEventHandler<HTMLInputElement>
    onSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void
}
const SearchBox = ({className,placeholder,onSearchHandler} : SearchBoxProps ) => (
        <div>
            <input 
                className ={`search-box ${className}`}
                type ='search' 
                placeholder = {placeholder}
                onChange ={onSearchHandler}
            />
        </div>
    )

export default SearchBox;