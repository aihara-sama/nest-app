import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { darkTheme } from "../components/common/Themes";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Component {...pageProps} />;
		</ThemeProvider>
	);
}

export default MyApp;
