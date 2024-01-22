# Instagram URL Schemes

Here are the known URL schemes for Instagram that can be used to link directly to specific parts of the Instagram app. It is useful for Apple Shortcuts.

| URL Scheme                              | Description                          |
| --------------------------------------- | ------------------------------------ |
| `instagram://`                          | Open the Instagram app               |
| `instagram://settings`                  | Open the Instagram settings          |
| `instagram://direct-inbox`              | Open direct messages                 |
| `instagram://camera`                    | Open the camera or create a new post |
| `instagram://explore`                   | Open the explore tab                 |
| `instagram://user?username=[username]`  | Open a specific user's profile       |
| `instagram://location?id=[location_id]` | Open a specific location             |
| `instagram://tag?name=[hashtag]`        | Open a specific hashtag              |


## Examples


### Open the Instagram App Settings via Apple Shortcuts

1. Use the "Text" Action to store `instagram://settings` in a text variable
1. Use the "Get URLs from Input" to convert the text variable to a URL
1. Use the "Open URLs" Action to open the URL

Apple Shortcuts: [Example - Open Instagram Settings](https://www.icloud.com/shortcuts/5fd2b8567505424080239aebdb06989b)


### Open a Specific User's Instagram Profile via Apple Shortcuts

1. Use the "Ask for Input" Action to ask for a username
1. Use the "Text" Action to store `instagram://user?username=` in a text variable
1. Use the "Combine Text" Action to combine the username to the text variable:
    * Combine `instagram://user?username=` with the username's Provided Input with "Custom" set to `` (nothing)
1. Use the "Get URLs from Input" to convert the "Combine Text" value to a URL
1. Use the "Open URLs" Action to open the URL

Apple Shortcuts: [Example - Open A Instagram Profile](https://www.icloud.com/shortcuts/fbc84a967b044b539cf9603f7a7dc1a6)


### Search for a Specific Hashtag on Instagram via Apple Shortcuts

1. Use the "Ask for Input" Action to ask for a hashtag
1. Use the "Text" Action to store `instagram://tag?name=` in a text variable
1. Use the "Combine Text" Action to combine the hashtag to the text variable:
    * Combine `instagram://tag?name=` with the hashtag's Provided Input with "Custom" set to `` (nothing)
1. Use the "Get URLs from Input" to convert the "Combine Text" value to a URL
1. Use the "Open URLs" Action to open the URL

Apple Shortcuts: [Example - Search For A Hashtag](https://www.icloud.com/shortcuts/fb76c58b97194b909611d61a90e00609)


## References

* [Loggy/instagram-deeplink](https://github.com/Loggy/instagram-deeplink)
* [bhagyas/app-urls: A long list of App URLs for iOS, macOS and Android](https://github.com/bhagyas/app-urls)
* [tristinDLC's Reddit Post](https://www.reddit.com/r/shortcuts/comments/xnrz7t/comment/ipvnubg/)
