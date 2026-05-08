import styles from './ProjectsStyles.module.css';

import imageblog from '../../assets/imageblog.png';
import ProjectCard from '../../common/ProjectCard';
import { LOGO_URL } from '../../assets/Constants';
import { Chat_app_logo } from '../../assets/Constants';
import agentImage from '../../assets/agent.avif';
import confession_logo  from '../../assets/image.png';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Featured Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={agentImage}
          link="https://github.com/mohammadruman/Price-prediction-agent"
          h3="Price Prediction Agent"
          p="AI Price Prediction Tool"
          imgStyle={{ maxWidth: '200px' }}
        />
        <ProjectCard
          src={LOGO_URL}
          link="https://github.com/mohammadruman/Kampus-Eats"
          h3="Kampus Eats"
          p="Campus Food Delivery"
        />
         <ProjectCard
          src={imageblog}
          link="https://github.com/mohammadruman/Kiit-EduDiary"
          h3="KIIT EduDiary"
          p="Education & Diary App"
        />
        <ProjectCard
          src={confession_logo}
          link="https://github.com/mohammadruman/Confessionpage"
          h3="Confessify Web App"
          p="Confession Page"
        />
       
      </div>
    </section>
  );
}

export default Projects;
