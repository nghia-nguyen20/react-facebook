import React from "react";
import "./WidgetsRow.scss"
import {Avatar} from "@material-ui/core";

const WidgetsRow = ({src, Icon, title}) => {
    return(
        <div className="widgetsRow">
            <div className="widgets__top">
            </div>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default WidgetsRow;
