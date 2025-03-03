import React, { useEffect, useRef } from 'react';
import { Check, Award } from 'lucide-react';
import '../styles/Expertise.css';

const Expertise: React.FC = () => {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const expertiseAreas = [
    { 
      title: 'Business Websites', 
      description: 'Professional sites to showcase your company and services.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'Educational Websites', 
      description: 'Online learning platforms, courses, and resources.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'Non-Profit Websites', 
      description: 'Support your mission with an engaging digital presence.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'Personal Websites', 
      description: 'Blogs, portfolios, and personal branding.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'Forum & Wiki Websites', 
      description: 'Community-driven platforms for discussions and collaboration.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'News & Entertainment', 
      description: 'Stay informed and entertained with dynamic content.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'E-commerce & Classified', 
      description: 'Buy, sell, and trade online with ease.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'Real Estate & Job Portals', 
      description: 'Helping users find opportunities and properties.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'Healthcare & Technology', 
      description: 'Informative and cutting-edge solutions for modern needs.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      title: 'Travel & Search Platforms', 
      description: 'Seamless experiences for explorers and researchers.',
      icon: <Award size={24} />,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="expertise" className="expertise" ref={expertiseRef}>
      <div className="section-header">
        <h2>Our Expertise</h2>
        <p>We build and design websites across various domains</p>
      </div>
      
      <div className="expertise-container">
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index} 
              className="expertise-card"
              ref={el => itemsRef.current[index] = el as HTMLLIElement}
            >
              <div className="expertise-image-container">
                <img src={area.image} alt={area.title} className="expertise-image" />
              </div>
              <div className="expertise-icon">
                {area.icon}
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="expertise-check">
                <Check size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;