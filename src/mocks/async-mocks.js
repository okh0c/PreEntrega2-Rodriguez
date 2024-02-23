const productos = [
  { id: 1, category: 'ANTENAS GAMA MEDIA', title: 'ALFA AWUS1900 Antena WiFi USB AC1900 doble banda dual', disponibility: '5', price: 56.90, pictureUrl: '/img_products/ALFA-AWUS1900-01.jpg' },
  { id: 2, category: 'ANTENAS GAMA BAJA', title: 'ALFA AWUS036AC Antena WiFi USB dual 5Ghz Realtek RTL8812AU', disponibility: '9', price: 42.90, pictureUrl: '/img_products/alfa-036AC-001.jpg' },
  { id: 3, category: 'ANTENAS GAMA MEDIA', title: 'ALFA AWUS036ACS Antena WiFi AC750 Realtek RTL8811AU', disponibility: '6', price: 27.90, pictureUrl: '/img_products/AWUS036ACS.jpg' },
  { id: 4, category: 'ANTENAS GAMA ALTA', title: 'Adaptador WiFi USB Alfa Network AWUS036ACHM AC1200 Doble banda MTK', disponibility: '5', price: 27.90, pictureUrl: '/img_products/Adaptador-WiFi-USB-Alfa-Network-AWUS036ACHM-1.jpg' },
];

export const fetchProductos = (categoria) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (categoria) {
        resolve(productos.filter(producto => producto.category === categoria));
      } else {
        resolve(productos);
      }
    }, 1000); 
  });
};

export const fetchProductoById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const producto = productos.find(producto => producto.id === parseInt(id));
      resolve(producto);
    }, 1000); 
  });
};
