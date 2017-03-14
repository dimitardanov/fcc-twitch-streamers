var onlineResponse = {
    "stream": {
        "_id": 24767276416,
        "game": "StarCraft II",
        "viewers": 881,
        "video_height": 720,
        "average_fps": 50,
        "delay": 0,
        "created_at": "2017-03-12T15:25:44Z",
        "is_playlist": false,
        "preview": {
            "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-80x45.jpg",
            "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-320x180.jpg",
            "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-640x360.jpg",
            "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-{width}x{height}.jpg"
        },
        "channel": {
            "mature": false,
            "partner": true,
            "status": "RERUN: Stats vs. Dark [PvZ] - Semifinal - IEM Katowice 2017 ",
            "broadcaster_language": "en",
            "display_name": "ESL_SC2",
            "game": "StarCraft II",
            "language": "en",
            "_id": 30220059,
            "name": "esl_sc2",
            "created_at": "2012-05-02T09:59:20Z",
            "updated_at": "2017-03-14T14:34:16Z",
            "delay": null,
            "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
            "banner": null,
            "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
            "background": null,
            "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
            "profile_banner_background_color": "#050506",
            "url": "https://www.twitch.tv/esl_sc2",
            "views": 64903210,
            "followers": 150019,
            "_links": {
                "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
                "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
                "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
                "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
                "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
                "features": "https://api.twitch.tv/kraken/channels/esl_sc2/features",
                "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
                "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
                "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
                "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
            }
        },
        "_links": {
            "self": "https://api.twitch.tv/kraken/streams/esl_sc2"
        }
    },
    "_links": {
        "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
        "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
};


var offlineResponse = {
    "stream": null,
    "_links": {
        "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
        "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
};


module.exports = {
  onlineResponse: onlineResponse,
  offlineResponse: offlineResponse
};
