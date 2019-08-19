import React, { Component } from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { Link, } from "react-router-dom";
// import SearchForm from "./SearchForm";


// TODO: Add missing tabs below
export default function TabNav() {
    return(
        <div class="ui tabular menu">
            <div>
                < Link to={"/WelcomePage"} class="item">Home Page</Link>
            </div>
            <div>
                 < Link to={"/CharacterList"} class="item">Characters</Link>
            </div>
            <div>
                 < Link to={"/LocationList"}class="item">Locations</Link>
            </div>
            <div>
                 < Link to={"/EpisodeList"}class="item">Episodes</Link>
            </div>
            {/* <div>
                <SearchForm />
            </div> */}
        </div>
    )

};
