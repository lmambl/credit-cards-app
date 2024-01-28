import './App.css';
import CreditCardFront from './components/CreditCardFront/CreditCardFront';
import CreditCardBack from './components/CreditCardBack/CreditCardBack';
import CreditCardMain from './components/CreditCardMain/CreditCardMain';

function App() {
	return (
		<>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<CreditCardMain cardValue={<CreditCardFront />} />
					</div>

					<div className="flip-card-back">
						<CreditCardMain cardValue={<CreditCardBack />} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
