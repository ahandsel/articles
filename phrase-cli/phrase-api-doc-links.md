# Phrase API Documentation Links

I do not like the Phrase API documentation's search function so here is the extracted list of the APIs and their links for easy access.

Updated: 2025-05-26


## Table of contents <!-- omit in toc -->

* [Phrase API Overview](#phrase-api-overview)
* [Authentication](#authentication)
* [People and their accounts](#people-and-their-accounts)
  * [Accounts](#accounts)
* [Users](#users)
  * [Members](#members)
  * [Teams](#teams)
* [Authorizations](#authorizations)
* [Branches](#branches)
* [Comments](#comments)
  * [Comment Reactions](#comment-reactions)
  * [Comment Replies](#comment-replies)
* [Distributions](#distributions)
* [Formats](#formats)
* [Glossaries](#glossaries)
* [Glossary Terms](#glossary-terms)
* [Glossary Term Translations](#glossary-term-translations)
* [ICU](#icu)
* [Invitations](#invitations)
* [Job Comments](#job-comments)
* [Job Locales](#job-locales)
* [Job Template Locales](#job-template-locales)
* [Job Templates](#job-templates)
* [Jobs](#jobs)
* [Keys](#keys)
  * [Blacklisted Keys](#blacklisted-keys)
  * [Linked Keys](#linked-keys)
* [Locales](#locales)
  * [Locale Downloads](#locale-downloads)
* [Notifications](#notifications)
  * [Notification Groups](#notification-groups)
* [Orders](#orders)
* [Organization Job Template Locales](#organization-job-template-locales)
  * [Organization Job Templates](#organization-job-templates)
* [Projects](#projects)
* [Releases](#releases)
  * [Release Triggers](#release-triggers)
* [Repo Syncs](#repo-syncs)
  * [Repo Sync Events](#repo-sync-events)
* [Reports](#reports)
* [Search](#search)
* [Screenshots](#screenshots)
  * [Screenshot Markers](#screenshot-markers)
* [Spaces](#spaces)
* [Style guides](#style-guides)
* [Tags](#tags)
* [Translations](#translations)
  * [Versions / History](#versions--history)
* [Variables](#variables)
* [Custom Metadata](#custom-metadata)
* [Webhooks](#webhooks)
  * [Webhook Deliveries](#webhook-deliveries)
* [Document](#document)
  * [Documents](#documents)
  * [Uploads](#uploads)
* [Figma](#figma)
  * [Figma attachments](#figma-attachments)
  * [Key's Figma attachments](#keys-figma-attachments)
* [Quality performance score](#quality-performance-score)


## Phrase API Overview

* [Overview](https://developers.phrase.com/api/#overview)
* [API Endpoints](https://developers.phrase.com/api/#overview--api-endpoints)
* [Usage](https://developers.phrase.com/api/#overview--usage)
* [Use of HTTP Verbs](https://developers.phrase.com/api/#overview--use-of-http-verbs)
* [Identification via User-Agent](https://developers.phrase.com/api/#overview--identification-via-user-agent)
* [Lists](https://developers.phrase.com/api/#overview--lists)
* [Parameters](https://developers.phrase.com/api/#overview--parameters)
* [Errors](https://developers.phrase.com/api/#overview--errors)
* [Date Format](https://developers.phrase.com/api/#overview--date-format)
* [Authentication](https://developers.phrase.com/api/#overview--authentication)
* [Pagination](https://developers.phrase.com/api/#overview--pagination)
* [Link-Headers](https://developers.phrase.com/api/#overview--link-headers)
* [Rate Limiting](https://developers.phrase.com/api/#overview--rate-limiting)
* [Conditional GET requests / HTTP Caching](https://developers.phrase.com/api/#overview--conditional-get-requests--http-caching)
* [JSONP](https://developers.phrase.com/api/#overview--jsonp)
* [Usage examples](https://developers.phrase.com/api/#overview--usage-examples)


## Authentication

* [Authentication](https://developers.phrase.com/api/#auth)


## People and their accounts


### Accounts

* [List accounts](https://developers.phrase.com/api/#get-/accounts)
* [Get a single account](https://developers.phrase.com/api/#get-/accounts/-id-)


## Users

* [Show current User](https://developers.phrase.com/api/#get-/user)


### Members

* [List members](https://developers.phrase.com/api/#get-/accounts/-account_id-/members)
* [Get single member](https://developers.phrase.com/api/#get-/accounts/-account_id-/members/-id-)
* [Remove a user from the account](https://developers.phrase.com/api/#delete-/accounts/-account_id-/members/-id-)
* [Update a member](https://developers.phrase.com/api/#patch-/accounts/-account_id-/members/-id-)
* [Update a member's project settings](https://developers.phrase.com/api/#patch-/projects/-project_id-/members/-id-)


### Teams

* [List Teams](https://developers.phrase.com/api/#get-/accounts/-account_id-/teams)
* [Create a Team](https://developers.phrase.com/api/#post-/accounts/-account_id-/teams)
* [Get Team](https://developers.phrase.com/api/#get-/accounts/-account_id-/teams/-id-)
* [Delete Team](https://developers.phrase.com/api/#delete-/accounts/-account_id-/teams/-id-)
* [Update Team](https://developers.phrase.com/api/#patch-/accounts/-account_id-/teams/-id-)
* [Add Project to Team](https://developers.phrase.com/api/#post-/accounts/-account_id-/teams/-team_id-/projects)
* [Remove Project from Team](https://developers.phrase.com/api/#delete-/accounts/-account_id-/teams/-team_id-/projects/-id-)
* [Add Space](https://developers.phrase.com/api/#post-/accounts/-account_id-/teams/-team_id-/spaces)
* [Remove Space](https://developers.phrase.com/api/#delete-/accounts/-account_id-/teams/-team_id-/spaces/-id-)
* [Add User](https://developers.phrase.com/api/#post-/accounts/-account_id-/teams/-team_id-/users)
* [Remove User](https://developers.phrase.com/api/#delete-/accounts/-account_id-/teams/-team_id-/users/-id-)


## Authorizations

* [List authorizations](https://developers.phrase.com/api/#get-/authorizations)
* [Create an authorization](https://developers.phrase.com/api/#post-/authorizations)
* [Get a single authorization](https://developers.phrase.com/api/#get-/authorizations/-id-)
* [Delete an authorization](https://developers.phrase.com/api/#delete-/authorizations/-id-)
* [Update an authorization](https://developers.phrase.com/api/#patch-/authorizations/-id-)


## Branches

* [List branches](https://developers.phrase.com/api/#get-/projects/-project_id-/branches)
* [Create a branch](https://developers.phrase.com/api/#post-/projects/-project_id-/branches)
* [Get a single branch](https://developers.phrase.com/api/#get-/projects/-project_id-/branches/-name-)
* [Delete a branch](https://developers.phrase.com/api/#delete-/projects/-project_id-/branches/-name-)
* [Update a branch](https://developers.phrase.com/api/#patch-/projects/-project_id-/branches/-name-)
* [Merge a branch](https://developers.phrase.com/api/#patch-/projects/-project_id-/branches/-name-/merge)
* [Compare branches](https://developers.phrase.com/api/#get-/projects/-project_id-/branches/-name-/compare)


## Comments

* [List comments](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-key_id-/comments)
* [Create a comment](https://developers.phrase.com/api/#post-/projects/-project_id-/keys/-key_id-/comments)
* [Get a single comment](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-key_id-/comments/-id-)
* [Delete a comment](https://developers.phrase.com/api/#delete-/projects/-project_id-/keys/-key_id-/comments/-id-)
* [Update a comment](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/-key_id-/comments/-id-)
* [Check if comment is read](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-key_id-/comments/-id-/read)
* [Mark a comment as unread](https://developers.phrase.com/api/#delete-/projects/-project_id-/keys/-key_id-/comments/-id-/read)
* [Mark a comment as read](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/-key_id-/comments/-id-/read)


### Comment Reactions

* [List reactions](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/reactions)
* [Create a reaction](https://developers.phrase.com/api/#post-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/reactions)
* [Get a single reaction](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/reactions/-id-)
* [Delete a reaction](https://developers.phrase.com/api/#delete-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/reactions/-id-)


### Comment Replies

* [List replies](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/replies)
* [Create a reply](https://developers.phrase.com/api/#post-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/replies)
* [Get a single reply](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/replies/-id-)
* [Delete a reply](https://developers.phrase.com/api/#delete-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/replies/-id-)
* [Mark a reply as read](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/replies/-id-/mark_as_read)
* [Mark a reply as unread](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/-key_id-/comments/-comment_id-/replies/-id-/mark_as_unread)


## Distributions

* [List distributions](https://developers.phrase.com/api/#get-/accounts/-account_id-/distributions)
* [Create a distribution](https://developers.phrase.com/api/#post-/accounts/-account_id-/distributions)
* [Get a single distribution](https://developers.phrase.com/api/#get-/accounts/-account_id-/distributions/-id-)
* [Delete a distribution](https://developers.phrase.com/api/#delete-/accounts/-account_id-/distributions/-id-)
* [Update a distribution](https://developers.phrase.com/api/#patch-/accounts/-account_id-/distributions/-id-)


## Formats

* [List formats](https://developers.phrase.com/api/#get-/formats)


## Glossaries

* [List term bases](https://developers.phrase.com/api/#get-/accounts/-account_id-/glossaries)
* [Create a term base](https://developers.phrase.com/api/#post-/accounts/-account_id-/glossaries)
* [Get a single term base](https://developers.phrase.com/api/#get-/accounts/-account_id-/glossaries/-id-)
* [Delete a term base](https://developers.phrase.com/api/#delete-/accounts/-account_id-/glossaries/-id-)
* [Update a term base](https://developers.phrase.com/api/#patch-/accounts/-account_id-/glossaries/-id-)


## Glossary Terms

* [List terms](https://developers.phrase.com/api/#get-/accounts/-account_id-/glossaries/-glossary_id-/terms)
* [Create a term](https://developers.phrase.com/api/#post-/accounts/-account_id-/glossaries/-glossary_id-/terms)
* [Get a single term](https://developers.phrase.com/api/#get-/accounts/-account_id-/glossaries/-glossary_id-/terms/-id-)
* [Delete a term](https://developers.phrase.com/api/#delete-/accounts/-account_id-/glossaries/-glossary_id-/terms/-id-)
* [Update a term](https://developers.phrase.com/api/#patch-/accounts/-account_id-/glossaries/-glossary_id-/terms/-id-)


## Glossary Term Translations

* [Create a translation for a term](https://developers.phrase.com/api/#post-/accounts/-account_id-/glossaries/-glossary_id-/terms/-term_id-/translations)
* [Delete a translation for a term](https://developers.phrase.com/api/#delete-/accounts/-account_id-/glossaries/-glossary_id-/terms/-term_id-/translations/-id-)
* [Update a translation for a term](https://developers.phrase.com/api/#patch-/accounts/-account_id-/glossaries/-glossary_id-/terms/-term_id-/translations/-id-)


## ICU

* [Build ICU skeletons](https://developers.phrase.com/api/#post-/icu/skeleton)


## Invitations

* [List invitations](https://developers.phrase.com/api/#get-/accounts/-account_id-/invitations)
* [Create a new invitation](https://developers.phrase.com/api/#post-/accounts/-account_id-/invitations)
* [Get a single invitation](https://developers.phrase.com/api/#get-/accounts/-account_id-/invitations/-id-)
* [Delete an invitation](https://developers.phrase.com/api/#delete-/accounts/-account_id-/invitations/-id-)
* [Update an invitation](https://developers.phrase.com/api/#patch-/accounts/-account_id-/invitations/-id-)
* [Resend an invitation](https://developers.phrase.com/api/#post-/accounts/-account_id-/invitations/-id-/resend)
* [Update a member's invitation access](https://developers.phrase.com/api/#patch-/projects/-project_id-/invitations/-id-)


## Job Comments

* [Get a single job comment](https://developers.phrase.com/api/#get-/projects/-project_id-/jobs/-job_id-/comments/-id-)
* [Delete a job comment](https://developers.phrase.com/api/#delete-/projects/-project_id-/jobs/-job_id-/comments/-id-)
* [Update a job comment](https://developers.phrase.com/api/#patch-/projects/-project_id-/jobs/-job_id-/comments/-id-)
* [List job comments](https://developers.phrase.com/api/#get-/projects/-project_id-/jobs/-job_id-/comments)
* [Create a job comment](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-job_id-/comments)


## Job Locales

* [List job target locales](https://developers.phrase.com/api/#get-/projects/-project_id-/jobs/-job_id-/locales)
* [Add a target locale to a job](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-job_id-/locales)
* [Show single job target locale](https://developers.phrase.com/api/#get-/projects/-project_id-/jobs/-job_id-/locales/-id-)
* [Remove a target locale from a job](https://developers.phrase.com/api/#delete-/projects/-project_id-/jobs/-job_id-/locales/-id-)
* [Update a job target locale](https://developers.phrase.com/api/#patch-/projects/-project_id-/jobs/-job_id-/locales/-id-)
* [Complete a job locale](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-job_id-/locales/-id-/complete)
* [Review a job locale](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-job_id-/locales/-id-/complete_review)
* [Reopen a job locale](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-job_id-/locales/-id-/reopen)


## Job Template Locales

* [List job template locales](https://developers.phrase.com/api/#get-/projects/-project_id-/job_templates/-job_template_id-/locales)
* [Create a job template locale](https://developers.phrase.com/api/#post-/projects/-project_id-/job_templates/-job_template_id-/locales)
* [Get a single job template locale](https://developers.phrase.com/api/#get-/projects/-project_id-/job_templates/-job_template_id-/locales/-job_template_locale_id-)
* [Delete a job template locale](https://developers.phrase.com/api/#delete-/projects/-project_id-/job_templates/-job_template_id-/locales/-job_template_locale_id-)
* [Update a job template locale](https://developers.phrase.com/api/#patch-/projects/-project_id-/job_templates/-job_template_id-/locales/-job_template_locale_id-)


## Job Templates

* [List job templates](https://developers.phrase.com/api/#get-/projects/-project_id-/job_templates)
* [Create a job template](https://developers.phrase.com/api/#post-/projects/-project_id-/job_templates)
* [Get a single job template](https://developers.phrase.com/api/#get-/projects/-project_id-/job_templates/-id-)
* [Delete a job template](https://developers.phrase.com/api/#delete-/projects/-project_id-/job_templates/-id-)
* [Update a job template](https://developers.phrase.com/api/#patch-/projects/-project_id-/job_templates/-id-)


## Jobs

* [List jobs](https://developers.phrase.com/api/#get-/projects/-project_id-/jobs)
* [Create a job](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs)
* [List account jobs](https://developers.phrase.com/api/#get-/accounts/-account_id-/jobs)
* [Get a single job](https://developers.phrase.com/api/#get-/projects/-project_id-/jobs/-id-)
* [Delete a job](https://developers.phrase.com/api/#delete-/projects/-project_id-/jobs/-id-)
* [Update a job](https://developers.phrase.com/api/#patch-/projects/-project_id-/jobs/-id-)
* [Start a job](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-id-/start)
* [Complete a job](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-id-/complete)
* [Reopen a job](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-id-/reopen)
* [Lock a job](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-id-/lock)
* [Unlock a job](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-id-/unlock)
* [Add keys to job](https://developers.phrase.com/api/#post-/projects/-project_id-/jobs/-id-/keys)
* [Remove keys from job](https://developers.phrase.com/api/#delete-/projects/-project_id-/jobs/-id-/keys)


## Keys

* [List keys](https://developers.phrase.com/api/#get-/projects/-project_id-/keys)
* [Create a key](https://developers.phrase.com/api/#post-/projects/-project_id-/keys)
* [Delete collection of keys](https://developers.phrase.com/api/#delete-/projects/-project_id-/keys)
* [Search keys](https://developers.phrase.com/api/#post-/projects/-project_id-/keys/search)
* [Get a single key](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-id-)
* [Delete a key](https://developers.phrase.com/api/#delete-/projects/-project_id-/keys/-id-)
* [Update a key](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/-id-)
* [Add tags to collection of keys](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/tag)
* [Remove tags from collection of keys](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/untag)
* [Exclude a locale on a collection of keys](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/exclude)
* [Include a locale on a collection of keys](https://developers.phrase.com/api/#patch-/projects/-project_id-/keys/include)


### Blacklisted Keys

* [List blocked keys](https://developers.phrase.com/api/#get-/projects/-project_id-/blacklisted_keys)
* [Create a blocked key](https://developers.phrase.com/api/#post-/projects/-project_id-/blacklisted_keys)
* [Get a single blocked key](https://developers.phrase.com/api/#get-/projects/-project_id-/blacklisted_keys/-id-)
* [Delete a blocked key](https://developers.phrase.com/api/#delete-/projects/-project_id-/blacklisted_keys/-id-)
* [Update a blocked key](https://developers.phrase.com/api/#patch-/projects/-project_id-/blacklisted_keys/-id-)


### Linked Keys

* [List child keys of a parent key](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-id-/key_links)
* [Link child keys to a parent key](https://developers.phrase.com/api/#post-/projects/-project_id-/keys/-id-/key_links)
* [Batch unlink child keys from a parent key](https://developers.phrase.com/api/#delete-/projects/-project_id-/keys/-id-/key_links)
* [Unlink a child key from a parent key](https://developers.phrase.com/api/#delete-/projects/-project_id-/keys/-id-/key_links/-child_key_id-)


## Locales

* [List locales used in account](https://developers.phrase.com/api/#get-/accounts/-id-/locales)
* [List locales](https://developers.phrase.com/api/#get-/projects/-project_id-/locales)
* [Create a locale](https://developers.phrase.com/api/#post-/projects/-project_id-/locales)
* [Get a single locale](https://developers.phrase.com/api/#get-/projects/-project_id-/locales/-id-)
* [Delete a locale](https://developers.phrase.com/api/#delete-/projects/-project_id-/locales/-id-)
* [Update a locale](https://developers.phrase.com/api/#patch-/projects/-project_id-/locales/-id-)
* [Download a locale](https://developers.phrase.com/api/#get-/projects/-project_id-/locales/-id-/download)
  * Download a locale in a specific file format.




### Locale Downloads

* [Initiate async download of a locale](https://developers.phrase.com/api/#post-/projects/-project_id-/locales/-locale_id-/downloads)
* [Show status of an async locale download](https://developers.phrase.com/api/#get-/projects/-project_id-/locales/-locale_id-/downloads/-id-)


## Notifications

* [List notifications](https://developers.phrase.com/api/#get-/notifications)
* [Mark all notifications as read](https://developers.phrase.com/api/#post-/notifications/mark_all_as_read)
* [Get a single notification](https://developers.phrase.com/api/#get-/notifications/-id-)


### Notification Groups

* [List notification groups](https://developers.phrase.com/api/#get-/notification_groups)
* [Mark all notification groups as read](https://developers.phrase.com/api/#patch-/notification_groups/mark_all_as_read)
* [Mark a notification group as read](https://developers.phrase.com/api/#patch-/notification_groups/-id-/mark_as_read)


## Orders

* [List orders](https://developers.phrase.com/api/#get-/projects/-project_id-/orders)
* [Create a new order](https://developers.phrase.com/api/#post-/projects/-project_id-/orders)
* [Get a single order](https://developers.phrase.com/api/#get-/projects/-project_id-/orders/-id-)
* [Cancel an order](https://developers.phrase.com/api/#delete-/projects/-project_id-/orders/-id-)
* [Confirm an order](https://developers.phrase.com/api/#patch-/projects/-project_id-/orders/-id-/confirm)


## Organization Job Template Locales

* [List organization job template locales](https://developers.phrase.com/api/#get-/accounts/-account_id-/job_templates/-job_template_id-/locales)
* [Create an organization job template locale](https://developers.phrase.com/api/#post-/accounts/-account_id-/job_templates/-job_template_id-/locales)
* [Get a single organization job template locale](https://developers.phrase.com/api/#get-/accounts/-account_id-/job_templates/-job_template_id-/locales/-job_template_locale_id-)
* [Delete an organization job template locale](https://developers.phrase.com/api/#delete-/accounts/-account_id-/job_templates/-job_template_id-/locales/-job_template_locale_id-)
* [Update an organization job template locale](https://developers.phrase.com/api/#patch-/accounts/-account_id-/job_templates/-job_template_id-/locales/-job_template_locale_id-)


### Organization Job Templates

* [List organization job templates](https://developers.phrase.com/api/#get-/accounts/-account_id-/job_templates)
* [Create an organization job template](https://developers.phrase.com/api/#post-/accounts/-account_id-/job_templates)
* [Get a single organization job template](https://developers.phrase.com/api/#get-/accounts/-account_id-/job_templates/-id-)
* [Delete an organization job template](https://developers.phrase.com/api/#delete-/accounts/-account_id-/job_templates/-id-)
* [Update an organization job template](https://developers.phrase.com/api/#patch-/accounts/-account_id-/job_templates/-id-)


## Projects

* [List projects](https://developers.phrase.com/api/#get-/projects)
* [Create a project](https://developers.phrase.com/api/#post-/projects)
* [Get a single project](https://developers.phrase.com/api/#get-/projects/-id-)
* [Delete a project](https://developers.phrase.com/api/#delete-/projects/-id-)
* [Update a project](https://developers.phrase.com/api/#patch-/projects/-id-)


## Releases

* [List releases](https://developers.phrase.com/api/#get-/accounts/-account_id-/distributions/-distribution_id-/releases)
* [Create a release](https://developers.phrase.com/api/#post-/accounts/-account_id-/distributions/-distribution_id-/releases)
* [Get a single release](https://developers.phrase.com/api/#get-/accounts/-account_id-/distributions/-distribution_id-/releases/-id-)
* [Delete a release](https://developers.phrase.com/api/#delete-/accounts/-account_id-/distributions/-distribution_id-/releases/-id-)
* [Update a release](https://developers.phrase.com/api/#patch-/accounts/-account_id-/distributions/-distribution_id-/releases/-id-)
* [Publish a release](https://developers.phrase.com/api/#post-/accounts/-account_id-/distributions/-distribution_id-/releases/-id-/publish)


### Release Triggers

* [List release triggers](https://developers.phrase.com/api/#get-/accounts/-account_id-/distributions/-distribution_id-/release_triggers)
* [Create a release trigger](https://developers.phrase.com/api/#post-/accounts/-account_id-/distributions/-distribution_id-/release_triggers)
* [Get a single release trigger](https://developers.phrase.com/api/#get-/accounts/-account_id-/distributions/-distribution_id-/release_triggers/-id-)
* [Delete a single release trigger](https://developers.phrase.com/api/#delete-/accounts/-account_id-/distributions/-distribution_id-/release_triggers/-id-)
* [Update a release trigger](https://developers.phrase.com/api/#patch-/accounts/-account_id-/distributions/-distribution_id-/release_triggers/-id-)


## Repo Syncs

* [Get Repo Syncs](https://developers.phrase.com/api/#get-/accounts/-account_id-/repo_syncs)
* [Get a single Repo Sync](https://developers.phrase.com/api/#get-/accounts/-account_id-/repo_syncs/-id-)
* [Export to code repository](https://developers.phrase.com/api/#post-/accounts/-account_id-/repo_syncs/-id-/export)
* [Import from code repository](https://developers.phrase.com/api/#post-/accounts/-account_id-/repo_syncs/-id-/import)
* [Deactivate a Repo Sync](https://developers.phrase.com/api/#post-/accounts/-account_id-/repo_syncs/-id-/deactivate)
* [Activate a Repo Sync](https://developers.phrase.com/api/#post-/accounts/-account_id-/repo_syncs/-id-/activate)


### Repo Sync Events

* [Repository Syncs History](https://developers.phrase.com/api/#get-/accounts/-account_id-/repo_syncs/-id-/events)
* [Get a single Repo Sync Event](https://developers.phrase.com/api/#get-/accounts/-account_id-/repo_syncs/-repo_sync_id-/events/-id-)


## Reports

* [Get Project Report](https://developers.phrase.com/api/#get-/projects/-project_id-/report)
* [List Locale Reports](https://developers.phrase.com/api/#get-/projects/-project_id-/report/locales)


## Search

* [Search across projects](https://developers.phrase.com/api/#post-/accounts/-account_id-/search)


## Screenshots

* [List screenshots](https://developers.phrase.com/api/#get-/projects/-project_id-/screenshots)
* [Create a screenshot](https://developers.phrase.com/api/#post-/projects/-project_id-/screenshots)
* [Get a single screenshot](https://developers.phrase.com/api/#get-/projects/-project_id-/screenshots/-id-)
* [Delete a screenshot](https://developers.phrase.com/api/#delete-/projects/-project_id-/screenshots/-id-)
* [Update a screenshot](https://developers.phrase.com/api/#patch-/projects/-project_id-/screenshots/-id-)


### Screenshot Markers

* [List screenshot markers](https://developers.phrase.com/api/#get-/projects/-project_id-/screenshots/-id-/markers)
* [Get a single screenshot marker](https://developers.phrase.com/api/#get-/projects/-project_id-/screenshots/-screenshot_id-/markers/-id-)
* [Create a screenshot marker](https://developers.phrase.com/api/#post-/projects/-project_id-/screenshots/-screenshot_id-/markers)
* [Delete a screenshot marker](https://developers.phrase.com/api/#delete-/projects/-project_id-/screenshots/-screenshot_id-/markers)
* [Update a screenshot marker](https://developers.phrase.com/api/#patch-/projects/-project_id-/screenshots/-screenshot_id-/markers)


## Spaces

* [List Spaces](https://developers.phrase.com/api/#get-/accounts/-account_id-/spaces)
* [Create a Space](https://developers.phrase.com/api/#post-/accounts/-account_id-/spaces)
* [Get Space](https://developers.phrase.com/api/#get-/accounts/-account_id-/spaces/-id-)
* [Delete Space](https://developers.phrase.com/api/#delete-/accounts/-account_id-/spaces/-id-)
* [Update Space](https://developers.phrase.com/api/#patch-/accounts/-account_id-/spaces/-id-)
* [List Projects in Space](https://developers.phrase.com/api/#get-/accounts/-account_id-/spaces/-space_id-/projects)
* [Add Project to Space](https://developers.phrase.com/api/#post-/accounts/-account_id-/spaces/-space_id-/projects)
* [Remove Project from Space](https://developers.phrase.com/api/#delete-/accounts/-account_id-/spaces/-space_id-/projects/-id-)


## Style guides

* [List style guides](https://developers.phrase.com/api/#get-/projects/-project_id-/styleguides)
* [Create a style guide](https://developers.phrase.com/api/#post-/projects/-project_id-/styleguides)
* [Get a single style guide](https://developers.phrase.com/api/#get-/projects/-project_id-/styleguides/-id-)
* [Delete a style guide](https://developers.phrase.com/api/#delete-/projects/-project_id-/styleguides/-id-)
* [Update a style guide](https://developers.phrase.com/api/#patch-/projects/-project_id-/styleguides/-id-)


## Tags

* [List tags](https://developers.phrase.com/api/#get-/projects/-project_id-/tags)
* [Create a tag](https://developers.phrase.com/api/#post-/projects/-project_id-/tags)
* [Get a single tag](https://developers.phrase.com/api/#get-/projects/-project_id-/tags/-name-)
* [Delete a tag](https://developers.phrase.com/api/#delete-/projects/-project_id-/tags/-name-)


## Translations

* [List all translations](https://developers.phrase.com/api/#get-/projects/-project_id-/translations)
* [Create a translation](https://developers.phrase.com/api/#post-/projects/-project_id-/translations)
* [List translations by locale](https://developers.phrase.com/api/#get-/projects/-project_id-/locales/-locale_id-/translations)
* [List translations by key](https://developers.phrase.com/api/#get-/projects/-project_id-/keys/-key_id-/translations)
* [Search translations](https://developers.phrase.com/api/#post-/projects/-project_id-/translations/search)
* [Get a single translation](https://developers.phrase.com/api/#get-/projects/-project_id-/translations/-id-)
* [Update a translation](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/-id-)
* [Verify a translation](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/-id-/verify)
* [Mark a translation as unverified](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/-id-/unverify)
* [Review a translation](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/-id-/review)
* [Unreview a translation](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/-id-/unreview)
* [Exclude a translation from export](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/-id-/exclude)
* [Include a translation](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/-id-/include)
* [Verify translations by query](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/verify)
* [Unverify translations by query](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/unverify)
* [Review translations selected by query](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/review)
* [Unreview translations selected by query](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/unreview)
* [Exclude translations by query](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/exclude)
* [Include translations by query](https://developers.phrase.com/api/#patch-/projects/-project_id-/translations/include)


### Versions / History

* [List all versions](https://developers.phrase.com/api/#get-/projects/-project_id-/translations/-translation_id-/versions)
* [Get a single version](https://developers.phrase.com/api/#get-/projects/-project_id-/translations/-translation_id-/versions/-id-)


## Variables

* [List variables](https://developers.phrase.com/api/#get-/projects/-project_id-/variables)
* [Create a variable](https://developers.phrase.com/api/#post-/projects/-project_id-/variables)
* [Get a single variable](https://developers.phrase.com/api/#get-/projects/-project_id-/variables/-name-)
* [Delete a variable](https://developers.phrase.com/api/#delete-/projects/-project_id-/variables/-name-)
* [Update a variable](https://developers.phrase.com/api/#patch-/projects/-project_id-/variables/-name-)


## Custom Metadata

* [List properties](https://developers.phrase.com/api/#get-/accounts/-account_id-/custom_metadata/properties)
* [Create a property](https://developers.phrase.com/api/#post-/accounts/-account_id-/custom_metadata/properties)
* [Get a single property](https://developers.phrase.com/api/#get-/accounts/-account_id-/custom_metadata/properties/-id-)
* [Destroy property](https://developers.phrase.com/api/#delete-/accounts/-account_id-/custom_metadata/properties/-id-)
* [Update a property](https://developers.phrase.com/api/#patch-/accounts/-account_id-/custom_metadata/properties/-id-)


## Webhooks

* [List webhooks](https://developers.phrase.com/api/#get-/projects/-project_id-/webhooks)
* [Create a webhook](https://developers.phrase.com/api/#post-/projects/-project_id-/webhooks)
* [Get a single webhook](https://developers.phrase.com/api/#get-/projects/-project_id-/webhooks/-id-)
* [Delete a webhook](https://developers.phrase.com/api/#delete-/projects/-project_id-/webhooks/-id-)
* [Update a webhook](https://developers.phrase.com/api/#patch-/projects/-project_id-/webhooks/-id-)
* [Test a webhook](https://developers.phrase.com/api/#post-/projects/-project_id-/webhooks/-id-/test)


### Webhook Deliveries

* [List webhook deliveries](https://developers.phrase.com/api/#get-/projects/-project_id-/webhooks/-webhook_id-/deliveries)
* [Get a single webhook delivery](https://developers.phrase.com/api/#get-/projects/-project_id-/webhooks/-webhook_id-/deliveries/-id-)
* [Redeliver a single webhook delivery](https://developers.phrase.com/api/#post-/projects/-project_id-/webhooks/-webhook_id-/deliveries/-id-/redeliver)


## Document


### Documents

* [List documents](https://developers.phrase.com/api/#get-/projects/-project_id-/documents)
* [Delete document](https://developers.phrase.com/api/#delete-/projects/-project_id-/documents/-id-)


### Uploads

* [List uploads](https://developers.phrase.com/api/#get-/projects/-project_id-/uploads)
* [Upload a new file](https://developers.phrase.com/api/#post-/projects/-project_id-/uploads)
* [Get a single upload](https://developers.phrase.com/api/#get-/projects/-project_id-/uploads/-id-)


## Figma


### Figma attachments

* [List Figma attachments](https://developers.phrase.com/api/#get-/projects/-project_id-/figma_attachments)
* [Create a Figma attachment](https://developers.phrase.com/api/#post-/projects/-project_id-/figma_attachments)
* [Get a single Figma attachment](https://developers.phrase.com/api/#get-/projects/-project_id-/figma_attachments/-id-)
* [Delete a Figma attachment](https://developers.phrase.com/api/#delete-/projects/-project_id-/figma_attachments/-id-)
* [Update a Figma attachment](https://developers.phrase.com/api/#patch-/projects/-project_id-/figma_attachments/-id-)


### Key's Figma attachments

* [Attach the Figma attachment to a key](https://developers.phrase.com/api/#post-/projects/-project_id-/figma_attachments/-figma_attachment_id-/keys)
* [Detach the Figma attachment from a key](https://developers.phrase.com/api/#delete-/projects/-project_id-/figma_attachments/-figma_attachment_id-/keys/-id-)


## Quality performance score

* [Get Translation Quality](https://developers.phrase.com/api/#post-/projects/-project_id-/quality_performance_score)
