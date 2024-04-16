# `locale_mapping` is a Required Parameter (Not Optional)


## Table of Contents <!-- omit in toc -->

* [Problem](#problem)
  * [API Documentation](#api-documentation)
  * [phrase.yml Template](#phraseyml-template)
* [Solution](#solution)
* [Context](#context)
* [Environment](#environment)


## Problem

Contrary to what the Phrase Strings [Upload a new file](https://developers.phrase.com/api/#post-/projects/-project_id-/uploads) API documentation suggests, the `locale_mapping` parameter is required when using the `phrase push` command with a CSV file.


### API Documentation

> locale_mapping
> object
> Optional, format specific mapping between locale names and the columns the translations to those locales are contained in.


### phrase.yml Template

Below is a snippet from the `.phrase.yml` template file:

```yaml
locale_mapping: {"LANGUAGE_CODE": "COLUMN"} (object) #Optional, format specific (Excel, CSV) mapping between locale names and the columns the translations to those locales are contained in.
```


## Solution

Please either:
* Update the documentation ([API](https://developers.phrase.com/api/#post-/projects/-project_id-/uploads) and [.phrase.yml example](https://support.phrase.com/hc/en-us/articles/5784118494492)) to reflect this requirement.
* Update the `phrase-cli` to handle the `locale_mapping` parameter as optional.


## Context

I was trying to use the `phrase push` command to upload a CSV file to update a Phrase Strings project. However, I encountered the following error:

```txt
API response: {"message":"Validation failed","errors":[{"resource":"Upload","field":"locale_mapping","message":"You must provide a locale_mapping parameter."}]}
ERROR: 422 Unprocessable Entity
```

I resolved the issue by adding the `locale_mapping` parameter to the `.phrase.yml` file. However, the documentation does not mention that this parameter is required.

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


## Environment

* [Phrase CLI version](https://github.com/phrase/phrase-cli): 2.23.2
* Device:
  * ProductName: macOS
  * ProductVersion: 14.4.1
  * BuildVersion: 23E224
