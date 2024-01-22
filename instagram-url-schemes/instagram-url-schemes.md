# Instagram Url Schemes

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

Apple Shortcuts: [Example - Open Instagram Settings](https://www.icloud.com/shortcuts/5289d99da79f47639d6d9d211261b107)

### Open a Specific User's Instagram Profile via Apple Shortcuts

1. Use the "Ask for Input" Action to ask for a username
1. Use the "Text" Action to store `instagram://user?username=` in a text variable
1. Use the "Combine Text" Action to combine the username to the text variable:
    * Combine `instagram://user?username=` with the username's Provided Input with "Custom" set to `` (nothing)
1. Use the "Get URLs from Input" to convert the "Combine Text" value to a URL
1. Use the "Open URLs" Action to open the URL

Apple Shortcuts: [Example - Open A Instagram Profile](https://www.icloud.com/shortcuts/d11f047b0a6242198d5b3d8bf88b00e1)

### Search for a Specific Hashtag on Instagram via Apple Shortcuts

1. Use the "Ask for Input" Action to ask for a hashtag
1. Use the "Text" Action to store `instagram://tag?name=` in a text variable
1. Use the "Combine Text" Action to combine the hashtag to the text variable:
    * Combine `instagram://tag?name=` with the hashtag's Provided Input with "Custom" set to `` (nothing)
1. Use the "Get URLs from Input" to convert the "Combine Text" value to a URL
1. Use the "Open URLs" Action to open the URL

Apple Shortcuts: [Example - Search For A Hashtag](https://www.icloud.com/shortcuts/e737ed7514404c0293a545ca54325564)

## References
* [Loggy/instagram-deeplink](https://github.com/Loggy/instagram-deeplink)
* [bhagyas/app-urls: A long list of App URLs for iOS, macOS and Android](https://github.com/bhagyas/app-urls)
* [tristinDLC's Reddit Post](https://www.reddit.com/r/shortcuts/comments/xnrz7t/comment/ipvnubg/)
