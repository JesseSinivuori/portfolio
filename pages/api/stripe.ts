const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {

  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1MKdE9KqkQnb4BuXkkx57hWb' },
          { shipping_rate: 'shr_1MKdEZKqkQnb4BuXZK4lr3VT' },
        ],
        line_items: req.body.map((item: any) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace(
            'image-', 'https://cdn.sanity.io/images/y2w5k2uh/production/'
          ).replace('-webp', '.webp', '-jpeg', '.jpeg', '-png', '.png')

          return {
            price_data: {
              currency: 'eur',
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/store/success`,
        cancel_url: `${req.headers.origin}/store/canceled`,
        automatic_tax: { enabled: false },
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}