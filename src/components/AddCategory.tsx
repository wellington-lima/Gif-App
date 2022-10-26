import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }: any) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement> ) => {
    setInputValue(target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const heroe = inputValue.trim();

    if(heroe.length <=1 ) return; //adiciona à lista apenas foi digitado pelo menos 2 caracteres

    onNewCategory(heroe);
    setInputValue('');

  }

  return(
    <form onSubmit={ onSubmit }>
      <input 
        type='text'
        placeholder='Digite o tema para o qual deseja buscar gifs e pressione ENTER'
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}