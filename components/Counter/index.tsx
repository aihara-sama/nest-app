import { Button, ButtonTypeMap, TextField } from "@mui/material";
import React, {
	ChangeEvent,
	ChangeEventHandler,
	DetailedHTMLProps,
	FunctionComponent,
	useRef,
	createElement,
} from "react";

const Counter: FunctionComponent = ({ children }) => {
	const clickCB = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const ref = useRef();

	return (
		<button onClick={clickCB}>
			<button value={["1", "2"]} onClick={clickCB}>
				Button
			</button>
		</button>
	);
};

export default Counter;
