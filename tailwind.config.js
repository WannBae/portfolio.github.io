module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#14b8a6',
        secondary:"#64748b",
        dark:'#111827',
        linkdin:'#0e76a8',
        insta:'#833AB4',
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins:["@tailwindcss/forms", "@tailwindcss/typography", "@tailwindcss/aspect-ratio", "@tailwindcss/line-clamp", "@tailwindcss/aspect-ratio", "@tailwindcss/aspect-ratio", "./plugins/apply.js"],
}

