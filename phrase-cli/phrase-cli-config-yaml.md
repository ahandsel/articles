# Phrase CLI Config YAML

This is a quick breakdown into the `.phrase.yml` file used for configuring the Phrase CLI and the various options available for pushing and pulling translations.
I found it strangely difficult to find the `.phrase.yml` on [Phrase's Help Website](https://support.phrase.com/hc/en-us/articles/5784118494492) and their documentation is not always clear.

The example `.phrase.yml` file can be found here on [GitHub](hhttps://github.com/ahandsel/articles/blob/main/phrase-cli/phrase-configuration-overview.yml) or under [Phrase CLI Config YAML Template](#phrase-cli-config-yaml-template) section.


## Table of Contents <!-- omit in toc -->

* [Configuration Options Breakdown](#configuration-options-breakdown)
  * [Phrase CLI - Header Options](#phrase-cli---header-options)
  * [Phrase CLI Push - Parameters](#phrase-cli-push---parameters)
  * [Phrase CLI Push - Format Options](#phrase-cli-push---format-options)
  * [Phrase CLI Pull - Parameters](#phrase-cli-pull---parameters)
  * [Phrase CLI Pull - Format Options](#phrase-cli-pull---format-options)
* [Phrase CLI Config YAML Template](#phrase-cli-config-yaml-template)


## Configuration Options Breakdown


### Phrase CLI - Header Options

| Option         | Value (Type)                  | Notes                                                                                 | Example  |
| -------------- | ----------------------------- | ------------------------------------------------------------------------------------- | -------- |
| `access_token` | ACCESS_TOKEN (string)         | Add personal access token to authenticate.                                            | `abc123` |
| `project_id`   | PROJECT_ID (string)           | The Project ID (Copy from Project Settings > API tab).                                | `123456` |
| `file_format`  | FORMAT_API_EXTENSION (string) | Specify a [supported file type][phrase-file-types] for the entire configuration file. | `csv`    |

[phrase-tokens]: https://help.phrase.com/help/access-tokens
[phrase-file-types]: https://help.phrase.com/help/supported-platforms-and-formats

Tip: If the `file_format` is specified in the header, it is no longer required in the `push` and `pull` commands.

Additional notes:
* For instructions on generating an access token, refer to the [Generate API Access Token][phrase-tokens] help doc.


### Phrase CLI Push - Parameters

The `push` command uploads files to Phrase via the [upload API endpoint](https://developers.phrase.com/api/#post-/projects/%7Bproject_id%7D/uploads). The parameters you can use when uploading files to Phrase are as follows:

| Parameter             | Value (Type)                         | Notes                                                                                               | Example       |
| --------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------- |
| `file_format`         | FORMAT_API_EXTENSION (string)        | Specify the upload file type.                                                                       | `csv`         |
| `locale_id`           | LOCALE_ID (string)                   | Locale name or public ID (via Language settings -> API).                                            | `en-US`       |
| `tags`                | TAG_1, TAG_2 (string)                | Tags to be used for the new keys in the upload.                                                     | `tag1, tag2`  |
| `update_translations` | false (boolean)                      | If true, existing translations will be updated with the upload's content.                           | `true`        |
| `update_descriptions` | false (boolean)                      | If true, the upload's key descriptions (including empty descriptions) will overwrite existing ones. | `true`        |
| `skip_upload_tags`    | false (boolean)                      | If true, upload will not create upload tags.                                                        | `true`        |
| `skip_unverification` | false (boolean)                      | If true, updated translations will be unverified.                                                   | `true`        |
| `file_encoding`       | ENCODING (string)                    | Enforces a specific file encoding. Options: `UTF-8`, `UTF-16`, `UTF-16BE`, `UTF-16LE`, `ISO-8859-1` | `UTF-8`       |
| `locale_mapping`      | {"LANGUAGE_CODE": "COLUMN"} (object) | Optional, format-specific (Excel, CSV) mapping between locale names and column locations.           | `{"en": "2"}` |
| `autotranslate`       | false (boolean)                      | If true, the [pre-translation feature][phrase-pre-trans] will be used to generate translations.     | `true`        |
| `mark_reviewed`       | false (boolean)                      | If true, the imported translations will be marked as reviewed.                                      | `true`        |

Additional notes:
* `file_format` is required if the file type is not specified in the source or target entries.
* `mark_reviewed` is only available if the review workflow is enabled for the project.


### Phrase CLI Push - Format Options

Here are the format options you can use when uploading files to Phrase:

| Format Option                  | Value (Type)      | Only for           | Notes                                                                       | Example |
| ------------------------------ | ----------------- | ------------------ | --------------------------------------------------------------------------- | ------- |
| `ignore_source_translations`   | false (boolean)   | XLIFF/XLIFF 2.0    | If true, source translations in the file will be ignored during the upload. | `true`  |
| `ignore_target_translations`   | false (boolean)   | XLIFF/XLIFF 2.0    | If true, target translations in the file will be ignored during the upload. | `true`  |
| `msgid_as_default`             | false (boolean)   | Gettext POT        | If true, the key name (msgid) will be used as translation.                  | `true`  |
| `strip_placeholder_delimiters` | false (boolean)   | XLIFF              | If true, `<ph>` tags will be removed from translations.                     | `true`  |
| `override_file_language`       | false (boolean)   | XLIFF/XLIFF 2.0    | If true, the specified language will override the language in the file.     | `true`  |
| `key_index`                    | [empty] (integer) | Excel/CSV          | Index of the column containing key names (1-based index).                   | `1`     |
| `comment_index`                | [empty] (integer) | Excel/CSV          | Index of the column containing key descriptions (1-based index).            | `3`     |
| `tag_column`                   | [empty] (integer) | Excel/CSV          | Index of the column containing tags (1-based index).                        | `4`     |
| `column_separator`             | `,` (string)      | CSV                | Character used to separate columns.                                         | `,`     |
| `quote_char`                   | `"` (string)      | CSV                | Character used to quote newlines and column separators.                     | `"`     |
| `header_content_row`           | false (boolean)   | CSV                | If true, the first row is the header so will be skipped.                    | `true`  |
| `first_content_row`            | 1 (integer)       | Excel              | Index of the first row containing translation content (1-based index).      | `2`     |
| `enable_pluralization`         | true (boolean)    | Simple/Nested JSON | If true, pluralized keys will be detected and persisted.                    | `true`  |
| `unescape_linebreaks`          | false (boolean)   | Android XML        | If true, all `\n` will be imported as newlines.                             | `true`  |
| `escape_single_quotes`         | false (boolean)   | Java Properties    | If true, single quotes will be escaped with another single quote.           | `true`  |

[phrase-pre-trans]: https://support.phrase.com/hc/en-us/articles/5822187934364


### Phrase CLI Pull - Parameters

The `pull` command downloads files from Phrase via the [locales download API endpoint](https://developers.phrase.com/api/#get-/projects/%7Bproject_id%7D/locales/%7Bid%7D/download). The parameters you can use when downloading files from Phrase are as follows:

| Parameter                         | Value (Type)                  | Notes                                                                                               | Example      |
| --------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------- | ------------ |
| `file_format`                     | FORMAT_API_EXTENSION (string) | Specify the download file type.                                                                     | `csv`        |
| `locale_id`                       | LOCALE_ID (string)            | Locale name or public ID (via Language settings -> API).                                            | `en-US`      |
| `tags`                            | TAG_1, TAG_2 (string)         | Tags to limit results to keys tagged with a list of comma-separated tag names.                      | `tag1, tag2` |
| `include_empty_translations`      | false (boolean)               | If true, keys without translations will be included in the download.                                | `true`       |
| `exclude_empty_zero_forms`        | false (boolean)               | If true, zero forms will be included when empty in pluralized keys.                                 | `true`       |
| `include_translated_keys`         | true (boolean)                | If true, translated keys will be included in the locale file.                                       | `true`       |
| `keep_notranslate_tags`           | false (boolean)               | If true, [NOTRANSLATE] tags will be retained.                                                       | `true`       |
| `encoding`                        | ENCODING (string)             | Enforces a specific file encoding. Options: `UTF-8`, `UTF-16`, `UTF-16BE`, `UTF-16LE`, `ISO-8859-1` | `UTF-8`      |
| `include_unverified_translations` | true (boolean)                | If true, unverified translations will be included.                                                  | `true`       |
| `use_last_reviewed_version`       | false (boolean)               | If true, the last reviewed version of a translation will be used.                                   | `true`       |
| `fallback_locale_id`              | LOCALE_ID (string)            | Locale name or public ID (via Language settings -> API).                                            | `en-US`      |

> Tip: To download only untranslated keys, set `include_empty_translations` to `true` and `include_translated_keys` to `false`.

Additional notes:
* `file_format` is required if the file type is not specified in the source or target entries.
* `use_last_reviewed_version` is only available if the review workflow is enabled for the project.


### Phrase CLI Pull - Format Options

Here are the format options you can use when downloading files from Phrase:

| Format Option                       | Value (Type)         | Only for                        | Notes                                                                          | Example |
| ----------------------------------- | -------------------- | ------------------------------- | ------------------------------------------------------------------------------ | ------- |
| `document_id`                       | DOCUMENT_ID (string) | HTML                            | Specifies the document ID of existing HTML documents for export.               | `12345` |
| `enclose_in_cdata`                  | false (boolean)      | XLIFF/Symfony XLIFF/Android XML | If true, translations with HTML tags will be enclosed in CDATA.                | `true`  |
| `include_translation_state`         | false (boolean)      | XLIFF/Symfony XLIFF             | If true, the state of translations will be included in the target locale.      | `true`  |
| `indent_size`                       | 4 (integer)          | XLIFF/Android XML               | Specifies the number of indentation characters.                                | `4`     |
| `indent_style`                      | space (string)       | XLIFF/Android XML               | Specifies the indentation character (allowed values: space, tab).              | `space` |
| `export_key_id_as_resname`          | true/false (boolean) | XLIFF                           | If true, the Key ID will be exported as the "resname" attribute.               | `true`  |
| `export_key_name_hash_as_extradata` | true/false (boolean) | XLIFF                           | If true, the Key Name hash will be exported as the "extradata" attribute.      | `true`  |
| `delimit_placeholders`              | false (boolean)      | XLIFF                           | If true, `<ph>` tags will be removed from translations.                        | `true`  |
| `convert_placeholder`               | false (boolean)      | iOS/Android XML                 | If true, placeholders will be converted to match format-specific requirements. | `true`  |
| `include_pluralized_keys`           | false (boolean)      | iOS                             | If true, pluralized keys will be included in the locale file.                  | `true`  |
| `export_tags`                       | false (boolean)      | Excel/CSV                       | If true, tags will be exported along with keys and translations.               | `true`  |
| `export_max_characters_allowed`     | false (boolean)      | Excel/CSV                       | If true, the key character limit will be exported with keys and translations.  | `true`  |
| `escape_linebreaks`                 | false (boolean)      | Android XML                     | If true, all line breaks will be escaped as `'\n'`.                            | `true`  |
| `escape_single_quotes`              | false (boolean)      | Java/Play Framework Properties  | If true, single quotes will be escaped with another single quote.              | `true`  |
| `omit_separator_space`              | false (boolean)      | Java Properties                 | If true, the space before and after the separator sign (`=`) will be skipped.  | `true`  |
| `crlf_line_terminators`             | false (boolean)      | Java Properties                 | If true, CRLF (Windows) line terminator characters will be used.               | `true`  |


## Phrase CLI Config YAML Template

* Updated on 2024-10-31
* [phrase-configuration-overview.yml on GitHub](https://github.com/ahandsel/articles/blob/main/phrase-cli/phrase-configuration-overview.yml)

```yml
phrase:
  access_token: ACCESS_TOKEN #Add your personal access token to authenticate, you can find the steps on how to create one here: https://help.phrase.com/help/access-tokens
  project_id: PROJECT_ID #The public Project ID which can be found in the Project Settings (API tab)
  file_format: FORMAT_API_EXTENSION #Find the format you want to use here: https://help.phrase.com/help/supported-platforms-and-formats , access the article and copi the API extension
  
  push:
    sources:
    - file: ./path/to/file/file.format #Provide the path to the file(s) you want to push here, starting from the location of the configuration file. You can use the placeholders <locale_name>, <locale_code> and <tags> in the path or file-name
      params:
        file_format: FORMAT_API_EXTENSION (string) #See above. Only required if you deviate from the default format set in the header
        locale_id: LOCALE_ID (string) #Can be the name (e.g. en-US) or public id (via Language settings -> API) of the locale. Preferred is the public id.
        tags: TAG_1, TAG_2 (string) #List of tags separated by comma to be associated with the new keys contained in the upload.
        update_translations: false (boolean) #Indicates whether existing translations should be updated with the file content.
        update_descriptions: false (boolean) #Existing key descriptions will be updated with the file content. Empty descriptions overwrite existing descriptions.
        skip_upload_tags: false (boolean) #Indicates whether the upload should not create upload tags.
        skip_unverification: false (boolean) #Indicates whether the upload should unverify updated translations.
        file_encoding: ENCODING (string) #Enforces a specific encoding on the file contents. Valid options are "UTF-8", "UTF-16", "UTF-16BE", "UTF-16LE" and "ISO-8859-1".
        locale_mapping: {"LANGUAGE_CODE": "COLUMN"} (object) #Optional, format specific (Excel, CSV) mapping between locale names and the columns the translations to those locales are contained in.
        autotranslate: false (boolean) #If set, translations for the uploaded language will be fetched automatically.  
        mark_reviewed: false (boolean) #Indicated whether the imported translations should be marked as reviewed. This setting is available if the review workflow (currently beta) is enabled for the project.
        #-------------
        format_options:
          ignore_source_translations: false (boolean) #XLIFF/XLIFF 2.0 only. Ignores the source translations in the file during the upload (to avoid accidental source language updates)
          ignore_target_translations: false (boolean) #XLIFF/XLIFF 2.0 only. Ignores the target translations in the file during the upload (to avoid accidental target language updates)
          msgid_as_default: false (boolean) #Gettext template POT files. Use the key name (msgid) as translation (key names equal source translation in that format)
          strip_placeholder_delimiters: false (boolean) #XLIFF only. Removes <ph> tags from translations
          override_file_language: false (boolean) #XLIFF/XLIFF 2.0 only. This file format typically contains language information in the file itself. Use this option to override the language with one you specify.
          key_index: [empty](integer) #Excel/CSV only. Index of the column containing the key names. Column indexes start at 1.
          comment_index: [empty](integer) #Excel/CSV only. Index of the column containing description for the key. Column indexes start at 1.
          tag_column: [empty](integer) #Excel/CSV only. Index of the column containing a tag for the key. Column indexes start at 1 .
          column_separator: , (string) #CSV only. Char that is used to separate columns.
          quote_char: '"' (string) #CSV only. Char that is used to quote newlines and column separator.
          header_content_row: false (boolean) #CSV only. Indicates whether the first row contains only header information and should be skipped.
          first_content_row: 1 (integer) #Excel only. Index of first row to contain translation content.
          enable_pluralization: true (boolean) #Simple/Nested JSON only. Enables detection of pluralized keys. All matching keys will be persisted as pluralized keys.
          unescape_linebreaks: false (boolean) #Android XML only. All \n will be imported as true newlines
          escape_single_quotes: false (boolean) #Java Properties only. Escape single quotes with another single quote (e.g. I'm -> I''m ).
          
  pull:
    targets:
    - file: ./path/to/file/file.format
      params:
        file_format: FORMAT_API_EXTENSION (string) #See above. Only required if you deviate from the default format set in the header
        locale_id: LOCALE_ID (string) #Can be the name (e.g. en-US) or public id (via Language settings -> API) of the locale. Preferred is the public id.
        tags: TAG_1, TAG_2 (string) #Limit results to keys tagged with a list of comma separated tag names.
        include_empty_translations: false (boolean) #Indicates whether keys without translations should be included in the output as well.
        exclude_empty_zero_forms: false (boolean) #Indicates whether zero forms should be included when empty in pluralized keys.
        include_translated_keys: true (boolean) #Include translated keys in the locale file. Use in combination with include_empty_translations to obtain only untranslated keys.
        keep_notranslate_tags: false (boolean) #Indicates whether [NOTRANSLATE] tags should be kept.
        encoding: ENCODING (string) #Enforces a specific encoding on the file contents. Valid options are "UTF-8", "UTF-16", "UTF-16BE", "UTF-16LE" and "ISO-8859-1".
        include_unverified_translations: true (boolean) #If set to false unverified translations are excluded
        use_last_reviewed_version: false (boolean) #If set to true the last reviewed version of a translation is used. This is only available if the review workflow is enabled for the project.
        fallback_locale_id: LOCALE_ID (string) #Can be the name (e.g. en-US) or public id (via Language settings -> API) of the locale. Preferred is the public id.
        #-------------
        format_options:
          document_id: DOCUMENT_ID (string) #Takes the document ID of the existing HTML documents in your project the export should be based on.
          enclose_in_cdata: false (boolean) #XLIFF/Symfony XLIFF/Android XML only. Encloses translations containing html tags in CDATA
          include_translation_state: false (boolean) #XLIFF/Symfony XLIFF only. Include state of translations in the target locale
          indent_size: 4 (integer) #XLIFF/Android XML only. Specifies number of indentation characters
          indent_style: space (string) #XLIFF/Android XML only.Specifies indentation character. Allowed values are space and tab
          export_key_id_as_resname: true/false (boolean) #XLIFF only. Exports the Key ID as the "resname" attribute.
          export_key_name_hash_as_extradata: true/false (boolean) #XLIFF only. Exports the Key Name hash as the "extradata" attribute.
          delimit_placeholders: false (boolean) #XLIFF only. Removes <ph> tags from translations
          convert_placeholder: false (boolean) #iOS/Android XML only. Placeholder will be converted to match format specific requirements. Example: '$s' => '$@'
          include_pluralized_keys: false (boolean) #iOS only. Also include pluralized keys in the locale file.
          export_tags: false (boolean) #Excel/CSV only. Exports tags along with keys and translations.
          export_max_characters_allowed: false (boolean) #Excel/CSV only.Exports the key character limit along with keys and translations.
          escape_linebreaks: false (boolean) #Android XML only. All line breaks will be escaped as '\n'
          escape_single_quotes: false (boolean) #Java/Play Framework Properties only. Escape single quotes with another single quote (e.g. I'm -> I''m ).
          omit_separator_space: false (boolean) #Java Properties only. Skip the space before and after the separator sign (= ).
          crlf_line_terminators: false (boolean) #Java Properties only. Use CRLF (Windows) line terminator chars.
```
