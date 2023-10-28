# Electron Publish Artifacts

## Description

This is a simple electron project that contains electron-builder setup and electron notarize script to allow users install the app.

## Tools

* [Electron Builder](https://www.electron.build)
* [Notarize](https://github.com/electron/notarize)


## Quick start

1.  Clone this repo using `git clone https://github.com/mohamedsamara/electron-publish-artifacts.git`
2.  Move to the directory: `cd <PROJECT_NAME>`.<br />
3.  Run `yarn install` in order to install dependencies.<br />


## Notarize

```
export APPLE_ID="<Your Apple ID>"
export APPLE_ID_PASSWORD="<Your App Specific Password>"
export APPLE_TEAM_ID="<Your Apple Team ID>"
export GH_TOKEN="<YOUR_TOKEN_HERE>"
```

