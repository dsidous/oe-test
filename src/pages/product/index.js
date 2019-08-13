import { compose, withProps } from 'recompose';

import withProduct from '../../queries/withProduct';
import Product from '../../templates/Product';

export default compose(
  withProps(props => ({ productId: props.match.params.id })),
  withProduct,
)(Product);
