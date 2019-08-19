import React from "react";
import {Route} from "react-router-dom";

import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import EpisodeList from "./EpisodeList";

export default function AppRouter (){
    return(
        <div>
           {<Route exact path="/" component={WelcomePage} />}
           {<Route path="/WelcomePage" component={WelcomePage} />}
            {<Route path="/CharacterList" component={CharacterList} />}
            {<Route path="/LocationList" component={LocationList} />}
            {<Route path="/EpisodeList" component={EpisodeList} />}
        </div>
    )
}