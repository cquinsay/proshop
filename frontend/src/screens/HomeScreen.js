import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import Paginate from '../components/Paginate';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';
import ProductCarousel from '../components/ProductCarousel';


const HomeScreen = () => {

  const { keyword } = useParams()
  const { pageNumber } = useParams() || 1
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList


  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))

  }, [dispatch, keyword, pageNumber])


  return <>
    <Meta />
    {!keyword ? <ProductCarousel /> : (
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
    )}
    <h1>Latest Products</h1>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id} className='align-items-stretch'>
              <Product product={product} />
            </Col>
          ))}

        </Row>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
      </>)

    }
  </>;
};

export default HomeScreen;
