require('dotenv').config()
const path = require('path')
const { notarize } = require('@electron/notarize')

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context
  if (
    electronPlatformName !== 'darwin' ||
    !process.env.APPLE_ID ||
    !process.env.APPLE_PASSWORD
  ) {
    return
  }

  const appBundleId = context.packager.appInfo.info._configuration.appId
  const appName = context.packager.appInfo.productFilename
  const appPath = path.normalize(path.join(context.appOutDir, `${appName}.app`))
  const appleId = process.env.APPLE_ID
  const appleIdPassword = process.env.APPLE_ID_PASSWORD
  if (!appleId) {
    console.warn('Not notarizing: Missing APPLE_ID environment variable')
    return
  }
  if (!appleIdPassword) {
    console.warn(
      'Not notarizing: Missing APPLE_ID_PASSWORD environment variable'
    )
    return
  }

  console.log('appName', appName)
  console.log('appBundleId', appBundleId)

  return await notarize({
    tool: 'notarytool',
    appBundleId,
    appPath,
    appleId,
    appleIdPassword,
    teamId: process.env.APPLE_TEAM_ID
  })
}
