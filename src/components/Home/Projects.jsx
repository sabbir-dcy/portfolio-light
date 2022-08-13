import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'tsushima production',
      details: 'A bycicle manufacturer website',
      img: 'https://i.ibb.co/9gG1cGP/project1-ss.webp',
      link: 'https://tsushima-corporation.web.app/',
      about: 'website of a bike/bycicle parts manufacturer comapany. Website contains home, dashboard and blog page. any user on the internet can access the website and see the parts on home page. however, parts can be ordered only after login. user and admin based routing. admin can not purchase product and can not review himself. on other hand user can not access admin panel.userjwt and admin jwt added for that. if any user or admin watn to access unauthorized route he will be redirect to home page logged in uesr can access dashboard with limited route.'
    },
    {
      name: 'offshore stockroom',
      details: 'Warehouse management website',
      img: 'https://i.ibb.co/jWVJ4L8/project2-ss.webp',
      link: 'https://offshore-stockroom.web.app/', about: 'admin/user can see the website homepage and login page initially. after login an access token will generate for that particular user. to manage 6 items in the home page user have to verify his email. verifyied user can manage top 6 inventory item, user can restock them and view detailed information. also, user can watch his/her included products in my liquor section. these are the products that will be fetched from server filtering user\'s email address.'
    },
    {
      name: 'font-bey',
      details: 'Custom google font',
      img: 'https://i.ibb.co/xsSRM8D/project3-ss.webp',
      link: 'https://fontbey.netlify.app/', about: 'Search google fonts. Search fonts by category also possible. Can copy single font url for css or user can add multipe fonts link to cart. Then copy the merged url.'
    },
  ]
  return (
    <div>
      <h2 className='mt-20 pb-2 border-b w-fit'>My sample projects</h2>
      <div className='space-y-8 mt-6'>
        {
          projects.map((project, index) => <SingleProject key={index} project={project}></SingleProject>)
        }
      </div>
    </div>
  );
};

const SingleProject = ({ project }) => {
  const { name, details, img, link, about } = project
  return <div className='grid xl:grid-cols-3 grid-cols-2 items-center gap-x-8'>
    <img src={img} className='w-80 border hover:scale-105 transition-all' alt="" />
    <div className='mt-4 space-y-2 ml-5'>
      <h2 className='text-xl'>{name}</h2>
      <p>{details}</p>
      <a href={link} target='_blank' rel='noreferrer' className='block'>
        <button
          className='px-6 h-9 text-white rounded bg-blue-600 hover:bg-blue-700 transition-colors'>visit site</button>
      </a>
    </div>
    <div className='hidden xl:block'>
      <p className='pl-4 border-l'>{about}</p>
    </div>
  </div>
}

export default Projects;