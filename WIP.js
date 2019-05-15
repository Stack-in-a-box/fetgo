const Axios = require("axios");
const Console = require("console");
const Oauth2 = require("simple-oauth2-browser");
const _ = require("lodash");

const clientId = "d8f8ebd522bf5123c3f29db3c8faf09029a032b44f0d1739d4325cd3ccf11570";
const clientSecret = "47273306a9a3a3448a908748eff13a21a477cc46f6a3968b5c7d05611c4f2f26";
const userAgent = "okhttp/3.10.0";
const baseUri = "https://app.fetlife.com"; // See if I can add a trailing slash back
const headers = { "User-Agent": userAgent };

const oauthConfiguration = {
    client: {
        id: clientId,
        secret: clientSecret
    },
    auth: {
        tokenHost: baseUri,
        tokenPath: "api/oauth/token"
    },
    http: {
        headers: { ...headers }
    }
};

const oauthClient = Oauth2.create(oauthConfiguration);

class FetLifeApiProxy {
    constructor(options) {
        this.accessToken = null;

        this.axios = Axios.create({
            headers: { ...headers },
            baseURL: `${baseUri}/api/v2`
        });

        if (_.has(options, "accessToken")) {
            this.setAccessToken(options.accessToken);
        }

        this.onTokenRefresh = _.get(options, "onTokenRefresh", null);
    }
}

new FetLifeApiProxy({});
