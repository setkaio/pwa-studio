import { HelpCircle } from "react-feather"

import Columns from "../../../../components/Columns"
import Field from "../../../../components/Field"
import Select from "../../../../components/Select"
import Before from "./Before"
import OptionsTable from "./OptionsTable"

<Columns reverse>
  <Before />
  <Field label="Size">
    <Select before={<HelpCircle />}>
      <option value="S">Small</option>
      <option value="M">Medium</option>
      <option value="L">Large</option>
    </Select>
  </Field>
</Columns>
<OptionsTable />
