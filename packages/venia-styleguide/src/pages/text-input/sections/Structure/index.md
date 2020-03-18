import { Fragment } from "react"
import { AlertCircle, ChevronDown } from "react-feather"

import Box from "../../../../components/Box"
import Button from "../../../../components/Button"
import Columns from "../../../../components/Columns"
import Field from "../../../../components/Field"
import TextInput from "../../../../components/TextInput"
import Dimensions from "./Dimensions"
import GridLayout from "./GridLayout"

<Columns>
  <GridLayout />
</Columns>
<Columns>
  <Dimensions />
  <Fragment>
    <Field label="Name">
      <TextInput />
    </Field>
    <Field>
      <Button>Go</Button>
    </Field>
  </Fragment>
</Columns>
