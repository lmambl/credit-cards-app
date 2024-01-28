import './CreditCardBack.css';

function CreditCardBack() {
	return (
		<>
			<img
				className="credit-card__back-logo absolute-position"
				src="/mastercard_logo_back.svg"
				alt=""
			/>
			<p className="credit-card__back-data absolute-position">Date</p>
			<p className="credit-card__back-data-number absolute-position">
				09/25
			</p>
			<p className="credit-card__back-CVV absolute-position">CVV</p>
			<p className="credit-card__back-CVV-number absolute-position">
				1289
			</p>

			<img
				className="credit-card__back-chip absolute-position"
				src="/chip.svg"
				alt=""
			/>
		</>
	);
}

export default CreditCardBack;
