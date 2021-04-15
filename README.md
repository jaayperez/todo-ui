# Forge Todo App

This project contains a Forge custom UI app written in React that displays in a Jira issue panel. 

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

![Todo app for Jira](./example.gif "Todo app for Jira")

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

### Register the app
- Register the app by running:
```
forge register
```

### Frontend
- Change into the frontend directory by running:
```
cd ./static/spa
```

- Install your frontend dependencies by running:
```
npm install
```

- Build your frontend by running:
```
npm run build
```

### Deployment
For this section, ensure you have navigated back to the root of the repository.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

## Support
See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.

## Contributions
Contributions are welcome! Please see CONTRIBUTING.md for details.

## License
Copyright (c) 2020 Atlassian and others. Apache 2.0 licensed, see LICENSE file.
