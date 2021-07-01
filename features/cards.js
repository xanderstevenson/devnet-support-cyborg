//
// Demo interactive adaptive cards
//
module.exports = function(controller) {

    controller.hears('cards', 'message,direct_message', async(bot, message) => {

        if (!controller.public_url) {
            await bot.reply(message, {
                text: 'Please configure the PUBLIC_URL setting to enable this sample feature'
            });
            return;
        }

        await bot.reply(message, {
            text: 'DevNet Chat Assistant',
            attachments: [{
                'contentType': 'application/vnd.microsoft.card.adaptive',
                'content': {
                    "type": "AdaptiveCard",
                    "body": [{
                            "type": "ColumnSet",
                            "columns": [{
                                    "type": "Column",
                                    "items": [{
                                        "type": "Image",
                                        "style": "Person",
                                        "url": "https://static.wixstatic.com/media/3a60df_ba60095194a041f0b2ae04cfbae19e5c~mv2.gif",
                                        "size": "Medium",
                                        "height": "50px"
                                    }],
                                    "width": "auto"
                                },
                                {
                                    "type": "Column",
                                    "items": [{
                                            "type": "TextBlock",
                                            "text": "Cisco Webex",
                                            "weight": "Lighter",
                                            "color": "Accent"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "weight": "Bolder",
                                            "text": "DevNet Chat Assistant",
                                            "wrap": true,
                                            "color": "Light",
                                            "size": "Large",
                                            "spacing": "Small"
                                        }
                                    ],
                                    "width": "stretch"
                                }
                            ]
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [{
                                    "type": "Column",
                                    "width": 35,
                                    "items": [{
                                            "type": "TextBlock",
                                            "text": "Release Date:",
                                            "color": "Light"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Product:",
                                            "weight": "Lighter",
                                            "color": "Light",
                                            "spacing": "Small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "OS:",
                                            "weight": "Lighter",
                                            "color": "Light",
                                            "spacing": "Small"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": 65,
                                    "items": [{
                                            "type": "TextBlock",
                                            "text": "TBD",
                                            "color": "Light"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "DevNet Chat Assistant",
                                            "color": "Light",
                                            "weight": "Lighter",
                                            "spacing": "Small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Mac, Android, Windows, Web",
                                            "weight": "Lighter",
                                            "color": "Light",
                                            "spacing": "Small"
                                        }
                                    ]
                                }
                            ],
                            "spacing": "Padding",
                            "horizontalAlignment": "Center"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Here is some filler text to explain what this bot will do to make your lives wonderful and stress-less. ",
                            "wrap": true
                        },
                        {
                            "type": "TextBlock",
                            "text": "Buttons and Cards Resources:"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [{
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [{
                                        "type": "Image",
                                        "altText": "",
                                        "url": "https://developer.webex.com/images/link-icon.png",
                                        "size": "Small",
                                        "width": "30px"
                                    }],
                                    "spacing": "Small"
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "[Developer Portal Buttons and Cards Guide]()",
                                        "size": "Medium"
                                    }],
                                    "verticalContentAlignment": "Center",
                                    "spacing": "Small"
                                }
                            ]
                        },
                        {
                            "type": "ActionSet",
                            "actions": [{
                                "type": "Action.Submit",
                                "title": "Subscribe to Release Notes",
                                "data": {
                                    "subscribe": true
                                }
                            }],
                            "spacing": "None"
                        }
                    ],
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",

                    'actions': [{
                        'type': 'Action.Submit',
                        'title': 'Submit'
                    }]
                }
            }]
        })
    })


    controller.commandHelp.push({
        command: 'cards',
        text: 'Demo adaptive cards'
    });

}