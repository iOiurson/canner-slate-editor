// @flow
import React from 'react';

export default function(Tag, markType, styleData) {
  return {
    deserialize(el, next) {
      if (markType && el.tagName && el.tagName.toLowerCase() === Tag) {
        let data = {}

        if (el.style.backgroundColor) {
          data.color = el.style.backgroundColor;
        }

        if (el.style.color) {
          data.color = el.style.color;
        }

        if (el.style.fontSize) {
          data.fontSize = el.style.fontSize;
        }

        if (el.style.letterSpacing) {
          data.letterSpacing = el.style.letterSpacing;
        }

        return {
          object: 'mark',
          type: markType,
          data,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark' && obj.type === markType) {
        let style;

        if (styleData) {
          style = {
            [styleData.key]: obj.data.get(styleData.value)
          }
        }

        return (
          <Tag style={style}>
            {children}
          </Tag>
        );
      }
    }
  }
}
