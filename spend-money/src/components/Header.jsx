import { useState } from "react"


const Header = ({money, total, changeMoney}) => {
  const [numberValue, setNumberValue] = useState(0)
  
  function handleChange(e){
    setNumberValue(e.target.value)
  }
  
  
  return (
    <div>
      <div>Remaining money ${money - total}</div> 
      {
        money - total <= 0 ? <div>You're out of money</div> : ""
      }
      <div>
        <input 
          type="number"
          min={0}
          onChange={handleChange}
          value={numberValue}
        />
        <button onClick={()=>changeMoney(numberValue)}>setMoney</button>
        
      </div>
    </div>
  )
}

export default Header
