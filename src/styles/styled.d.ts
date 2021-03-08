import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme{
    title: string,
  
    colors: {
      red: string,
      red_ligth: string,
      green: string,
      green_light: string,
      blue: string,
      blue_dark:string,
      blue_twitter: string,
      gray_line: string,
      white: string,
  
      background: string,
      background_box: string,
      background_modal: string,
      text: string,
      text_secondary: string,
      title_primary: string,
      title_blue: string,
      color_countdown: string,
      box_shadow: string
    }
  }
}