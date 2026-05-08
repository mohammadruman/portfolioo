import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h2 style={{ marginTop: '20px', fontSize: '1.2rem' }}>Languages</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <h2 style={{ marginTop: '20px', fontSize: '1.2rem' }}>Frameworks</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <h2 style={{ marginTop: '20px', fontSize: '1.2rem' }}>AI/LLM</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="LLM APIs" />
        <SkillList src={checkMarkIcon} skill="Prompt Engineering" />
        <SkillList src={checkMarkIcon} skill="RAG" />
        <SkillList src={checkMarkIcon} skill="Semantic Search" />
      </div>
      <hr />
      <h2 style={{ marginTop: '20px', fontSize: '1.2rem' }}>Tools & Platforms</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="Postman" />
        <SkillList src={checkMarkIcon} skill="Linux" />
        <SkillList src={checkMarkIcon} skill="Docker" />
      </div>
      <hr />
      <h2 style={{ marginTop: '20px', fontSize: '1.2rem' }}>Databases</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL" />
      </div>
    </section>
  );
}

export default Skills;
