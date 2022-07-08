import Counter from "../../components/Counter";

describe("Login", () => {
	it("playground", () => {
		cy.mount(<Counter />);
		cy.contains("Button");
	});
});

export {};
