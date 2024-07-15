
import './search-box.styles.css'

    
const SearchBox = (props) => (
        <div>
            <input 
                className ={`search-box ${props.className}`}
                type ='search' 
                placeholder = {props.placeholder}
                onChange ={ props.onSearchHandler}
            />
        </div>
    )

export default SearchBox;