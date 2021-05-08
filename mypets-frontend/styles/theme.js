import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from "@chakra-ui/react"

const fonts = {
    ...chakraTheme.fonts,
    // futura: "Futura",
    // gothamrnd: "GothamRnd",
    body: `Inter`,
    heading: `Inter`
}

const colors = {
    ...chakraTheme.colors,
    mypets: {
        100: "#ffc400",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "#ffa000",
    }
}

const overrides = {
    ...chakraTheme,
    fonts,
    colors
}

const customTheme = extendTheme(overrides)

export default customTheme