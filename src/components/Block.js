import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components';

const Block = styled.View`
  ${({block}) => block && 'flex: 1;'}
  ${({flex}) => flex && `flex: ${flex};`}
  ${({w}) => w && `width: ${w};`}
  ${({h}) => h && `height: ${h};`}
  ${({m}) => m && `margin: ${m};`}
  ${({p}) => p && `padding: ${p};`}
  ${({absolute}) => absolute && 'position: absolute;'}
  ${({relative}) => relative && 'position: relative;'}
  ${({top}) => top && `top: ${top};`}
  ${({bottom}) => bottom && `bottom: ${bottom};`}
  ${({right}) => right && `right: ${right};`}
  ${({left}) => left && `right: ${left};`}
  ${({round, theme}) => round && `border-radius: ${theme.typo.radius}px;`}
  ${({borderWidth}) => borderWidth && `border-width: ${borderWidth};`}
  ${({borderColor}) => borderColor && `border-color: ${borderColor};`}
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`}
  ${({bg, theme}) =>
    theme.colors[bg]
      ? `background-color: ${theme.colors[bg]}`
      : `background-color: ${bg}`}
  ${({row}) => row && 'flex-direction: row;'}
  ${({column}) => column && 'flex-direction: column;'}
  ${({center}) => center && 'justify-content: center;'}
  ${({middle}) => middle && 'align-items: center;'}
  ${({justify}) => justify && `justify-content: ${justify}`}
  ${({alignItems}) => alignItems && `align-items: ${alignItems};`}
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf};`}
  ${({opacity}) => opacity && `opacity: ${opacity};`}
  ${({shadow, theme}) =>
    shadow &&
    `
    box-shadow: 0px 5px 5px ${theme.colors.black};
    elevation: 2;
  `}
  ${({style}) => style && {...style}}
`;

export default ({animated, children, ...rest}) => {
  if (animated) {
    <Animated.View>
      <Block {...rest}>{children}</Block>
    </Animated.View>;
  }
  return <Block {...rest}>{children}</Block>;
};
