import { lifecycle } from 'recompose';


const withProduct = lifecycle({
  state: { loading: true },

  componentDidMount() {
    const url = `${process.env.BASE_API_URL}products/${this.props.productId}`;

    fetch(`${url}`)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, ...data }));
  },
});

export default withProduct;
