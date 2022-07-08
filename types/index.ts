import {
	Alert,
	Autocomplete,
	Button,
	ClassNameMap,
	Paper,
	PaperClasses,
	styled,
	Theme,
} from "@mui/material";
export type PikProps<'root'> = keyof Pick<PaperClasses, K>;
