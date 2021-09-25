export function HeaderComponent({addNewFunc}) {
    return (
        <li className={"list-group-item grey-color"}>
            <div className={"row"}>
                <div className={"col font-weight-bold"}>Navn</div>
                <div className={"col text-right text-primary"}>
                    <button type={"button"}
                            className={"btn btn-primary btn-sm"}
                            onClick={addNewFunc}>
                        Legg til
                    </button>
                </div>
            </div>
        </li>
    );
}
