/* eslint-disable react/prop-types */
import './CreditCardFront.css';
function CreditCardFront({ visibilityState, toggleField }) {
	return (
		<div className="credit-card__front">
			<div className="credit-card__front-top">
				<p className="credit-card__front-balance ">Current Balance</p>
				<p
					onClick={() => toggleField('isBalanceVisible')}
					className={`credit-card__front-money  ${
						visibilityState.isBalanceVisible ? 'filter' : ''
					}`}
				>
					$5,750,20
				</p>
				<p
					onClick={() => toggleField('isNumberVisible')}
					className={`credit-card__front-number  ${
						visibilityState.isNumberVisible ? 'filter' : ''
					}`}
				>
					5282 3456 7890 1289
				</p>
			</div>
			<div className="credit-card__front-bottom">
				{' '}
				<img
					className="credit-card__front-logo"
					src="/mastercard_logo.svg"
					alt=""
				/>
				<p className="credit-card__front-data">09/25</p>
			</div>
		</div>
	);
}

export default CreditCardFront;
