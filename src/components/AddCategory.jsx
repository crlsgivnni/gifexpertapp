import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value) 
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueTrim = inputValue.trim();
        if(inputValueTrim.length <= 1) return;
        onNewCategory(inputValueTrim);
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder='Search Gifs'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
