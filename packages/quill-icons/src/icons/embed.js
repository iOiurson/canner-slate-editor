import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Embed extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path
          className={fillClassName}
          d="M14.60284,8.5036A2.48315,2.48315,0,0,0,14.71429,7.8a2.34494,2.34494,0,0,0-2.28571-2.4,2.19651,2.19651,0,0,0-1.3631.48358A4.01147,4.01147,0,0,0,7.28571,3a4.1037,4.1037,0,0,0-4,4.2,4.40682,4.40682,0,0,0,.07642.79553A3.57444,3.57444,0,0,0,1,11.4,3.51743,3.51743,0,0,0,4.42859,15h9.42853A3.22436,3.22436,0,0,0,17,11.7,3.26609,3.26609,0,0,0,14.60284,8.5036ZM6.85352,10.64648a.49995.49995,0,1,1-.707.707l-1-1a.49982.49982,0,0,1,0-.707l1-1a.49995.49995,0,0,1,.707.707L6.207,10ZM9.48535,8.12109l-1,4A.5.5,0,0,1,8,12.5a.51952.51952,0,0,1-.12109-.01465.50066.50066,0,0,1-.36426-.60645l1-4a.50023.50023,0,0,1,.9707.24219Zm2.36816,2.23242-1,1a.49995.49995,0,0,1-.707-.707L10.793,10l-.64648-.64648a.49995.49995,0,0,1,.707-.707l1,1A.49982.49982,0,0,1,11.85352,10.35352Z"
        />
      </svg>
    );
  }
}