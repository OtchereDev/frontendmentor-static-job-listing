module.exports = {
  purge: {
    enabled:true,
    content:[
      './public/index.html',
      './public/index.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        bg_desktop:'url("images/bg-header-desktop.svg")',
        bg_mobile:'url("images/bg-header-mobile.svg")'
      },
      fontFamily: {
        cfont:'Spartan'
      },
      colors:{
        DesaturatedDarkCyan: 'hsl(180, 29%, 50%)',
        LightGrayishCyanBackground: 'hsl(180, 52%, 96%)',
        LightGrayishCyanFilterTablets: 'hsl(180, 31%, 95%)',
        DarkGrayishCyan: 'hsl(180, 8%, 52%)',
        VeryDarkGrayishCyan: 'hsl(180, 14%, 20%)'
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
