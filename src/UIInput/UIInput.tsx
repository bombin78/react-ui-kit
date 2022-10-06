import React, { FC } from 'react';
import './MyInput.css';


export interface UIInputProps {
	label: string;
	placeholder: string;
}

const UIInput: FC<UIInputProps> = ({label, placeholder, ...props}) => {

	return (
		<label>
			{ label }
			<input className="ui-input" placeholder={ placeholder } {...props} />
		</label>
	);
};

export default UIInput;