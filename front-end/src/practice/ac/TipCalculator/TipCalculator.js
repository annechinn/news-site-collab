import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

import './TipCalculator.css';

function TipInput({tipPercentage, tipPercentageOptions, updateBill, updateTipPercentage, updateNumPeople}) {
  const [customVisible, updateCustomVisible] = useState(false);

  return (
    <div className="tip-input">
    <div>
      <div className="label">Bill</div>
      <div><input type='text' onChange={({target})=>updateBill(parseInt(target.value))}/></div>
    </div>

    <div>
      <div className="label">Select Tip %: {tipPercentage}</div>
      <div class="tip-amnt-grid">
        {tipPercentageOptions.map(x=> {
          if (x.value==='?') {
            return (
              <div>
                <Button key={x.value} variant='light' size="sm"
                    onClick={()=>updateCustomVisible(true)}>{x.label}
                </Button>
              </div>
            )
          }
          else {
            return (
              <Button key={x.value} variant={x.default?'primary':'secondary'} size="sm"
                onClick={()=>updateTipPercentage(parseInt(x.value))}>
                  {x.label}
            </Button>
            )
          }
        }
        )}
      </div>
    </div>

    {customVisible?

    <div>
      <div className="label">Custom Percentage</div>
      <input type='text' onChange={({target})=>updateTipPercentage(parseInt(target.value))}/>
    </div>
    :
    <></>
    }

    <div>
      <div className="label">Number of People</div>
      <div><input type='text' onChange={({target})=>updateNumPeople(parseInt(target.value))} /></div>
    </div>
    </div>
  )
}

function TipOutput({tipPercentage, numPeople, bill}) {

  function calculateTipPerPerson() {
    return (bill*(tipPercentage/100))/numPeople;
  }

  function calculateTotalPerPerson() {
    return (bill/numPeople) + calculateTipPerPerson();
  }

  return (
    <div className="tip-output">
    <div>
      <div className="label">Tip Amount /person</div>
      <div className="tip-amnt-per-person">{calculateTipPerPerson().toFixed(2)}</div>
    </div>
    <div>
      <div className="label">Total /person</div>
      <div className="total-amnt-per-person">{calculateTotalPerPerson().toFixed(2)}</div>
    </div>
  </div>
  )

}

export default function TipCalculator() {
  const [tipPercentage, updateTipPercentage] = useState(15);
  const [bill, updateBill] = useState(0);
  const [numPeople, updateNumPeople] = useState(0);

  const tipPercentageOptions = [
    {value: '5', label: '5%', default:false},
    {value: '10', label: '10%', default:false},
    {value: '15', label: '15%', default:true},
    {value: '25', label: '25%', default:false},
    {value: '50', label: '50%', default:false},
    {value: '?', label: 'Custom', default:false}
  ];

  return (
    <>
      <div className="calculator">
        <TipInput 
          tipPercentage={tipPercentage}
          tipPercentageOptions={tipPercentageOptions}
          updateTipPercentage={updateTipPercentage}
          updateBill={updateBill}
          updateNumPeople={updateNumPeople} />

        <TipOutput 
          bill={bill} 
          tipPercentage={tipPercentage}
          numPeople={numPeople} />
      </div>
    </>
  );

}