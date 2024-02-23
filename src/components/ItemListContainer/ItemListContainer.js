import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { fetchProductos } from '../../mocks/async-mocks';

const categorias = {
  'antenas-gama-baja': 'ANTENAS GAMA BAJA',
  'antenas-gama-media': 'ANTENAS GAMA MEDIA',
  'antenas-gama-alta': 'ANTENAS GAMA ALTA',
};

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const categoria = categorias[categoryName];
    fetchProductos(categoria).then(productosFiltrados => {
      setProductos(productosFiltrados);
    });
  }, [categoryName]);

  return (
    <div>
      <h1>{categoryName ? `Categoría: ${categorias[categoryName]}` : "Todos los productos"}</h1>
      <ItemList items={productos} />
    </div>
  );
};

export default ItemListContainer;
