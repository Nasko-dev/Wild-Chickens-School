import "../../src/componants/PersonCard.css";

function PersonCard({ name, imgSrc, position, biography }) {
  return (
    <div className="person-card">
      <img src={imgSrc} alt={name} className="person-image" />
      <div className="Texte">
        <h2 className="person-name">{name}</h2>
        <h3>{position}</h3>
        <p className="person-biography">{biography}</p>
      </div>
    </div>
  );
}

export default PersonCard;
