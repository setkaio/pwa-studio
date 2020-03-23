import React from "react"
import { ChevronDown } from "react-feather"

const CHEVRON = <ChevronDown />

import TextInput from "../TextInput"
import classes from "./Select.css"

const Select = props => {
    return (
        <TextInput {...props} after={CHEVRON} type="select" />
    )
}

export default Select
