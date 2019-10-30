import React from "react";
import css from "../public/static/styles/global.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IndexHead from "../components/IndexHead";
import List from "../components/List";

class Index extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const skills = {
      frontends: {
        js: [
          "jQuery (3 years)",
          "Vue.js (1 year)",
          "Nuxt.js (1 year)",
          "React.js (learning...)"
        ]
      },
      backends: {
        php: ["Laravel", "CakePHP", "FuelPHP", "CodeIgniter3"],
        python: ["Django", "Flask", "Bottle"],
        ruby: ["Ruby on Rails (learning...)"],
        go: ["Echo (learning...)"],
        other: ["Nginx", "MySQL", "PostgreSQL", "Docker"]
      }
    };
    return { userAgent, skills };
  }

  render() {
    return (
      <div>
        <IndexHead />
        <Header />
        <div className={`${css["container"]} ${css["mb-5"]}`}>
          <div
            className={`${css.jumbotron} ${css["mt-4"]} ${css["text-center"]}`}
          >
            <h1 className={css["display-5"]}>CloneMarie&#39;s website</h1>
            <p className={css["lead"]}>Full-stack Web Engineer</p>
            <hr className={css["mt-4"]} />
          </div>
          <h2 className={`${css["mb-5"]} ${css["ml-4"]}`}>MY WORK</h2>
          <div className={`${css["ml-5"]} ${css["row"]}`}>
            <div className={css["col-md-4"]}>
              <h3 className={css["mb-3"]}>Frontend</h3>
              <List data={this.props.skills.frontends.js} unstyled={true} />
            </div>
            <div className={css["col-md-4"]}>
              <h3 className={css["mb-3"]}>Backend</h3>
              <ul>
                <li className={css["list-unstyled"]}>
                  <h4 className={`${css["text-left"]}`}>PHP</h4>
                </li>
                <List
                  className={css["text-right"]}
                  data={this.props.skills.backends.php}
                  unstyled={true}
                />
                <li className={css["list-unstyled"]}>
                  <h4>Python</h4>
                </li>
                <List
                  data={this.props.skills.backends.python}
                  unstyled={true}
                />
                <li className={css["list-unstyled"]}>
                  <h4>Ruby</h4>
                </li>
                <List data={this.props.skills.backends.ruby} unstyled={true} />
                <li className={css["list-unstyled"]}>
                  <h4>Go</h4>
                </li>
                <List data={this.props.skills.backends.go} unstyled={true} />
              </ul>
            </div>
            <div className={css["col-md-4"]}>
              <h3 className={css["mb-3"]}>Other</h3>
              <List data={this.props.skills.backends.other} unstyled={true} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
