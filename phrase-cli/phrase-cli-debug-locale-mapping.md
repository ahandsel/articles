# Phrase CLI Debug locale_mapping error

`locale_mapping` parameter is required when using the `phrase push` command to upload a CSV file to update a Phrase Strings project.


## Table of Contents <!-- omit in toc -->

* [Problem](#problem)
* [Solution](#solution)
* [How to configure `locale_mapping` parameter](#how-to-configure-locale_mapping-parameter)
* [Warning - Plural Forms](#warning---plural-forms)
* [Background \& Environment](#background--environment)


## Problem

When I was using the `phrase push` command to upload a CSV file to update a Phrase Strings project, I kept getting the following error:

```txt
API response: {"message":"Validation failed","errors":[{"resource":"Upload","field":"locale_mapping","message":"You must provide a locale_mapping parameter."}]}
ERROR: 422 Unprocessable Entity
```


## Solution

Despite what Phrase Strings's [Upload a new file](https://developers.phrase.com/api/#post-/projects/-project_id-/uploads) API Documentation says, the `locale_mapping` parameter is required when using the `phrase push` command to upload a CSV file to update a Phrase Strings project.

Here is the correct `.phrase.yml` file configuration:

```yaml
phrase:
  access_token: #access_token
  project_id: #project_id
  file_format: csv
  push:
    sources:
      - file: ./upload-translations.csv
        params:
          file_format: csv
          locale_mapping: {"en": "2"}
  pull:
    targets:
      - file: ./<locale_name>-translations.csv
```


## How to configure `locale_mapping` parameter

Snippet from the `.phrase.yml` template file:

```yaml
locale_mapping: {"LANGUAGE_CODE": "COLUMN"} (object) #Optional, format specific (Excel, CSV) mapping between locale names and the columns the translations to those locales are contained in.
```

So in my case, I had to map the `en` locale to the `2` column in the CSV file.

> locale_mapping: {"en": "2"}

If you want to map multiple locales, you can do so like this:

```yaml
locale_mapping: {"en": "2", "ja": "3"}
```


## Warning - Plural Forms

⚠️ **Warning**: If you are working with [plural forms](https://support.phrase.com/hc/en-us/articles/5819838743964), make sure to use the correct plural suffixes for both languages specified in the `locale_mapping` parameter.

For example, English and Japanese have different plural forms.
* For English, there is `zero`, `one`, and `other`.
* For Japanese, there is `zero`, and `other`.

Thus, if you add a Japanese translation for the `one` plural form, it generates a new key instead of updating the existing key for the `other` plural form.


## Background & Environment

* [Phrase CLI version](https://github.com/phrase/phrase-cli): 2.23.2
* Device:
  * ProductName: macOS
  * ProductVersion: 14.4.1
  * BuildVersion: 23E224
