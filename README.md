# vite-react-tailwind-zustand-starter

## Example
- https://vite-react-tailwind-zustand-starter.pages.dev/

## Use this template
- run `npx degit git@github.com:ben-xD/vite-react-tailwind-zustand-starter.git generated-project-name`

## Setup. after creating the template.
- Install Node
- Install `pnpm`
- install dependencies: `pnpm install`
- VSCode:
  - Install [Tailwind CSS IntelliSense extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss#recommended-vs-code-settings)


## Deployment
- Done using Cloudflare. Unfortunately, Cloudflare doesn't support Node 18 unless you opt-in by messaging their support them on discord. https://community.cloudflare.com/t/support-node-18-in-pages-or-allow-config/414797/6
  - Manually set environment variable `NODE_VERSION` to `17` to both production and preview environments.


## Useful
- Zustand
  - [Typescript usage](https://github.com/pmndrs/zustand/blob/HEAD/docs/guides/typescript.md)