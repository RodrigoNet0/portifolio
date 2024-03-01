import "./Skills.css";

function Skills (){
    return (
        <main>
            <div className="container-skills">
                <h1 className="name-skills">Skills</h1>
            </div>
            <div className="container-card">
                <ul className="ul-skills">
                    <li className="li-skills">
                    <div className="card">
      <div className="card-content">
        <strong>Comunicação Efetiva</strong>
        <p>A habilidade de se expressar de forma clara e concisa, e de ouvir atentamente, facilitando a colaboração e a resolução de problemas.</p>
      </div>
      </div>
                    </li>
                    <li className="li-skills">
                    <div className="card">
      <div className="card-content">
        <strong>Trabalho em Equipe</strong>
        <p>Habilidade de colaborar e contribuir positivamente em um grupo.</p>
      </div>
      </div>
      </li>
      <li className="li-skills">
                    <div className="card">
      <div className="card-content">
        <strong>Resolução de Problemas</strong>
        <p>Capacidade de identificar, analisar e encontrar soluções para desafios.</p>
      </div>
      </div>
      </li>
      <li className="li-skills">
                    <div className="card">
      <div className="card-content">
        <strong>Empatia</strong>
        <p> Capacidade de compreender e se relacionar com as emoções e perspectivas dos outros.</p>
      </div>
      </div>
      </li>
                </ul>
            </div>
        </main>
    );
}















export default Skills