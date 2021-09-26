export function HeaderComponent({setAddNewFlag, addNewFlag}) {
    return (
        <li className={"list-group-item grey-color"}>
            <div className={"row"}>
                <div className={"col font-weight-bold"}>Navn</div>
                <div className={"col text-right text-primary"}>
                    <button type={"button"}
                            className={`btn ${addNewFlag ? "btn-danger" : "btn-primary"} btn-sm`}
                            onClick={()=>{setAddNewFlag(!addNewFlag)}}>
                        {addNewFlag ? "Glem det" : "Legg til"}
                    </button>
                </div>
            </div>
        </li>
    );
}
