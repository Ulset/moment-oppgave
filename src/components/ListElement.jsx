import {useState} from "react";
import {UserEditor} from "./components/UserEditor";

export function ListElement({userEl, editStartFlag}) {
    const [editFLag, setEditFLag] = useState(!!editStartFlag);

    let {name, lastname} = userEl;

    if(editFLag){
        return <UserEditor />
    }

    return (
        <li className={"list-group-item"}>
            <div className={"row"}>
                <div className={"col"}>{name} {lastname}</div>
                <div className={"col text-right"} onClick={()=>{setEditFLag(true)}}>
                    <button type="button" className="btn btn-outline-secondary btn-sm">Rediger</button>
                </div>
            </div>
        </li>
    );
}
