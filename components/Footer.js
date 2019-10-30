import React from "react";
import Link from "next/link";
import css from "../public/static/styles/global.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={`${css["footer"]} ${css["pb-5"]}`}>
        <div
          className={`${css.container} ${css["text-center"]} ${css["pt-5"]}`}
        >
          <ul className={css["list-inline"]}>
            <li className={css["list-inline-item"]}>
              <a
                href="https://github.com/cln-m4rie"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xs"
                  color="#ffffff"
                  className={css["size-50"]}
                />
              </a>
            </li>
            <li className={css["list-inline-item"]}>
              <a href="#" rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="xs"
                  color="#ffffff"
                  className={css["size-50"]}
                />
              </a>
            </li>
            <li className={css["list-inline-item"]}>
              <a
                href="https://www.linkedin.com/in/clone-marie-83384b193/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xs"
                  color="#ffffff"
                  className={css["size-50"]}
                />
              </a>
            </li>
          </ul>
        </div>
        <p className={css["text-center"]}>designed by CloneMarie</p>
      </footer>
    );
  }
}
