# strapi-box

[![Code Style][code-style-img]][code-style-url]

[code-style-url]: https://github.com/prettier/prettier
[code-style-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square

Strapi CMS starter.

## Required Software

- [Node.js](https://nodejs.org)

## Recommended Software

- [Postman](https://www.postman.com)
- [VS Code](https://code.visualstudio.com)
- [ESLint Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Node Version Manager](https://github.com/nvm-sh/nvm)

## Scripts

```bash
# Install all the dependencies
$ npm install

# Start the development server
$ npm run dev

# Build with development settings
$ npm run build:dev

# Build with production settings
$ npm run build:prod

# Start the production server
$ npm run start
```

## How to Deploy the First Release

1. Change to the correct Node.js version

```
$ nvm use
```

2. Install all the dependencies

```
$ npm install
```

3. Remove these lines from the `.gitignore` file

```
database/*
!database/.gitkeep
public/uploads/*
!public/uploads/.gitkeep
build
```

4. Run the project and create all the admin accounts

```
$ npm run dev
```

5. Comment these lines on the `admin/src/components/Logout/index.js` file

```
<DropdownItem onClick={handleGoTo} className="item">
  <FormattedMessage id="app.components.Logout.profile" />
</DropdownItem>
<DropdownItem onClick={handleGoToAdministrator} className="item">
  <FormattedMessage id="app.components.Logout.admin" />
</DropdownItem>
```

6. Comment these lines on the `admin/src/components/LeftMenuLinkContainer/index.js` file

```
plugins: {
  searchable: false,
  name: 'plugins',
  emptyLinksListMessage: messages.noPluginsInstalled.id,
  links: pluginsLinks,
},
general: {
  searchable: false,
  name: 'general',
  links: [
    {
      icon: 'list',
      label: messages.listPlugins.id,
      destination: '/list-plugins',
    },
    {
      icon: 'shopping-basket',
      label: messages.installNewPlugin.id,
      destination: '/marketplace',
    },
    {
      icon: 'cog',
      label: messages.settings.id,
      destination: SETTINGS_BASE_URL,
    },
  ],
},
```

7. Build the project for production

```
$ npm run build
```

8. Commit the first release

```
$ git add .

$ git commit -m "release: 1.0.0"

$ git push
```
