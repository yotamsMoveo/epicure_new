import searchLogo from "../../assets/images/search.png";
import './searchInput.scss'

const SearchInput=()=>{
    return(
        <div className="search-field">
        <form>
          <div className="search-input">
            <img src={searchLogo} className="img" />
            <input
              placeholder=" Search for restaurant cuisine, chef"
              className="input"
            ></input>
          </div>
        </form>
      </div>
    )

}

export default SearchInput;