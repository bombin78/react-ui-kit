import React, {FC} from 'react';
import './UIButton.css'


export interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: string;
	size?: string;
}

const UIButton: FC<UIButtonProps> = ({ 
	children,
	color,
	size,
	...props 
}) => {
	const styles = [
		'ui-button',
		size === 'big' ? 'big-btn' : null,
	];

	return (
		<button {...props} className={styles.join(' ')} style={{ color }}>
			{ children }
		</button>
	);
};

export default UIButton;