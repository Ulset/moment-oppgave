import {useState} from "react";
import {UserEditor} from "./components/UserEditor";

export function ListElement({userEl, deleteFunc, changeUserElFunc}) {
    const [editFLag, setEditFLag] = useState(false);

    let {name, lastname, phone} = userEl;

    const saveChanges = ({name, lastname, phone}) => {
        changeUserElFunc(userEl, {name, lastname, phone})
        setEditFLag(false);
    }

    if(editFLag){
        return <UserEditor userEl={userEl} deleteFunc={deleteFunc} saveFunc={saveChanges}/>
    }

    return (
        <li className={"list-group-item"}>
            <div className={"row"}>
                <div className={"col"}>{name} {lastname}, {phone}</div>
                <div className={"col text-right"} onClick={()=>{setEditFLag(true)}}>
                    <button type="button" className="btn btn-outline-secondary btn-sm">Rediger</button>
                </div>
            </div>
        </li>
    );
}
