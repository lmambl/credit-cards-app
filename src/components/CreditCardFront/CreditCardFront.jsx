import { useState } from 'react';
import './CreditCardFront.css';
function CreditCardFront() {
	const [showBalance, setShowBalance] = useState(true);

	return (
		<>
			<p className="credit-card__front-balance absolute-position">
				Current Balance
			</p>
			<p
				onClick={() => setShowBalance(showBalance ? false : true)}
				className={`credit-card__front-money absolute-position ${
					showBalance ? 'filter' : ''
				}`}
			>
				$5,750,20
			</p>
			<img
				className="credit-card__front-logo absolute-position"
				src="/mastercard_logo.svg"
				alt=""
			/>
			<p className="credit-card__front-number absolute-position">
				5282 3456 7890 1289
			</p>
			<p className="credit-card__front-data absolute-position">09/25</p>
		</>
	);
}

export default CreditCardFront;
