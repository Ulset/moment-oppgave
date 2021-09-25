import './App.css';
import {useState} from "react";
import {ListElement} from "./components/ListElement";

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
                <li className={"list-group-item grey-color"}>
                    <div className={"row"}>
                        <div className={"col-sm-8"}>Navn</div>
                        <div className={"col text-right"} onClick={()=>{setAddNewFlag(true)}}>Legg til</div>
                    </div>
                </li>
                {userJsx}
            </ul>
        </div>
    );
}

export default App;
