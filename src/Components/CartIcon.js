import { Badge, Typography } from '@material-ui/core';

function CartIcon({ cart }) {
  const cartItemsCount = cart?.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      {cartItemsCount >= 0 && (
        <Badge color="primary" badgeContent={cartItemsCount}>
          <Typography component="span">Cart</Typography>
        </Badge>
      )}
    </div>
  );
}

export default CartIcon;
