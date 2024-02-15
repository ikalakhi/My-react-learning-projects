import Img from "../../assets/components.png";
import "./Header.css"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRanmdomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const descriptions = reactDescriptions[getRanmdomInt(2)];
  
    return (
      <header>
        <img src={Img} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriptions} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }