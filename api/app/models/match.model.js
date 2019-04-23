const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
    leagueName: String,
    startDateTime: Date,
    homeTeam: {
        _id: String,
        name: String,
        coach: String,
        players: [
            {
                name: String,
                position: String,
                number: Number
            }
        ],
        substitutes: [
            {
                minute: Number,
                playerIn: String,
                playerOut: String
            }
        ]
    },
    awayTeam: {
        _id: String,
        name: String,
        coach: String,
        players: [
            {
                name: String,
                position: String,
                number: Number
            }
        ],
        substitutes: [
            {
                minute: Number,
                playerIn: String,
                playerOut: String
            }
        ]
    },
    status: String, // "", FT, HT
    events: [
        {
            minute: Number,
            player: String,
            event: String,  // Red, Yellow, Goal
            homeScore: Number,
            awayScore: Number
        }
    ],
    commentaries: [
        {
            minute: Number,
            message: String
        }
    ],
    statistic: {
        shotsOnTarget: {
            homeTeam: Number,
            awayTeam: Number
        },
        shotsOffTarget: {
            homeTeam: Number,
            awayTeam: Number
        },
        possession: {
            homeTeam: Number,
            awayTeam: Number
        },
        corners: {
            homeTeam: Number,
            awayTeam: Number
        },
        offsides: {
            homeTeam: Number,
            awayTeam: Number
        },
        fouls: {
            homeTeam: Number,
            awayTeam: Number
        },
        goalKicks: {
            homeTeam: Number,
            awayTeam: Number
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Match', MatchSchema);