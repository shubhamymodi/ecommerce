import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cardila from "./card";
export default function Router(){
    return(
        <div>
            <Switch>
                <Route exact path="/course" component={Cardila}/>
                
            </Switch>
        </div>
    )
}