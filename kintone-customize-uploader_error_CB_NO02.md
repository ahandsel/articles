# KintoneRestAPIError: [403] [CB_NO02] No privilege to proceed. Error when using kintone-customize-uploader CLI tool

This is an error related to account permissions and kintone-customize-uploader

If you encounter the `KintoneRestAPIError: [403] [CB_NO02] No privilege to proceed.` it is most likely has to do with the account being used to execute the `kintone-customize-uploader` cli tool.

## Full Error Message

```shell
An error occurred, retry
Failed to update customize setting
KintoneRestAPIError: [403] [CB_NO02] No privilege to proceed. (SoyMA67jQV6mU3NHzTyH)
    at KintoneResponseHandler.handleErrorResponse (/Users/username/.nodenv/versions/18.14.2/lib/node_modules/@kintone/customize-uploader/node_modules/@kintone/rest-api-client/lib/KintoneResponseHandler.js:57:15)
    at /Users/username/.nodenv/versions/18.14.2/lib/node_modules/@kintone/customize-uploader/node_modules/@kintone/rest-api-client/lib/KintoneResponseHandler.js:35:123
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
Child process exited with code: 1 and signal:. Terminating parent process...
```

## Cause
The cause is that the account used to upload the customization files to the Kintone App is not a Kintone Administrator.

As specified in the [Customizing an App Using JavaScript and CSS](https://get.kintone.help/k/en/id/040556.html) help document, only Kintone Administrators are allowed to upload JS & CSS customization files to any Kintone Apps.

> Note that JavaScript and CSS files can be uploaded on Kintone only by Kintone Administrators.

## Solution
Use an account with [Kintone Administrator](https://get.kintone.help/k/en/id/04058.html#permission_admin_permissions_concept_20) privilege when executing the `kintone-customize-uploader`.

To upgrade a Kintone account to have **Kintone Administrator** privilege:
1. Log into your Kintone Subdomain with the Kintone Admin account

2. Click the ⚙️ in the header.

3. Click the **Users & System Administration** option.
   * ⚠️ If the link does not appear, you do not have the administrative privilege, so cannot modify a Kintone account.
   * ![users_and_system_administration_us|690x234, 50%](upload://f1L1CKjzDkAvTKKIz4n5B52ChvC.png)

4. Click the **Administrators** from the left-side menu.

5. Enter a display name or a login name of the user in the search box to search for the target user. Moreover, you can expand the department tree and find the target user.

6. Select the users you want to add as administrators.
   * ![list_domain_auth_img03_us|671x359, 50%](upload://mdwmA0ng4TyRHAWlPv5jd4WLlrx.png)

7. Click **Add**.

8. Confirm that the target users are added to the "Administrators" section.

9. Click **Save**.

## Resources
* GitHub Repo: [js-sdk/packages/customize-uploader/](https://github.com/kintone/js-sdk/tree/master/packages/customize-uploader#kintone-customize-uploader)
* Tutorial: [Upload JavaScript and CSS files with Customize-uploader - Kintone Developer Program](https://kintone.dev/en/tutorials/tool-guides/upload-javascript-and-css-files-with-customize-uploader/)
* Kintone Help Documents:
  * [Configuring Kintone Users & System Administrators](https://get.kintone.help/general/en/id/0208.html)
  * [Accessing Kintone Users & System Administration](https://get.kintone.help/general/en/id/0204.html)
* npm: [@kintone/customize-uploader - npm](https://www.npmjs.com/package/@kintone/customize-uploader)
