import { useState } from 'react';
import './App.css';

function App() {
	const [ counter, setCounter ] = useState(0);
	const [ array, setArray ] = useState([]);

  const head = {
    eye: 1,
    ear: 2,
    nose: 3
  }
  const {ear, ...rest} = head

  console.log(ear, rest)

	const ButtonComponent = ({action, buttonText}) => {
		return (
			<button className="button" onClick={action}>
				{buttonText}
			</button>
		);
	};

	const ListComponent = (props) => {
		return (
			<div>
				{props.array.map(({counter, done, uid}, index) => {
          return (
            <div className="list-item" key={index}>
						{counter}{done ? "DONE" : "NOT DONE"}
						<ButtonComponent action={() => props.removeAction(uid)} buttonText="REMOVE" />
						<ButtonComponent action={() => props.markDone(uid)} buttonText="DONE" />
					</div>
				)
      })}
			</div>
		);
	};

	const removeItemFromArray = (uid) => {
		const newArray = array.filter((item) => item.uid !== uid);
		setArray(newArray);
	};

  const markDone = (uid) => {
    const newArr = [...array]
    const elementIndex = array.findIndex(item => item.uid === uid)
    newArr[elementIndex] = {...newArr[elementIndex], done: !newArr[elementIndex].done}
    setArray(newArr)
  }

	return (
		<div className="App">
			<div>
				<ButtonComponent action={() => setCounter(counter - 1)} buttonText="-" />
				{counter}
				<ButtonComponent action={() => setCounter((s) => s + 1)} buttonText="+" />
			</div>
			<div>
				<ButtonComponent
					action={() => setArray((s) => [ ...s, { counter, uid: Date.now(), done: false} ])}
					buttonText="ADD TO ARRAY"
				/>
				<ListComponent array={array} removeAction={removeItemFromArray} markDone={markDone} />
			</div>
		</div>
	);
}

export default App;
