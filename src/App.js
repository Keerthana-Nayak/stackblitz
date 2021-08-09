import { useState } from 'react';
import React from 'react';
import './style.css';

export default function App() {
  const [inputValue, setInput] = useState('Hello');
  const [txtValue, setTxt] = useState('This is Text-Area');
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState();
  const [selectedGender, setSelectedGender] = useState('Female');

  function onChangeText(event) {
    // console.log(event);
    setInput(event.target.value);
  }

  function onChangeCheck(event) {
    // console.log(event);
    setChecked(crntValue => {
      return !crntValue;
    });
  }

  function onChangeTxt(event) {
    // console.log(event);
    setTxt(event.target.value);
  }

  function onChangeSelect(event) {
    setSelected(event.target.value);
  }

  function onChangeRadio(event) {
    console.log(event.target.id);
    setSelectedGender(event.target.id);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>
        Start editing to see some magic happen <b>:-)</b>
      </p>
      <hr />
      <input value={inputValue} onChange={onChangeText} />
      <hr />
      <input type="checkbox" onChange={onChangeCheck} checked={checked} />
      <hr />
      <textarea value={txtValue} onChange={onChangeTxt} />
      <hr />
      <select name="teams" value={selected} onChange={onChangeSelect}>
        <option value="Team-A">Team-A</option>
        <option value="Team-B">Team-B</option>
        <option value="Team-C">Team-C</option>
        <option value="Team-D">Team-D</option>
      </select>
      <hr />
      <input
        type="radio"
        name="gender"
        id="Male"
        onChange={onChangeRadio}
        checked={selectedGender == 'Male'}
      />
      <label>Male</label>
      <br />
      <input
        type="radio"
        name="gender"
        id="Female"
        onChange={onChangeRadio}
        checked={selectedGender == 'Female'}
      />
      <label>Female</label>
      <br />
      <input
        type="radio"
        name="gender"
        id="Other"
        onChange={onChangeRadio}
        checked={selectedGender == 'Other'}
      />
      <label>Other</label>
    </div>
  );
}
