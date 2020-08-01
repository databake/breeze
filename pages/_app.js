import { Global, css } from '@emotion/core'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { ProvideSearch } from '../utils/search'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <ColorModeProvider value="dark">
        <CSSReset />
        <Global
          styles={css`
            #__next {
              height: 100%;
            }
          `}
        />
        <ProvideSearch>
          <Component {...pageProps} />
        </ProvideSearch>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
