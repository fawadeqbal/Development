import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Badge, Typography } from '@material-ui/core';

function CartIcon({ cart }) {
  const cartItemsCount = cart?.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      <Typography component="span">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </Typography>
      {cartItemsCount > 0 && (
        <Badge color="primary" badgeContent={cartItemsCount}>
          <Typography component="span">Cart</Typography>
        </Badge>
      )}
    </div>
  );
}

export default CartIcon;
