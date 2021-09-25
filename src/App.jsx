import './App.css';
import {useState} from "react";
import {ListElement} from "./components/ListElement";
import {HeaderComponent} from "./components/HeaderComponent";

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
    let userJsx = userList.map((el, index) => {
        return <ListElement key={index} userEl={el}/>
    })

    if(addNewFlag) {
        const addNewComponent = <ListElement key={"newUser"} editStartFlag={true}/>
        userJsx = [addNewComponent, ...userJsx]
    }

    return (
        <div id={"app_container"} className={"container"}>
            <ul className={"list-group rounded"}>
                <HeaderComponent addNewFunc={()=>{setAddNewFlag(true)}}/>
                {userJsx}
            </ul>
        </div>
    );
}

export default App;
