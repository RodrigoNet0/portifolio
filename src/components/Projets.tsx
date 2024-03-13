import React from 'react';
import { useState } from 'react';
import './Projets.css';

function Projets(){

   

    return(
        <body>
            <h1 className="title-project">
                Projetos
            </h1>
            <div className="container">
                <ul>
                    <li>
                        <div className="card-container">
                            {/* Card 1 */}
                            <div className="card">
                            <img className="project-img" src="https://private-user-images.githubusercontent.com/134714036/301625287-34629aea-73e1-489b-8637-fbbb3857a855.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAzMzkyMDksIm5iZiI6MTcxMDMzODkwOSwicGF0aCI6Ii8xMzQ3MTQwMzYvMzAxNjI1Mjg3LTM0NjI5YWVhLTczZTEtNDg5Yi04NjM3LWZiYmIzODU3YTg1NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxM1QxNDA4MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMDEyODA1NzU4MTUwYWFjMDA2ZThjZTEyZWUwOTcxZmFmNGYwNzI3YTEzMjcyNmJiOGM1ZTkxNjg3ODA4NDEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.mVLT1tqpUIw0Re6qcJct26dVe56omgHXRa2U5_p_uok" alt="page-watch"/>
                            
                            </div>
                            <button className="button-review"><a className="a-bu" href="https://github.com/RodrigoNet0/page-watch">Code Review</a></button>
                        </div>
                    </li>
                    <li>
                        <div className="card-container">
                            {/* Card 2 */}
                            <div className="card">
                            <img className="project-img" src="https://private-user-images.githubusercontent.com/134714036/312495738-5069319c-a66a-4011-ad80-f02b7269e338.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAzNDA0NDYsIm5iZiI6MTcxMDM0MDE0NiwicGF0aCI6Ii8xMzQ3MTQwMzYvMzEyNDk1NzM4LTUwNjkzMTljLWE2NmEtNDAxMS1hZDgwLWYwMmI3MjY5ZTMzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxM1QxNDI5MDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNjliNTk2YzIzZTllMjRhMTZjZmYxYTI3ZDhlNGY4MjJmOWI2YTU4OWVjMDQ4MTBhZGEwN2QxYmU5OGNmZjdmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.C6_qUeRD-HF2NdDS5StKAdziYR72Yg5OZrR4BPD1C8M" alt="newsletter"/>
                            </div>
                            <button className="button-review"><a className="a-bu" href="https://github.com/RodrigoNet0/newsletter">Code Review</a></button>
                        </div>
                    </li>
                    <li>
                        <div className="card-container">
                            {/* Card 3 */}
                            <div className="card">
                               <img className="project-img" src="https://private-user-images.githubusercontent.com/134714036/312499891-b025eb05-7e2b-4f69-84ab-b66aa1dd5040.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAzNDEwNjksIm5iZiI6MTcxMDM0MDc2OSwicGF0aCI6Ii8xMzQ3MTQwMzYvMzEyNDk5ODkxLWIwMjVlYjA1LTdlMmItNGY2OS04NGFiLWI2NmFhMWRkNTA0MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxM1QxNDM5MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYjQxOGYxMmM1NDM0OTQ5NjAxMjM4YzE1OTMwM2I2NWI5ZmNmYzEwYjE3Mzg0ZGVjM2JjYjBiMDYwNzJmODgxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.NEBcZK1UTyaFRGtVEsBhRjFjFK4X2ecLuUfavm-2pbY" alt="serra-azul-buss"/>
                            </div>
                            <button className="button-review"><a className="a-bu" href="https://github.com/RodrigoNet0/SerraAzulBus">Code Review</a></button>
                        </div>
                    </li>
                    <li>
                        <div className="card-container">
                            {/* Card 4 */}
                            <div className="card">
                            <img className="project-img" src="https://th.bing.com/th/id/R.2ead47a4b4b139ad7e18052fbb0f79f0?rik=n3BbgEkiXdg3sA&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""/>
                            </div>
                            <button className="button-review"><a className="a-bu" href="">Code Review</a></button>
                        </div>
                    </li>
                </ul>
            </div>
        </body>
    );
}

export default Projets;
