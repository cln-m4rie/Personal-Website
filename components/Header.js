import Link from "next/link";
import React from "react";
import css from "../public/static/styles/global.scss";
const linkStyle = {
  marginRight: 15
};

export default class Header extends React.Component {
  render() {
    return (
      <nav
        className={`${css.navbar} ${css["navbar-light"]} ${css["bg-light"]} ${
          css["sticky-top"]
        }`}
      >
        <Link href="/">
          <a className={css["navbar-brand"]}>CloneMarie</a>
        </Link>
      </nav>
    );
  }
}
