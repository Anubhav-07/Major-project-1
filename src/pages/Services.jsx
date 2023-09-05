import React from 'react';
import './services.css'
function ServiceCard({ icon,title, desc }) {
  return (
    <div className="service-card">
      <i className="service-icon">{icon} </i>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon:<i class= "bi bi-collection-play"/>,
      title: " Search Engine Optimization",
      desc: " Boost your search rankings and organic traffic."
    },
    {
      icon: <i class="bi bi-badge-ad"/>,
      title: " Pay-Per-Click Advertising",
      desc: "Pay-Per-Click Advertising "
    },
    {
      icon: <i class="bi bi-instagram "/>,
      title: "Social Media Marketing ",
      desc: "Engage and expand your audience on social platforms. "
    },
    {
      icon:<i class="bi bi-code-slash"/>,
      title: 'Web Development',
      desc: 'We create modern and responsive websites tailored to your needs.',
    },
    {
      icon:<i class="bi bi-layers"/> ,
      title: 'Graphic Design',
      desc: 'Our designers craft visually appealing graphics for your brand.',
    },
    {
      icon:<i class="bi bi-phone"/>,
      title: 'Mobile App Development',
      desc: 'Our team develops mobile apps that deliver a seamless user experience.',
    },
  
  ];

  return (
    <div className="services-page">
      <h4 className='subtitle'>Our Services</h4>
            <h2>Save time managing your buisness with</h2>
            <h2 className='highlight'>our best services</h2>

      <div className="service-cards">
        {services.map((service, index) => (
          
          <ServiceCard key={index} icon={service.icon} title={service.title} desc={service.desc} />
        ))}
      </div>
    </div>
  );
}

export default Services;