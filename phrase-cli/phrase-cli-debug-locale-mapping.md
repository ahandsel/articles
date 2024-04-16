# Phrase CLI Debug locale_mapping Error

The `locale_mapping` parameter is required when using the `phrase push` command to upload a CSV file to update a Phrase Strings project.


## Table of Contents <!-- omit in toc -->

* [Problem](#problem)
* [Solution](#solution)
* [How to Configure `locale_mapping` Parameter](#how-to-configure-locale_mapping-parameter)
* [Warning - Plural Forms](#warning---plural-forms)
* [Background \& Environment](#background--environment)


## Problem

When using the `phrase push` command to upload a CSV file to update a Phrase Strings project, I kept encountering the following error:

```txt
API response: {"message":"Validation failed","errors":[{"resource":"Upload","field":"locale_mapping","message":"You must provide a locale_mapping parameter."}]}
ERROR: 422 Unprocessable Entity
```


## Solution

Contrary to what the Phrase Strings [Upload a new file](https://developers.phrase.com/api/#post-/projects/-project_id-/uploads) API documentation suggests, the `locale_mapping` parameter is mandatory when using the `phrase push` command with a CSV file.

Here is the correct configuration for the `.phrase.yml` file:

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


## How to Configure `locale_mapping` Parameter

Below is a snippet from the `.phrase.yml` template file:

```yaml
locale_mapping: {"LANGUAGE_CODE": "COLUMN"} (object) #Optional, format specific (Excel, CSV) mapping between locale names and the columns the translations to those locales are contained in.
```

In my case, I had to map the `en` locale to the `2` column in the CSV file.

```yaml
locale_mapping: {"en": "2"}
```

If you need to map multiple locales, you can configure it as follows:

```yaml
locale_mapping: {"en": "2", "ja": "3"}
```


## Warning - Plural Forms

⚠️ **Warning**: If you are working with [plural forms](https://support.phrase.com/hc/en-us/articles/5819838743964), ensure you use the correct plural suffixes for each language specified in the `locale_mapping` parameter.

For example, English and Japanese have different plural forms:
* For English, use `zero`, `one`, and `other`.
* For Japanese, use `zero` and `other`.

Adding a Japanese translation for the `one` plural form generates a new key instead of updating the existing key for the `other` plural form.


## Background & Environment

* [Phrase CLI version](https://github.com/phrase/phrase-cli): 2.23.2
* Device:
  * ProductName: macOS
  * ProductVersion: 14.4.1
  * BuildVersion: 23E224
