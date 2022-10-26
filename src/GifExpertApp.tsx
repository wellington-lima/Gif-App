import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory: string) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <div className="container">
        <h1>Gif App</h1>
      </div>

      <AddCategory
        onNewCategory={(value: string) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))
      }
    </>
  )
}