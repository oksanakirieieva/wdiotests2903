const hooks = required()
const base = required()

exports.config = {
    runner: 'local',

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['--window-size=1280,720']
            }
        }

    ],
    baseUrl: 'https://localcoding.us',

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ['devtools'],

    ...base,
    ...hooks
}
