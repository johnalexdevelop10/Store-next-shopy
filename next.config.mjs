import { fileURLToPath } from "url";
import { dirname, join } from "path";

import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [join(__dirname, "src/sass")],
prependData: `@import "main.sass"`,
},
  transpilePackages: [
    "antd",
    "rc-util",
    "@import 'variables.sass",
    "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",
  ],
  images: {
    domains: ["website.com", "localhost:3010", "localhost"],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src/sass");
    return config;
  },
};

export default nextConfig;





// import { fileURLToPath } from "url";
// import { dirname, join } from "path";

// /** @type {import('next').NextConfig} */




// // Get the directory name of the current module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const nextConfig = {
//   sassOptions: {
//     includePaths: [join(__dirname, "src/sass")],
//     prependData: `@import "main.sass"`,
//   },
//   images: {
//     remotePatterns: [
//       {
//         hostname: "cdn.shopify.com",
//         protocol: "https",
//       },
//     ],
//   },
// };

// // export default nextConfig;
// export default nextConfig;