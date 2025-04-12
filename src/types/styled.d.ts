import 'styled-components';
import { Theme } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    // Add any additional theme properties here if needed in the future
    _brand: 'DefaultTheme'; // This is a type-only property to make the interface unique
  }
} 