import React from 'react'
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {Spacing} from "./components/styling";

function App() {
    return (
        <div className="App">
            <Input spacing={Spacing.Small}/>
            <Button spacing={Spacing.Small}/>
        </div>
    )
}

export default App
