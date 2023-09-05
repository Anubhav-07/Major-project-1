import React from 'react'
import './portfolio.css'
import './social-campaign.png'
function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Portfolio() {
  const projects = [
    {
      title: 'Social Media Campaign',
      description: 'Increased client engagement by 150% through targeted social media strategies.',
      imageUrl: 'https://img.freepik.com/premium-photo/social-media-icons-logos-with-3d-space-rocket-digital-social-media-marketing-background_125322-391.jpg',
    },
    {
      title: 'SEO Optimization',
      description: 'Achieved top Google search rankings for key industry keywords, resulting in a 300% increase in organic traffic.',
      imageUrl: 'https://img.freepik.com/premium-vector/seo-search-engine-optimization-concept-vector-illustration_185038-486.jpg',
    },
    {
      title: 'Content Creation',
      description: 'Developed compelling blog posts and videos that drove audience engagement and brand awareness.',
      imageUrl: 'https://thumbs.dreamstime.com/b/content-creation-word-cloud-concept-grey-background-90879258.jpg',
    },
    {
      title: 'Content Marketing',
      description: 'Developed and promoted high-quality content resulting in a 30% increase in leads.',
      imageUrl: 'https://media.istockphoto.com/id/1186285220/photo/content-marketing-news-social-media-websites-and-advertising-concept.jpg?s=612x612&w=0&k=20&c=God3SFRiRoXlE1CZfLy7otuCtDz9OgP-JrDNEQLQrYQ=',
    }
  ];

  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

  

export default Portfolio