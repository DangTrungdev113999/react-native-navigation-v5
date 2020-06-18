import React from 'react';
import styled from 'styled-components';

import LinearGradient from './LinearGradient';

const TouchableOpacity = styled.TouchableOpacity`
padding: 0;
  ${({block}) => block && 'flex: 1;'}
  ${({flex}) => flex && `flex: ${flex};`}
  
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;


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
  ${({borderBottomWidth}) =>
    borderBottomWidth && `border-bottom-width: ${borderBottomWidth};`}
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
  ${({shadow, theme}) =>
    shadow &&
    `
    box-shadow: 3px 3px 10px ${theme.colors.gray};
    elevation: 2;
  `}
  ${({disabled, theme}) =>
    disabled && `background-color: ${theme.colors.gray};`}
`;

const Button = ({
  opacity = 0.5,
  disable,
  gradient,
  colors,
  start,
  end,
  locations,
  children,
  shadow,
  disabled,
  onPress,
  ...props
}) => {
  if (gradient && !disabled) {
    return (
      <TouchableOpacity
        activeOpacity={opacity}
        onPress={onPress}
        disabled={disabled}>
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          shadow={shadow}
          colors={colors}
          {...props}>
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={opacity}
      shadow={shadow}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
