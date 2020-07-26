//dependencies
import React from 'react';
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { setCounter } from './actions/test_actions';

const App = () => {

	const dispatch = useDispatch();
	const { counter } = useSelector(state => state.testReducer);

	const handleCounter = () => {
		dispatch(setCounter(counter + 6));
	}

	return (
		<div>
			<button onClick={handleCounter}>click</button>
			<h1>{counter}</h1>
		</div>
	)
}

export default App;
