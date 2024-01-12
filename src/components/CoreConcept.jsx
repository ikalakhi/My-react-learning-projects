export default function CoreConcept({image, titel, description}) {
    return(
        <li>
        <img src={image} alt="..."/>
        <h3>{titel}</h3>
        <p>{description}</p>
        </li>
    );
}
