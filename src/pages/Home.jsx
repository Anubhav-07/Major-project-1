import React from 'react'
import img from './img2.png'
import './home.css'
import './footer.css'
const counter = [
  {
      number: '2k',
      text: 'Clients'
  },
  {
      number: '350',
      text: 'Projects Running'
  },
  {
      number: '900',
      text: 'Projects Completed'
  }
]

const Home = () => {
  return (
    <>
    
      <section className="hero">
        
        <div className='container'>
          <div className='hero-wrapper'>
            <div className='hero-content'>
              <div>
                <h2>Elevate Your Online Presence</h2>
                <h2>Dominate the digital landscape with our expert marketing strategies.</h2>
                <h2 className='highlight'>Promote your brand !!</h2>
                <p description>Your success is our priority.</p>
              </div>
              <div className='hero-btns'>
                <button className='primay-btn'>Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <img src={img} className='hero-img' alt='hero'/>
      </section>
      <section className='counter'>
                <div className='counter-container'>
                    <div className='counter-wrapper'>{
                        counter.map((item, index) => (
                            <div className='counter-item' key={index}>
                                <h3 className='counter-number'>{item.number}+</h3>
                                <h4 className='counter-title'>{item.text}</h4>
                            </div>
                        ))
                    }


                    </div>
                </div>

            </section>
      
    </>
  )
}

export default Home;