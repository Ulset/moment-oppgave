import {useState} from "react";

export function ListElement({userEl, editStartFlag}) {
    const [editFLag, setEditFLag] = useState(!!editStartFlag);

    let {name, lastname} = userEl ? userEl : "";
    if(!userEl){
        [name, lastname] = ["", ""]
    }

    if(editFLag){
        return <div>Jeg redigeres!</div>
    }

    return (
        <div className={"row bg-light"}>
            <div className={"col"}>{name} {lastname}</div>
            <div className={"col text-right"} onClick={()=>{setEditFLag(true)}}>rediger</div>
        </div>
    );
}
