import { defineConfig } from "cypress";
import cypressCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			cypressCoverageTask(on, config);
			return config;

			// implement node event listeners here
		},
		baseUrl: "http://localhost:3000",
		specPattern: "cypress/e2e/**/*.test.{js,jsx,ts,tsx}",
	},

	component: {
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
		setupNodeEvents(on, config) {
			cypressCoverageTask(on, config);
			return config;

			// implement node event listeners here
		},
		supportFile: "cypress/support/component.ts",
		specPattern: "cypress/component/**/*.test.{js,jsx,ts,tsx}",
		indexHtmlFile: "cypress/support/component-index.html",
		video: false,
		screenshotsFolder: "cypress/scheenshots",
	},
});
