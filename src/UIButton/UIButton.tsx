import React, {FC} from 'react';

export interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: string;
}

const UIButton: FC<UIButtonProps> = ({ 
	children,
	color,
	...props 
}) => {
	return (
		<button {...props} style={{ color }}>
			{ children }
		</button>
	);
};

export default UIButton;