import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "fillClassName", "strokeClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Font extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, strokeClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <polyline className={strokeClassName} points="3.5 14 7 4 10.5 14" />
        <line className={strokeClassName} x1="9.45" x2="4.55" y1="11" y2="11" />
        <path
          className={fillClassName}
          d="M13.636,5.013a4.016,4.016,0,0,0-1.863.472,0.42,0.42,0,0,0-.179.629l0.112,0.214a0.418,0.418,0,0,0,.625.191,2.557,2.557,0,0,1,1.183-.326A0.933,0.933,0,0,1,14.573,7.2V7.338H14.339c-1.272,0-3.325.281-3.325,1.954A1.75,1.75,0,0,0,12.9,11.011a2.072,2.072,0,0,0,1.785-1.078h0.022a1.132,1.132,0,0,0-.022.247V10.4a0.412,0.412,0,0,0,.457.472h0.379A0.416,0.416,0,0,0,15.99,10.4V7.293A2.121,2.121,0,0,0,13.636,5.013Zm0.948,3.4a1.452,1.452,0,0,1-1.305,1.505,0.775,0.775,0,0,1-.859-0.753c0-.854,1.216-0.966,1.93-0.966h0.234V8.416Z"
        />
      </svg>
    );
  }
}