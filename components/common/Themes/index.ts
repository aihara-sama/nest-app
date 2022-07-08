import { createTheme, responsiveFontSizes } from "@mui/material";
import { green, red } from "@mui/material/colors";

const darkTheme = responsiveFontSizes(
	createTheme({
		palette: {
			primary: red,
			secondary: green,
		},
		components: {
			MuiButton: {
				defaultProps: {},
			},
			MuiCssBaseline: {
				styleOverrides: `
          @font-face: {
            font-family: Arial
          }
        `,
			},
		},
		typography: {
			fontFamily: ["Arial"].join(", "),
		},
	})
);

export { darkTheme };
