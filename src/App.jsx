import './App.css';
import CreditCardFront from './components/CreditCardFront/CreditCardFront';
import CreditCardBack from './components/CreditCardBack/CreditCardBack';
import CreditCardMain from './components/CreditCardMain/CreditCardMain';
import { useState } from 'react';

function App() {
	const [isFlipped, setIsFlipped] = useState(false);

	const [visibilityState, setvisibilityState] = useState({
		isBalanceVisible: true,
		isNumberVisible: true,
		isCVVVisible: true
	});

	const onDoubleClick = () => {
		setIsFlipped(!isFlipped);
	};

	const toggleField = (field) => {
		setvisibilityState((prevState) => ({
			...prevState,
			[field]: !prevState[field]
		}));
	};

	return (
		<div
			className={`card-container ${isFlipped ? 'is-flipped' : ''}`}
			onDoubleClick={onDoubleClick}
		>
			<div className="card-front">
				<CreditCardMain
					cardValue={
						<CreditCardFront
							visibilityState={visibilityState}
							toggleField={toggleField}
						/>
					}
				/>
			</div>
			<div className="card-back">
				<CreditCardMain
					cardValue={
						<CreditCardBack
							visibilityState={visibilityState}
							toggleField={toggleField}
						/>
					}
				/>
			</div>
		</div>
	);
}

export default App;
