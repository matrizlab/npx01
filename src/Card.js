import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Edoardo Armandi",
      initials: "EA",
      info: [
        { title: ">", text: "full stack web development" },
        { title: "Country", text: "italy" },
        { title: "Email", text: "info[at]matrizlab.com" },
        { title: "Website", text: "matrizlab.com" },
        { title: "Twitter", text: "@matrizlab" }
      ]
    };
  }
  render() {
    const { firstName, initials, info } = this.state;

    return (
      <React.Fragment>
        <section className="card-container">
          <header className="card-header">
            <span initials={initials}></span>
            <h2>{firstName}</h2>
          </header>

          <main>
            <ul>
              {info.map((row, index) => {
                return (
                  <li key={index}>
                    <span>{row.title}</span>
                    {row.text ? row.text : "n/a"}
                  </li>
                );
              })}
            </ul>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default Card;
