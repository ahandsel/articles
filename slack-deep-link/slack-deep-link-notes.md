# Slack Deep Linking Notes


## Deep Linking to Slack

* Open message in main view
  * `slack://channel?team={TEAM_ID}&id={CHANNEL_ID}&message={TS}`
  * {TS} = '9999999999.999999'
* Open message in right panel
  * `slack://channel?team={TEAM_ID}&id={CHANNEL_ID}&thread_ts={TS}`
  * {TS} = '9999999999.999999'


## Reference

* [Deep linking into Slack](https://api.slack.com/reference/deep-linking)
* [Deep linking into Slack App +Tips](https://gist.github.com/yamashush/6f892bdae6d53e2e333cfce3166277c9)
