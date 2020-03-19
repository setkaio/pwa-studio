import { AlertCircle, Search } from "react-feather"

import Columns from "../../../../components/Columns"
import Field from "../../../../components/Field"
import TextInput from "../../../../components/TextInput"
import After from "./After"
import Before from "./Before"
import OptionsTable from "./OptionsTable"

<Columns reverse>
  <After />
  <Field label="Email">
    <TextInput after={<AlertCircle />} />
  </Field>
</Columns>
<Columns reverse>
  <Before />
  <Field label="Find products">
    <TextInput before={<Search />} />
  </Field>
</Columns>
<OptionsTable />
