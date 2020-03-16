import { AlertCircle, ChevronDown } from "react-feather"

import Columns from "../../../../components/Columns"
import Field from "../../../../components/Field"
import TextInput from "../../../../components/TextInput"
import MinimumWidth from "./MinimumWidth"

<Columns reverse>
  <MinimumWidth />
  <Field label="Name">
    <TextInput after={<ChevronDown />} before={<AlertCircle />} />
  </Field>
</Columns>
