var express = require('express')
var router = express.Router()

const data = [
    {
        name: "m1",
        details: [
            {
                rating: 3,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m2",
        details: [
            {
                rating: 7,
                date: "12/01/1998",
            }
        ]


    },
    {
        name: "m5",
        details: [
            {
                rating: 2,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m5",
        details: [
            {
                rating: 7,
                date: "12/01/1998",
            }
        ]


    },
    {
        name: "m3",
        details: [
            {
                rating: 7,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m3",
        details: [
            {
                rating: 6,
                date: "12/01/1997",
            }
        ]


    },
    {
        name: "m4",
        details: [
            {
                rating: 0,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m2",
        details: [
            {
                rating: 3,
                date: "12/01/20222",
            }
        ]


    },
    {
        name: "m1",
        details: [
            {
                rating: 0,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m2",
        details: [
            {
                rating: 3,
                date: "12/01/20222",
            }
        ]


    },
    {
        name: "m1",
        details: [
            {
                rating: 0,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m2",
        details: [
            {
                rating: 3,
                date: "12/01/20222",
            }
        ]


    },
    {
        name: "m1",
        details: [
            {
                rating: 0,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m2",
        details: [
            {
                rating: 3,
                date: "12/01/20222",
            }
        ]


    },
    {
        name: "m1",
        details: [
            {
                rating: 0,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m2",
        details: [
            {
                rating: 3,
                date: "12/01/20222",
            }
        ]


    },
    {
        name: "m1",
        details: [
            {
                rating: 0,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m2",
        details: [
            {
                rating: 3,
                date: "12/01/20222",
            }
        ]


    },
    {
        name: "m1",
        details: [
            {
                rating: 0,
                date: "12/01/2021",
            }
        ]


    },
    {
        name: "m2",
        details: [
            {
                rating: 3,
                date: "12/01/20222",
            }
        ]


    },
];
router.get('/movies-list', (req, res) => {
    res.send(data)

})

module.exports = router