import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import theme from '~/config/theme';

const LinearGradientStyled = styled(LinearGradient)`
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
  ${({round}) => round && `border-radius: ${theme.typo.radius}px;`}
  ${({borderWidth}) => borderWidth && `border-width: ${borderWidth};`}
  ${({borderColor}) => borderColor && `border-color: ${borderColor};`}
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`}
  ${({row}) => row && `flex-direction: ${row};`}
  ${({column}) => column && `flex-direction: ${column};`}
  ${({center}) => center && 'justify-content: center;'}
  ${({middle}) => middle && 'align-items: center;'}
  ${({justify}) => justify && `justify-content: ${justify}`}
  ${({alignItems}) => alignItems && `align-items: ${alignItems};`}
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf};`}
  ${({disabled}) => disabled && `background-color: ${theme.colors.gray};`}
    ${({shadow}) =>
      shadow &&
      `
    box-shadow: 3px 3px 10px ${theme.colors.gray};
    elevation: 2;
  `}
`;

export default ({
  colors,
  start = {x: 0, y: 0},
  end = {x: 1, y: 1},
  locations = [0.1, 0.9],
  disabled,
  shadow,
  children,
  ...props
}) => {
  return (
    <LinearGradientStyled
      start={start}
      end={end}
      locations={locations}
      disabled={disabled}
      colors={colors || [theme.colors.primary, theme.colors.secondary]}
      {...props}
      dis>
      {children}
    </LinearGradientStyled>
  );
};
