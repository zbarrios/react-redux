import { createContext, useState } from 'react';
export const FilterContext = createContext("");

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    category: 'Todas',
    search: '',
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};


export const initialProducts = [
  { id: 1, name: "Zapatillas Deportivas", category: "Zapatos", price: 59.99 },
  { id: 2, name: "Camiseta Básica", category: "Camisetas", price: 19.99 },
  { id: 3, name: "Gorra de Béisbol", category: "Accesorios", price: 14.99 },
  { id: 4, name: "Abrigo de Lana", category: "Abrigos", price: 89.99 },
  { id: 5, name: "Sandalias", category: "Zapatos", price: 29.99 },
  { id: 6, name: "Camiseta Gráfica", category: "Camisetas", price: 24.99 },
  { id: 7, name: "Bufanda", category: "Accesorios", price: 12.99 },
  { id: 8, name: "Chaqueta de Cuero", category: "Abrigos", price: 129.99 },
];
