import Title from "../common/Title";
import DATA from "../../constant/myData";
import PropTypes from "prop-types";

const Skill = () => {
  return (
    <div className="skill-sc resume-block">
      <div className="container">
        <div className="skill-content dotted-border-left">
          <Title titleText={"Skills"} />
          <div className="skill-list grid">
            {DATA.skills?.map((item) => (
              <SkillItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

const SkillItem = ({ item }) => {
  return <div className="skill-item text-center" key={item.id} alt={item.name}>
    <div className="skill-icon">
        <img src={item.icon} alt={`${item.name} Logo`} />
    </div>
    <div className="skill-info">
        <h3 className="skill-name">{item.name}</h3>
        <p className="skill-description text">{item.description}</p>
    </div>
  </div>;
};

SkillItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
