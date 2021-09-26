import {useState} from "react";

export function UserEditor({saveFunc, userEl, deleteFunc}) {
    const [name, setName] = useState(userEl ? userEl.name : "");
    const [lastname, setLastname] = useState(userEl ? userEl.lastname : "");
    const [phone, setPhone] = useState(userEl ? userEl.phone : "");

    const save = ()=>{
        saveFunc({name, lastname, phone})
    }

    return (
        <li className={"list-group-item"}>
            <div className="form-group">
                <label>Fornavn</label>
                <input type="text" className="form-control" placeholder="Fornavn" value={name} onChange={(e)=> {
                    setName(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label>Etternavn</label>
                <input type="text" className="form-control" placeholder="Etternavn" value={lastname} onChange={e => {
                    setLastname(e.target.value)
                }}/>
            </div>
            <div className="form-group">
                <label>Telefonnummer</label>
                <input type="tel" className="form-control" placeholder="Telefon" value={phone} onChange={e => {
                    setPhone(e.target.value)
                }}/>
            </div>
            <div className="row">
                <div className="col">
                    {deleteFunc ? <button type="submit" className="btn btn-primary btn-sm" onClick={()=>deleteFunc(userEl)}>Slett</button> : ""}
                </div>
                <div className="col d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary btn-sm" onClick={save}>Lagre</button>
                </div>
            </div>
        </li>
    );
}
