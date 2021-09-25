import {useState} from "react";

export function ListElement({userEl, editStartFlag}) {
    const [editFLag, setEditFLag] = useState(!!editStartFlag);

    let {name, lastname} = userEl ? userEl : "";
    if(!userEl){
        [name, lastname] = ["", ""]
    }

    if(editFLag){
        return <li className={"list-group-item"}>
            <div className={"row"}>
                <div className={"col"}>1</div>
                <div className={"col"}>2</div>

            </div>
            <div className={"row"}>
                <div className={"col"}>Noe</div>
                <div className={"col"}>Annet</div>
            </div>
        </li>
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
