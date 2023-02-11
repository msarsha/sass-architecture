import React from 'react'
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {Spacing} from "./styling/styling";

function App() {
    return (
        <div className="App">
            <Input spacing={Spacing.Large}/>
            <Button spacing={Spacing.Large}/>
        </div>
    )
}

export default App
