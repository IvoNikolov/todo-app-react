import React from "react";

export default function TodosCount(props) {
    return <div className="total">Total items: <span className="output">{props.count}</span></div>
}