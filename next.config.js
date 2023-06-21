/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
    prependData: `@import "globalvariables.scss";`
  }
}

module.exports = nextConfig
