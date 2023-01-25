import { API } from './apiConstant';

const defaultValue = {
    env: API.currentEnv,
    debuggingMode: false,
    otpLength: 6,
    dev: {
        googleClientID: '594622207776-d55nisfp22flretlovod9iuhtii707s9.apps.googleusercontent.com',
        apiEncryptionSecret: 'secret',
        apiEncryption: false,
    },
    prod: {
        googleClientID: '594622207776-ahev4umk18f6llojcal8v8tbdkoe5jv3.apps.googleusercontent.com',
        apiEncryptionSecret: '60d05lI1Lide30v3rthe#DmI1g*h8yg0dq*$q2fj(_8b9',
        apiEncryption: true,
    },
    qa: {
        googleClientID: '594622207776-ahev4umk18f6llojcal8v8tbdkoe5jv3.apps.googleusercontent.com',
        apiEncryptionSecret: '60d05lI1Lide30v3rthe#DmI1g*h8yg0dq*$q2fj(_8b9',
        apiEncryption: true,
    }
}

export default defaultValue;