import React from 'react';
import './Projets.css';

function Projets(){

    return(
        <body>
            <h1 className="title-project">
                Projets
            </h1>
            <div className="container">
                <ul>
                    <li>
                        <div className="card-container">
                            {/* Card 1 */}
                            <div className="card">
                            <img className="project-img" src="https://th.bing.com/th/id/R.2ead47a4b4b139ad7e18052fbb0f79f0?rik=n3BbgEkiXdg3sA&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""/>
                            
                            </div>
                            <button className="button-review"><a href="">Code Review</a></button>
                        </div>
                    </li>
                    <li>
                        <div className="card-container">
                            {/* Card 2 */}
                            <div className="card">
                            <img className="project-img" src="https://th.bing.com/th/id/R.2ead47a4b4b139ad7e18052fbb0f79f0?rik=n3BbgEkiXdg3sA&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""/>
                            </div>
                            <button className="button-review"><a href="">Code Review</a></button>
                        </div>
                    </li>
                    <li>
                        <div className="card-container">
                            {/* Card 3 */}
                            <div className="card">
                               <img className="project-img" src="https://th.bing.com/th/id/R.2ead47a4b4b139ad7e18052fbb0f79f0?rik=n3BbgEkiXdg3sA&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""/>
                            </div>
                            <button className="button-review"><a href="">Code Review</a></button>
                        </div>
                    </li>
                    <li>
                        <div className="card-container">
                            {/* Card 4 */}
                            <div className="card">
                            <img className="project-img" src="https://th.bing.com/th/id/R.2ead47a4b4b139ad7e18052fbb0f79f0?rik=n3BbgEkiXdg3sA&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""/>
                            </div>
                            <button className="button-review"><a href="">Code Review</a></button>
                        </div>
                    </li>
                </ul>
            </div>
        </body>
    );
}

export default Projets;
