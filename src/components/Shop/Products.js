import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

        <ProductItem
          title='Burgir'
          price={2}
          description='This is finest burger we have!'
        />

          <ProductItem
          title='Chicken Biryani'
          price={6}
          description='Hyderabadi Style, Must Try!'
        />

        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
