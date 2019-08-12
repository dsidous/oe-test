import { compose, withProps } from 'recompose';

import ProductPage from '../../templates';

export default compose(
  //withProps(props => ({ productId: props.match.params.productId })),
)(ProductPage);
