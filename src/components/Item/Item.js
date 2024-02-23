import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="item">
      <img src={pictureUrl} alt={title} className="item-image" />
      <h2 className="item-title">{title}</h2>
      <p className="item-price">${price}</p>
      <Link to={`/item/${id}`} className="item-detail-link">
        Ver detalle del producto
      </Link>
    </div>
  );
};

export default Item;
