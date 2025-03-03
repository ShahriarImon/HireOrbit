import merge from "lodash/merge";

import { Theme } from "@mui/material/styles";

import { alert } from "./components/alert";
import { appBar } from "./components/appbar";
import { autocomplete } from "./components/autocomplete";
import { button } from "./components/button";
import { card } from "./components/card";
import { checkbox } from "./components/checkbox";
import { cssBaseline } from "./components/css-baseline";
import { datePicker } from "./components/date-picker";
import { drawer } from "./components/drawer";
import { menu } from "./components/menu";
import { pagination } from "./components/pagination";
import { paper } from "./components/paper";
import { radio } from "./components/radio";
import { select } from "./components/select";
import { table } from "./components/table";
import { textField } from "./components/textfield";
import { typography } from "./components/typography";

// ----------------------------------------------------------------------

export function componentsOverrides(theme: Theme) {
  return merge(
    alert(theme),
    appBar(),
    autocomplete(theme),
    button(theme),
    card(theme),
    checkbox(theme),
    cssBaseline(),
    datePicker(theme),
    drawer(theme),
    menu(theme),
    pagination(theme),
    paper(theme),
    radio(theme),
    select(),
    table(theme),
    textField(theme),
    typography(theme)
  );
}
