import { Component } from "react";

class SearchBox extends Component {
    
    
    render() {
        return <div>
            <input 
                className ={this.props.className}
                type ='search' 
                placeholder = {this.props.placeholder}
                onChange ={ this.props.onSearchHandler}
            />
        </div>
    }
}

export default SearchBox;