import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
  return (
    <div>
          <div className='home'>
              <div className='home_container'>
                  <img className='home_img' src="https://m.media-amazon.com/images/I/61l4i7aoY2L._10X600_.jpg" alt=''/>

                  <div className='home_row'>
                      <Product
                          title="Apple iPhone 14 Pro Max 128GB Space Black"
                          image="https://m.media-amazon.com/images/I/610pghkO81L._AC_UY327_FMwebp_QL65_.jpg"
                          currency="Rs. "
                          price={127999}
                          rating={5}
                      />
                      <Product
                       title="Honor MagicBook 14, AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop (16GB/512GB PCIe SSD/Windows 11/Fingerprint Login/Metal Body/Backlit KB/1.38Kg), Gray, NobelM-WFQ9AHNE"
                          image="https://m.media-amazon.com/images/I/31bgVrI5qoL._AC_SR400,600_.jpg"
                          currency="Rs. "
                          price={40990}
                          rating={3}
                      />
              </div>

              <div className='home_row'>
                  <Product
                          title="Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X74K (Black)"
                          image="https://m.media-amazon.com/images/I/81wxS8abrgL._AC_UY327_FMwebp_QL65_.jpg"
                          currency="Rs. "
                          price={42990}
                          rating={5}
                      />
                      <Product
                          title="Apple Watch Series 8 [GPS + Cellular 41 mm] Smart Watch w/Midnight Aluminium Case with Midnight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always- On Retina Display, Water Resistant"
                          image="https://m.media-amazon.com/images/I/71FeKU41G1L._SX679_.jpg"
                          currency="Rs. "
                          price={55999}
                          rating={4}
                      />
                      <Product
                          title="Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation) - Black"
                          image="https://m.media-amazon.com/images/I/61EGyktwgTL._SX679_.jpg"
                          currency="Rs. "
                          price={69490}
                          rating={5}
                      />
              </div>

              <div className='home_row'>
                  <Product
                       title="pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless, Stereo Audio, Touch Control TWS, with Mic, Type-C Fast Charging, IPX4 & Voice Assistance (Black)"
                          image="https://m.media-amazon.com/images/I/51ZT3aMrJIL._SX679_.jpg"
                          currency="Rs. "
                          price={599}
                          rating={4}
                      />
                  </div>
                  
              </div>

        </div>
    </div>
  )
}

export default Home
