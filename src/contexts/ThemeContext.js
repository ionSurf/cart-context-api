import React from 'react';
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
}

export const ThemeContext = React.createContext({
    theme: themes.dark,     // Default value
    toggleTheme: () => {}
});

export function toggleTheme() {
    this.setState({
        theme: this.state.theme === themes.dark ? themes.light : themes.dark,
    });
}
