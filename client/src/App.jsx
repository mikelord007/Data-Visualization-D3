import React from "react";
import './app.css'
import * as d from './assets/jsondata.json'

const App = () => {
    return (
            <div>
                {JSON.stringify(d)}
            </div>
    )
}

export default App