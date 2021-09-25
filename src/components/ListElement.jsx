import {useState} from "react";

export function ListElement({userEl, editStartFlag}) {
    const [editFLag, setEditFLag] = useState(!!editStartFlag);

    let {name, lastname} = userEl ? userEl : "";
    if(!userEl){
        [name, lastname] = ["", ""]
    }

    if(editFLag){
        return <li className={"list-group-item"}>Jeg redigeres!</li>
    }

    return (
        <li className={"list-group-item"}>
            <div className={"row"}>
                <div className={"col"}>{name} {lastname}</div>
                <div className={"col text-right"} onClick={()=>{setEditFLag(true)}}>rediger</div>
            </div>
        </li>
    );
}
