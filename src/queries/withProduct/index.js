import { withProps } from 'recompose';

const withProduct = withProps(
  props => ({ productId: props.productId }),
);

export default withProduct;
