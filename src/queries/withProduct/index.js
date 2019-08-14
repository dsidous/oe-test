import { lifecycle } from 'recompose';


const url = `${process.env.BASE_API_URL}products/`;

const withProduct = lifecycle({
  state: { loading: true },
  componentDidMount() {
    console.log(process.env.BASE_API_URL);
    fetch(`${url}${this.props.productId}`)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, ...data }));
  },
});

export default withProduct;
