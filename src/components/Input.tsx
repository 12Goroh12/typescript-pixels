import React, { FC, InputHTMLAttributes } from 'react'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ type = 'text', placeholder, value, name, onChange }) => {
	return (
		<div className="filed mb-0">
			<div className="control">
				<input
					className='input is-large'
					type={type}
					placeholder={placeholder}
					name={name}
					onChange={onChange}
					id={name}
					value={value}
					required
					autoComplete='off'
				/>
			</div>
		</div>
	)
}
export default Input