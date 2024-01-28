import './App.css';
import CreditCardFront from './components/CreditCardFront/CreditCardFront';
import CreditCardBack from './components/CreditCardBack/CreditCardBack';
import CreditCardMain from './components/CreditCardMain/CreditCardMain';
// import { useState } from 'react';
function App() {
	// const [showBalance, setShowBalance] = useState(true); // Изначально показываем баланс

	// const handleCheckboxChange = () => {
	//     setShowBalance(!showBalance); // Изменяем состояние чекбокса
	// };
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
			{/* <div>
				<label htmlFor="">
					Изменить видимость элементов <input type="checkbox" checked={showBalance} onChange={handleCheckboxChange} />
				</label>
				showBalance={showBalance}
			</div> */}
		</>
	);
}

export default App;
