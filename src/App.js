import "./App.css";
import Profil from "./Profil/Profil";

function App() {
    const handleName = (x, y) => alert(`fullname :${x}  bio: ${y}`);

    return (
        <div className="App">
            <Profil
                fullname= "Sarra"
                bio="fb:SARRA"
                profession="DEVELOPPEUSE"
                handlalert={handleName}
            >
                <img src="nature.jpg" alt="nature" />
            </Profil>
        </div>
    );
}

export default App;
