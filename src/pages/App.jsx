import Button from "../components/Button";
import Card from "../components/Card";
import "../styles/App.css";

function App() {
  return (
    // Responsive cols belum bener
    <div className="grid grid-cols-4 gap-28 ">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
