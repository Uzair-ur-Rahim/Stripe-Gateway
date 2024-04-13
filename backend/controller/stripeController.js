import stripePackage from 'stripe';

import dotenv from "dotenv";

dotenv.config(); 

const stripe = stripePackage(process.env.STRIPE_SECRET_API);
export const stripeGateway = async(req,res)=>{
    try {

        const session = await stripe.checkout.sessions.create({
         
            payment_method_types:["card"],
            mode:"payment",
            line_items:req.body.items.map(item=>{
                return {
                    price_data:{
                        currency:"USD",
                        product_data:{
                            name:item.name
                        },
                        unit_amount:(item.price) * 100
                    },
                    quantity:item.quantity
                }
            }),
            success_url:"http://localhost:5173/success",
            cancel_url:"http://localhost:5173/cancel"
        })

        res.json({url:session.url})

    } catch (error) {
        res.status(500).json({error:error.message})
    }


};