import React from 'react';
import "./Products.css"
import Product from './Product';


const Products = () => {
  return (
    <>
    <div className="products_row">
      <Product 
      
      id="1"
      title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation,& Xbox - 1-Year Rescue Service (STGX2000400)"
      price= {59.99}
      ratings= {4}
      image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg" alt="hard Drive image"
       />

      <Product 
      id="13578909"
      title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) 
      - Built-In Speakers and VESA Mounting
       -Height/Tilt Adjustment for Ergonomic Viewing
        - HDMI and DisplayPort - (1D0J9AA#ABA)"
      ratings={4}
      price={174.99}
      image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg" alt="monitor image"
      />
      <Product 
      id="167890SDF678"
      title="Corsair K65 RGB MINI 60% Mechanical Gaming Keyboard 
      (Customizable Per-Key RGB Backlighting, 
        CHERRY MX Speed Mechanical Keyswitches, Detachable USB Type-C Cable,
         AXON Hyper-Processing Technology) Black"
      ratings={3}
      price={108.99}
      image="https://m.media-amazon.com/images/I/81c97WZRqPL._AC_SL1500_.jpg" alt="keyboard image"
      
      />
    </div>
    <div className="products_row">
      <Product 
      id="b1"
      title="Razer Kraken V3 HyperSense Wired USB Gaming Headset w/Haptic Technology:
       Triforce Titanium 50mm Drivers - THX Spatial Audio - Hybrid Fabric
       & Leatherette Memory Foam Cushions - Detachable Mic"
      ratings={4}
      price={129.99}
      image="https://m.media-amazon.com/images/I/61hJqr7P+iL._AC_SX425_.jpg" alt=""
       />

      <Product 
      id="b13578909"
      title="Razer Seiren V2 X USB Microphone: 25mm Condenser Microphone - 
      Supercardioid Pickup Pattern - Digital Analogue Limiter -
       Mic Monitoring/Gain & Mute Buttons - Built-in Shock Absorber"
      ratings={4}
      price={99.99}
      image="https://m.media-amazon.com/images/I/61qCIrXKglL._AC_SX425_.jpg" alt=""/>

      <Product 
      id="b1678"
      title="PatioMage Gaming Chair Ergonomic Office Chair Headrest Lumbar 
      Support Comfortable High Back Adjustable Reclining Computer Chair with Footrest 
      Desk Chair PU Leather Swivel Chair"
      ratings={5}
      price={179.99}
      image="https://m.media-amazon.com/images/I/71v725lxBtL._AC_SY879_.jpg" alt=""/>
    </div>
    <div className="products_row">
      <Product 
      id="c1"
      title="Amazon Basics 12-Cup Digital Coffee Maker with Reusable Filter, Black and Stainless Steel"
      ratings={5}
      price={290.99}
      image="https://m.media-amazon.com/images/I/81SFEaWTVxL._AC_SX679_.jpg" alt=""
       />

      <Product 
      id="bc2"
      title="JBL - GO3 Portable Waterproof Wireless Speaker - Black (Renewed)"
      ratings={4}
      price={39.99}
      image="https://m.media-amazon.com/images/I/81nKxLtbQKL._AC_SX466_.jpg" alt=""/>

      <Product 
      id="c3"
      title="Amazon Essentials Men's Regular-fit Short-Sleeve Poplin Shirt"
      ratings={5}
      price={29.99}
      image="https://m.media-amazon.com/images/I/91WAtwQ+55L._AC_UX466_.jpg" alt=""/>
    </div>
    <div className="products_row">
      <Product 
      id="d1"
      title="AmazonCommercial Microwave Oven with Membrane Control, Stainless Steel, 1800-Watts, 0.6 Cubic Feet"
      ratings={4}
      price={129.99}
      image="https://m.media-amazon.com/images/I/81Mlelo7IZL._SX466_.jpg" alt=""
       />

      <Product 
      id="d2"
      title="Amazon.com Gift Card in a Mini Envelope"
      ratings={4}
      price={9.99}
      image="https://m.media-amazon.com/images/I/81sJe21t0JL._SX522_.jpg" alt=""/>

      <Product 
      id="d31678"
      title="Amazon Essentials Women's Studio Relaxed-Fit Lightweight Crewneck T-Shirt, Multipacks"
      ratings={3}
      price={19.99}
      image="https://m.media-amazon.com/images/I/71B-GnknMrS._AC_UY500_.jpg" alt=""/>
    </div>
    <div className="products_row">
      <Product 
      id="b1"
      title="Razer Kraken V3 HyperSense Wired USB Gaming Headset w/Haptic Technology:
       Triforce Titanium 50mm Drivers - THX Spatial Audio - Hybrid Fabric
       & Leatherette Memory Foam Cushions - Detachable Mic"
      ratings={4}
      price={129.99}
      image="https://m.media-amazon.com/images/I/61hJqr7P+iL._AC_SX425_.jpg" alt=""
       />

      <Product 
      id="b13578909"
      title="Razer Seiren V2 X USB Microphone: 25mm Condenser Microphone - 
      Supercardioid Pickup Pattern - Digital Analogue Limiter -
       Mic Monitoring/Gain & Mute Buttons - Built-in Shock Absorber"
      ratings={4}
      price={99.99}
      image="https://m.media-amazon.com/images/I/61qCIrXKglL._AC_SX425_.jpg" alt=""/>

      <Product 
      id="b1678"
      title="PatioMage Gaming Chair Ergonomic Office Chair Headrest Lumbar 
      Support Comfortable High Back Adjustable Reclining Computer Chair with Footrest 
      Desk Chair PU Leather Swivel Chair"
      ratings={5}
      price={179.99}
      image="https://m.media-amazon.com/images/I/71v725lxBtL._AC_SY879_.jpg" alt=""/>
    </div>
    </>
  )
}

export default Products
