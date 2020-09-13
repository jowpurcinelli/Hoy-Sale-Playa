import 'styled-components'

declare module 'styled-components' {
    export interface Beaches{
        title: string
        icon: string        
        condition: number
    }
    export interface DefaultTheme {
    title: string
    logo: string

    colors: {
      primary: string
      secundary: string

      background: string
      li: string
      text: string
      inputColor: string
      inputPlaceholder: string

    }
  }
}

