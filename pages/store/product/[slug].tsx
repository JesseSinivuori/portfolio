import { client, urlFor } from '../../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from
  'react-icons/ai'
import { Product } from '../components'
import { useEffect, useState } from 'react'
import { useStateContext } from '../../../context/StateContext'


export default function ProductDetails({ products, product }: any) {

  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart, setQty }: any = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }

  useEffect(() => {
    setQty(1)
    setIndex(0)
  }, [product])

  return (
    <div>
      <div className="product-detail-container flex flex-1 flex-wrap justify-start">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])}
              className='product-detail-image'
              alt={`Image of ' ${name}`}
            />
          </div>
          <div className='small-images-container'>
            {image?.map((item: any, i: number) => (
              <img key={item?._id} src={urlFor(item)}
                className={i === index ? 'small-image selected-image' :
                  'small-image'}
                alt={`Image of ' ${name}`}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='product-detail-desc flex-wrap justify-center'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div className='stars'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className='price'>€{price}</p>
          <div className='quantity flex flex-wrap justify-center  '>
            <div className='justify-start'>
              <h3 className=''>Quantity: </h3>
            </div>
            <div className=' m-4 '>
              <p className='quantity-desc  '>
                <span className='minus' onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className='num'>
                  {qty}
                </span>
                <span className='plus' onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
          </div>
          <div className='buttons flex xss:mt-4 mt-8'>
            <div className='flex flex-wrap justify-center '>
              <button type='button' className='add-to-cart mr-2 xss:mr-4 mt-4 xss:mt-4'
                onClick={() => onAdd(product, qty)}>
                Add to Cart
              </button>
              <button type='button' className='buy-now  mr-2 xss:mr-4 mt-4 xss:mt-4 '
                onClick={() => handleBuyNow()}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee '>
          <div className='maylike-products-container track '>
            {products.map((item: any) => (
              <div className=''>
                <Product product={item} key={item._id} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>

  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current,
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: { products, product }
  }
}