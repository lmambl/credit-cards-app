/* eslint-disable react/prop-types */
import './CreditCardBack.css';

function CreditCardBack({ visibilityState, toggleField }) {
	return (
		<div className="credit-card__back">
			<div className="credit-card__back-top-logo">
				<img
					className="credit-card__back-logo"
					src="/mastercard_logo_back.svg"
					alt=""
				/>
			</div>
			<div className="credit-card__back-midle-info">
				<div className="credit-card__back-midle-info-date">
					<p className="credit-card__back-data">Date</p>
					<p className="credit-card__back-data-number">09/25</p>
				</div>
				<div className="credit-card__back-midle-info-CVV">
					<p className="credit-card__back-CVV">CVV</p>
					<p
						onClick={() => toggleField('isCVVVisible')}
						className={`credit-card__back-CVV-number  ${
							visibilityState.isCVVVisible ? 'filter' : ''
						}`}
					>
						1289
					</p>
				</div>
			</div>
			<div className="credit-card__back-bottom-logo">
				<img
					className="credit-card__back-chip"
					src="/chip.svg"
					alt=""
				/>
			</div>
		</div>
	);
}

export default CreditCardBack;
