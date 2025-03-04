import React, { useEffect, useRef } from 'react';
import { Globe, ShoppingCart, Code, Palette, BarChart, Smartphone } from 'lucide-react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      serviceItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const services = [
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      description: "Custom websites built with the latest technologies to meet your specific needs.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart size={40} />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to increase your online visibility and reach.",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    
    {
      icon: <Code size={40} />,
      title: "Custom Software",
      description: "Tailored software solutions to streamline your business processes.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user experiences that keep visitors coming back.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce Solutions",
      description: "Powerful online stores with secure payment gateways and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section id="services" className="services" ref={servicesRef}>
      <div className="section-header">
        <h2>Our Services</h2>
        <p>We specialize in web development and digital marketing, offering a full range of services</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-overlay"></div>
            </div>
            <div className="service-content">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;