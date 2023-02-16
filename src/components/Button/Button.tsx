import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

type ButtonProps = {
    size?: ButtonSize;
    bgColor?: string;
    color?: string;
    onClick?: () => void;
    children: React.ReactNode;
};

type ButtonTheme = {
    size: ButtonSize;
    bgColor: string;
    color: string;
};

const ButtonWrapper = styled.button<{ theme: ButtonTheme }>`
  background-color: ${({ theme }) => theme.bgColor || '#007bff'};
  color: ${({ theme }) => theme.color || '#fff'};
  padding: ${({ theme }) => {
    switch (theme.size) {
        case ButtonSize.SMALL:
            return '5px 10px';
        case ButtonSize.MEDIUM:
            return '10px 20px';
        case ButtonSize.LARGE:
            return '15px 30px';
        default:
            return '10px 20px';
    }
}};
  border-radius: 5px;
  font-size: ${({ theme }) => {
    switch (theme.size) {
        case ButtonSize.SMALL:
            return '12px';
        case ButtonSize.MEDIUM:
            return '16px';
        case ButtonSize.LARGE:
            return '20px';
        default:
            return '16px';
    }
}};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => {
    if (theme.bgColor === '#007bff') return '#0056b3';
    return theme.bgColor && `${theme.bgColor}4D`;
}};
  }
`;

const Button: React.FC<ButtonProps> = ({ size = ButtonSize.MEDIUM, bgColor = '#007bff', color = '#fff', onClick, children }) => {
    const theme: ButtonTheme = { size, bgColor, color };
    return (
        <ThemeProvider theme={theme}>
            <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
        </ThemeProvider>
    );
};

export default Button;
