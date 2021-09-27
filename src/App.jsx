import {useState} from "react";
import {ListElement} from "./components/ListElement";
import {HeaderComponent} from "./components/HeaderComponent";
import {UserEditor} from "./components/UserEditor";


function App() {
    const startList = [
        {name: "Sander", lastname: "Ulset", phone: "45882362", id: 0},
        {name: "Andrea", lastname: "Elvegård", phone: "12345678", id:1},
        {name: "Ulrik", lastname: "Lager", phone: "87654321", id: 2}
    ]

    //Setup states and functions
    const [userList, setUserList] = useState(startList);
    const [addNewFlag, setAddNewFlag] = useState(false);

    const addNewUser = ({name, lastname, phone}) => {
        let id = userList.length
        while (userList.map(e => e.id).includes(id)){
            id++;
        }
        setUserList([...userList, {name, lastname, phone, id}]);
        setAddNewFlag(false);
    }

    const deleteUser = (userEl) => {
        const {id} = userEl;
        userList.forEach((el, index) => {
            if(id === el.id){
                userList.splice(index, 1)
            }
        })
        setUserList([...userList])
    }

    const changeUserInfo = (oldUserEl, newUserEl) => {
        const {id} = oldUserEl;
        userList.forEach((el, index) => {
            if(id === el.id){
                userList[index] = {id: el.id, ...newUserEl};
            }
        })
        setUserList([...userList])
    }

    //Rendering
    let outputJsx = userList.map((el) => {
        return <ListElement key={el.id} userEl={el} deleteFunc={deleteUser} changeUserElFunc={changeUserInfo}/>
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
