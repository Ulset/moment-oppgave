import {useState} from "react";

export function UserEditor({saveFunc, userEl, deleteFunc}) {
    const [name, setName] = useState(userEl ? userEl.name : "");
    const [lastname, setLastname] = useState(userEl ? userEl.lastname : "");
    const [phone, setPhone] = useState(userEl ? userEl.phone : "");

    //Superenkel validering, sjekker bare om alle feltene er fylt inn.
    const validForm = name && lastname && phone

    /*Samme komponent brukes for både redigering og lage ny bruker, syntes det så stygt ut med røde validering når man
    skal lage ny bruker med en gang.*/
    const [skip_validation, setSkip_validation] = useState(userEl === undefined);

    const save = ()=>{
        if(validForm){
            saveFunc({name, lastname, phone})
        }
        //Hvis man prøver å lagre brukeren så settes denne til false så man kan se eventuelle feil.
        setSkip_validation(false)
    }

    return (
        <li className={"list-group-item"}>
            <div className="form-group">
                <label>Fornavn</label>
                <input type="text" className={`form-control ${name || skip_validation ? "" : "is-invalid"}`}
                       placeholder="Fornavn" value={name}
                       autoFocus={true}
                       onChange={(e)=> {
                        setName(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label>Etternavn</label>
                <input type="text" className={`form-control ${lastname || skip_validation ? "" : "is-invalid"}`}
                       placeholder="Etternavn" value={lastname}
                       onChange={e => {
                        setLastname(e.target.value)
                }}/>
            </div>
            <div className="form-group">
                <label>Telefonnummer</label>
                <input type="tel" className={`form-control ${phone || skip_validation ? "" : "is-invalid"}`}
                       placeholder="Telefon" value={phone}
                       onChange={e => {
                        setPhone(e.target.value)
                }}/>
            </div>
            <div className="row">
                <div className="col">
                    {deleteFunc ?
                        <button type="submit" className="btn btn-primary btn-sm" onClick={()=>deleteFunc(userEl)}>
                            Slett
                        </button> : ""}
                </div>
                <div className="col d-flex justify-content-end">
                    <button type="submit" className={`btn btn-primary btn-sm ${validForm ? "" : "disabled"}`}
                            onClick={save}>
                        Lagre
                    </button>
                </div>
            </div>
        </li>
    );
}
