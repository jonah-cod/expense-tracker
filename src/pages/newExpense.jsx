import React from 'react'

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <h2>Record expense</h2>
      <div className="form-expense">
        <form action="">
          <input type="text" placeholder='expense'/>
          <select name="" id="">
            <option value="luxury">luxury</option>
            <option value="basic">basic</option>
            <option value="investment">investment</option>
          </select>
          <button type="submit">record</button>
        </form>
      </div>
    </div>
  )
}

export default NewExpense