import './App.css';
import {useState} from "react";
import {ListElement} from "./components/ListElement";
import {HeaderComponent} from "./components/HeaderComponent";
import {UserEditor} from "./components/components/UserEditor";

function NewElement() {
    return null;
}

function App() {
    const startList = [
        {name: "Sander", lastname: "Ulset", phone: "45882362"},
        {name: "Andrea", lastname: "Elvegård", phone: "12345678"},
        {name: "Ulrik", lastname: "Lager", phone: "6969420"}
    ]

    //Setup states and functions
    const [userList, setUserList] = useState(startList);
    const [addNewFlag, setAddNewFlag] = useState(false);


    //Rendering
    let outputJsx = userList.map((el, index) => {
        return <ListElement key={index} userEl={el}/>
    })

    if(addNewFlag) {
        // If a new user is being added, append a empty UserEditor
        const addNewComponent = <UserEditor key={"newUser"} />
        outputJsx = [addNewComponent, ...outputJsx]
    }

    return (
        <div id={"app_container"} className={"container"}>
            <ul className={"list-group rounded"}>
                <HeaderComponent addNewFunc={()=>{setAddNewFlag(true)}}/>
                {outputJsx}
            </ul>
        </div>
    );
}

export default App;
