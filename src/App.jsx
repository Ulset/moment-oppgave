import './App.css';
import {useState} from "react";
import {ListElement} from "./components/ListElement";
import {HeaderComponent} from "./components/HeaderComponent";
import {UserEditor} from "./components/components/UserEditor";


function App() {
    const startList = [
        {name: "Sander", lastname: "Ulset", phone: "45882362"},
        {name: "Andrea", lastname: "Elvegård", phone: "12345678"},
        {name: "Ulrik", lastname: "Lager", phone: "87654321"}
    ]

    //Setup states and functions
    const [userList, setUserList] = useState(startList);
    const [addNewFlag, setAddNewFlag] = useState(false);

    const addNewUser = ({name, lastname, phone}) => {
        setUserList([...userList, {name, lastname, phone}]);
        setAddNewFlag(false);
    }

    const deleteUser = ({name, lastname, phone}) => {
        let newList = userList;
        userList.forEach((el, index) => {
            if(name === el.name && lastname === el.lastname && phone === el.phone){
                newList.splice(index, 1)
            }
        })
        setUserList([...newList])
    }

    const changeUserInfo = (oldUserEl, newUserEl) => {
        let newList = userList;
        const {name, lastname, phone} = oldUserEl;
        userList.forEach((el, index) => {
            if(name === el.name && lastname === el.lastname && phone === el.phone){
                newList[index] = newUserEl;
            }
        })
        setUserList([...newList])
    }

    //Rendering
    let outputJsx = userList.map((el) => {
        return <ListElement key={el.name} userEl={el} deleteFunc={deleteUser} changeUserElFunc={changeUserInfo}/>
    })

    if(addNewFlag) {
        // If a new user is being added, append a empty UserEditor
        const addNewComponent = <UserEditor key={"newUser"} saveFunc={addNewUser}/>
        outputJsx = [addNewComponent, ...outputJsx]
    }

    return (
        <div id={"app_container"} className={"container"}>
            <ul className={"list-group rounded"}>
                <HeaderComponent addNewFlag={addNewFlag} setAddNewFlag={setAddNewFlag}/>
                {outputJsx}
            </ul>
        </div>
    );
}

export default App;
