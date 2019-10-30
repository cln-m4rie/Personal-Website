import React from "react";
import css from "../public/static/styles/global.scss";

export default class List extends React.Component {
  render() {
    var list = [];
    const unstyled = this.props.unstyled ? true : false;
    for (let i = 0; i < this.props.data.length; i++) {
      list.push(
        <li key={i} className={unstyled ? css["list-unstyled"] : ""}>
          {this.props.data[i]}
        </li>
      );
    }
    return <ul>{list}</ul>;
  }
}
