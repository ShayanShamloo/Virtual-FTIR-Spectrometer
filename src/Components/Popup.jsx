import { Dialog } from "@mui/material";
import { useState } from "react";
import '../style/Popup.css';

export default function Popup({label, title, text}) {

    const [open, setOpen] = useState(false);

    return(
        <div>
            <button className="popup-button" onClick={() => {setOpen(true)}} >{label}</button>
            <Dialog className="popup" onClose={() => {setOpen(false)}} open={open} >
                <h2>{title}</h2>
                <p>{text}</p>
            </Dialog>
        </div>
    );
    

}