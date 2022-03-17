import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      backgroundColor: string
      text: string
      textUp: string
    }
  }
}
