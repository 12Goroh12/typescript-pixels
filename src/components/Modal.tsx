import React, { FC } from 'react'

interface ModalProps {
	src: string
	onClose: () => void
	autorName: string
	autorUrl: string
}

export const Modal: FC<ModalProps> = ({ src, onClose, autorName, autorUrl }) => {
	const [imageLoading, setImageLoading] = React.useState(true)


	return (
		<div className='modal is-active'>
			<div className="modal-background" onClick={onClose}></div>
			<div className="modal-content">
				{imageLoading ? <div className='loading-wrapper'> <div className='loading'></div> </div> : null}
				<img src={src} alt="" onLoad={() => setImageLoading(false)} className={imageLoading ? 'is-hidden' : ''} />
				{!imageLoading ? <p className='author'>Author: <a href={autorUrl} target='_blank' rel="noreferrer" >{autorName}</a></p> : null}
			</div>
			<button className="modal-close is-large" onClick={onClose}></button>
		</div>
	)
}
