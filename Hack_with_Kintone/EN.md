# Japanese Version
## Introduction

Hackathons are a race against time. You want to focus on the front-end development as much as possible.  
You want to focus on the front-end development as much as possible, and not on the database and data storage.

If you're not sure how to do that, check out **kintone! ** kintone!

With kintone, you can create a database in **explosive speed**.  
It also has a REST API so you can easily extract data from the outside.

This is the only way to use kintone anymore. ・・・・!  
So, in this article, I will explain about kintone that you can use immediately in your hackathon.

## How to get a developer license

Normally, you need to sign up for a paid subscription of 1500 yen per user to use it.  
But I know you don't want to pay to use it in a hackathon (I don't either).

However, kintone has a developer license that allows you to use kintone for free.
**If you use this license, you can use kintone for free**.  
You can use kintone for free.
If you want to use it for a hackathon, you don't have to worry about it.

You can apply from the cybozu developer network.

> ▼ cybozu developer network  
> <https://developer.cybozu.io/hc/ja>

<img src="https://res.cloudinary.com/zenn/image/fetch/s--2E0kHqXp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https:// qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/153051/459ee342-a42b-a067-b275-4ee4aae3bdac.png" loading="lazy" alt="top image" />

On the top page, there is "Get a kintone developer license" and you can apply from here.

> **It's not enough to register with the cybozu developer network! **.  
> Register an account and then apply for a developer license!

You will receive a "Developer license is ready" email to the email address you used when you registered your account. You will receive a "Developer License is ready" email to the email address you used when you registered your account.
**URL / Login Name / Password**.
to access kintone.

## Create an app

In kintone, a table in a common database is called **app**.
in a common database.  
In kintone, a table in a database is called an **app**, and you can create multiple apps to build different databases on kintone.

Here's how to create an app

1. create a new app from the `+` button on the right side of the app. 2.
2. select `Create from scratch`. 3.
3. place the required `fields`. 4.
4. publish the app

4. Publish the app. You may think that the `fields
is for the table columns.

<img src="https://res.cloudinary.com/zenn/image/fetch/s--vw4PGC44--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https:// docs.google.com/drawings/d/e/2PACX-1vSWpzpd802oJ9psA7_xPqopK2Lg59zLKS1yDFynY2ASJ6_YGi06ZPVkWg-3tdhdkjbP-REe5u8rwVm0/pub%3Fw%3D955%. 26h%3D572" loading="lazy" alt="Create App" />

Drag and drop this field to the area on the right to place it. The most common fields used in hackathons are

  - String (1 line)
  - Numerical value
  - Date and time of creation *Value is automatically filled in
  - Radio button / drop-down (pull-down)
  - Checkbox
  - Attachments

And so on. It is easy to modify it later, so I recommend you to try it first by placing the minimum number of fields for now.  
After that, just click `Create App` in the upper right corner of the screen.
in the upper right corner of the screen, and that's it, your database is ready! Fast as a flash!

## Register, edit, and delete data with GUI

You can also use GUI from your browser, so even non-engineers can register sample data.  
You can also use the GUI from your browser, so even non-engineers can register sample data.

### Record Registration

If you want to manipulate data from a browser, it's easy.  
After creating the application, you will be redirected to the `list screen`, where you can add data (records) by clicking `+`.
After creating the application, you will be redirected to the `list screen`, where you can add data (records) from `+`.

### Edit Record

To edit a registered record, open the record you want to edit and switch to edit mode from the `pen mark`.
to switch to edit mode.

<img src="https://res.cloudinary.com/zenn/image/fetch/s--dntJ7SAH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https:// docs.google.com/drawings/d/e/2PACX-1vROL2vEVGTcgkibxINj6lTQOaNKbF9jzofY6BQALf7JXgBFzWJ0ajWowqvlxW64FFqfGJAPuNUaJr5j/pub%3Fw%3D960%. 26h%3D504" loading="lazy" alt="Button when editing record" />

### Delete record

It is not often used, but from the `...` button to the right of the pen mark
to the right of the pen mark.

------------------------------------------------------------------------

This is the basic function so far.  
The next part is the essence of kintone.  
I'll explain how to use the API to manipulate data.

## kintone API

kintone also has APIs, such as

  - kintone REST API
  - kintone JavaScript API

APIs. The most common API used in hackathons is the `REST API`!

## kintone REST API

This is a so-called Restful API that allows you to manipulate kintone data (fields, records, apps, etc.) from the outside.

The methods are `Get Get / Add POST / Update PUT / Delete DELETE`.
are provided.

### How to check

You can manipulate data by throwing a request with a header and body to a specific URL in kintone.

This is where the documentation becomes important, and the REST
You can find all the information you need to run the REST API in  
All the information necessary to run the REST API can be found in [cybozu developer network](https://developer.cybozu.io/hc/ja).
All the information necessary to run the REST API can be found in [cybozu developer network]().

### Header

If you look at the `Common specification of kintone REST API`, you can see the `headers` you need.
You can check the required `headers` by checking the `Common specification of kintone REST API`.

> You can find the necessary `headers` by checking the `Common specification of kintone REST API`.  
> <https://developer.cybozu.io/hc/ja/articles/201941754>

### Authentication

If you want to manipulate kintone data from outside, you will need to authenticate.  
There are two main types of authentication

  - Password authentication
  - API token authentication

The recommended method is `API token authentication`.

To issue a token, follow these steps

  - Open the app's settings page.
  - Open `API Token` from the settings tab
  - Click `Generate` to generate the token
    - Set the necessary `access rights
  - Save and update your app

Be careful not to forget to update the app at the end ❗ For API tokens, click on the `Generate` button in the header

For API tokens, the header should be written as

``` language-json
{
    "X-Cybozu-API-Token": "XXXXXXXXXXX",
    "Content-Type": "application/json", // For POST, PUT, DELETE
  }
  
```.


becomes.

### URL/body.

If you check the `kintone REST API list`, you will see the required `URL/Method`.
and from there, you can check the `parameter body` by looking at the detail page.

> kintone REST API List  
> <https://developer.cybozu.io/hc/ja/articles/360000313406>

For example, if you want to `register one record`, you can use

<img src="https://res.cloudinary.com/zenn/image/fetch/s--DlLC7Opa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https:// docs.google.com/drawings/d/e/2PACX-1vTNTgnkiOfSlUhfUr1lz4yt75Q2y5C0tNsQ_IHW-39LWEbsV8sJeqTRqj_aD2NYaJiCBlK_mfmTwDda/pub%3Fw%3D960%. 26h%3D720" loading="lazy" alt="RESTAPI List" />

  - URL
    - <https://(subdomain name).cybozu.com/k/v1/record.json>
  - Method
    - POST
  - Request body
    - app / record

You can check if it is

## kintone JavaScript API

This API allows you to tweak the kintone screen itself. You can place buttons, embed maps, and so on.  
kintone is not only a DB, but also a DB with a front-end.
This is a big feature of kintone.  
It is also a big advantage that you can easily check if the data is in the browser.
It's a great demo.

However, it will not be used that much in the hackathon, so I will skip it this time.
m(\cH000000)}m(\cH000000)}m  
(Sometimes you can use Charts.js to display richer graphs. But it doesn't have to be on kintone, right? )

## Sample

Here's a simple code. Here is a cheat sheet.  
Some of these are often used in hackathons, so feel free to try them out.

Register text data in Node.js. 2.
Uploading an image file in Node.js
Register text data in Python and upload image files in Python.
Uploading image files in Python 5.
Download image files in Python.

### 1. Register text data with Node.js

SDK for Node.js
[@kintone/rest-api-client](https://www.npmjs.com/package/@kintone/rest-api-client)
There is an SDK for Node.js [@kintone/rest-api-client](@kintone/rest-api-client).

Create & move repository

``` language-bash
mkdir kin-hack; cd $_
  
Create & move repository


Create package.json.

``` language-bash
npm init
  
Install rest-api-client


Install rest-api-client

``` language-bash
npm i --save-dev @kintone/rest-api-client
  
``` .


Create a program

``` language-bash
touch index.js
  
Create the program

Contents of the program

index.js

``` language-javascript
  const { KintoneRestAPIClient } = require('@kintone/rest-api-client');
  const client = new KintoneRestAPIClient({
    baseUrl: 'https://YOUR_SUB_DOMAIN.cybozu.com',
    auth: {
      apiToken: 'YOUR_API_TOKEN'
    }
  });
  
  (async () => {
    const app = 'YOUR_APP_ID';
    const record = {
      text: {
        value: 'the text to add'
      }
    };
  
    // Add Record
    try {
      const resp = await client.record.addRecord({app, record});
      console.log(rsep);
    } catch(err) {
      console.log(err);
    };
  })();
  
  
````

Running Node.js

``` language-bash
node index.js
  
``` .

Response  
If you get a response like this, you've succeeded.

``` language-bash
{ id: '2', revision: '1' }
  
``` ### 2.

### Uploading image files with Node.js

The next step is to upload an `image file` instead of a text file.  
It doesn't have to be another image, a PDF file will do.

The contents of the program

<div class="code-block-filename-container"> <span class="code-block-filename-container

<span class="code-block-filename">index.js</span>.


``` language-javascript
const { KintoneRestAPIClient } = require('@kintone/rest-api-client');
  const client = new KintoneRestAPIClient({
    baseUrl: 'https://YOUR_SUB_DOMAIN.cybozu.com',
    auth: {
      apiToken: 'YOUR_API_TOKEN'
    }
  });
  
  (async () => {
    const app = 'YOUR_APP_ID';
    const file = {
      path: 'the file path to add',
    };
    try {
      const resp = await client.file.uploadFile({file});
      const res = await client.record.addRecord({
        app,
        record: {
          file: {
            value: [{
              fileKey: resp.fileKey
            }]
          }
        }
      });
      console.log(res);
    } catch(err) {
      console.log(err);
    }
  })();
  
The ````


The response itself will be in the same format as before.  
As you can see from the code, when you upload a file to kintone, you need to

1. upload the file itself to kintone
2. receive the `file key` 3.
This is the process of registering the `file key` to a record.

You're running the API twice!  
(I'm sure this will work, so just copy and paste this code from now on!

### Registering text data in Python

The next step is to register the text data in Python, which is a very common method used in hackathons.

Creating a Python file

``` language-bash
touch sample.py
  
Create a Python file


The contents of the program

``` language-python
#! /usr/bin/python
  # _*_ coding: utf-8 _*_
  
  import requests
  
  URL="https://SUB_DAMIN.cybozu.com/k/v1/"
  APPID=00
  API_TOKEN="YOUR_API_TOKEN"
  PARAMS={
    "app":APPID,
    "record":{
      "text":{
        "value": "Text to be added in Python."
      }
    }
  }
  
  def post_kintone(url,api_token,params):
      """Function to post one record to kintone."""
      headers={"X-Cybozu-API-Token":api_token, "Content-Type": "application/json"}
      resp=requests.post(url+"record.json",json=params,headers=headers)
  
      return resp
  
  if __name__=="__main__":
      RESP=post_kintone(URL,API_TOKEN,PARAMS)
  
      print(RESP.text)
  
````


Run Python

``` language-bash
python sample.py
  
``` ### 4.


### 4. Uploading an image file in Python

Uploading image files in Python.  
We often hear about scenarios such as `registering photos taken with raspberry to kintone`.
We often hear about scenarios like this, so this can be quite useful!

``` language-python
#! /usr/bin/python
  # _*_ coding: utf-8 _*_
  
  import requests
  import json
  
  URL="https://SUB_DOMAIN.cybozu.com/k/v1/"
  APPID=00
  API_TOKEN="YOUR_API_TOKEN"
  
  def post_file(url,api_token):
      """Function to upload a file to kintone."""
      headers={"X-Cybozu-API-Token":api_token,'X-Requested-With':'XMLHttpRequest'}
      image=open('. /hoge.jpg','rb')
      files={'file':('image.png',image,'image/png')}
      resp=requests.post(url+"file.json",files=files,headers=headers)
  
      return resp
  
  def post_record(url,api_token,params):
      """Function to post one record to kintone."""
      headers={"X-Cybozu-API-Token":api_token, "Content-Type": "application/json"}
      resp=requests.post(url+'record.json',json=params,headers=headers)
  
      return resp
  
  if __name__=="__main__":
      RESP=post_file(URL, API_TOKEN)
      RSP=json.loads(RESP.text)
      PARAMS={
        "app":APPID,
        "record":{
          "file":{
            "value":[{
              "type": "FILE",
              "fileKey":RSP["fileKey"].
            }]
          }
        }
      }
      RP=post_record(URL,API_TOKEN,PARAMS)
      print(RP.text)
  
  
```

### 5. Downloading image files in Python

Download the image file in Python.

``` language-python
### 5. /usr/bin/python
  # _*_ coding: utf-8 _*_
  
  import requests
  import json
  
  URL="https://SUB_DOMAIN.cybozu.com/k/v1/"
  APPID=00
  RECORDID=××
  API_TOKEN="YOUR_API_TOKEN"
  
  def get_file(url,api_token,filekey):
      """Function to download a file to kintone."""
      headers={"X-Cybozu-API-Token":api_token,'X-Requested-With':'XMLHttpRequest'}
      resp=requests.get(url+"file.json "+'?fileKey='+filekey,headers=headers)
      f=open("download.png",'bw')
      f.write(resp.content)
  
  def get_record(url,api_token,app,id):
      """Function to retrieve one record from kintone"""
      headers={"X-Cybozu-API-Token":api_token}
      resp=requests.get(url+'record.json'+'?app='+str(app)+'&id='+str(id),headers=headers)
  
      return json.loads(resp.text)["record"]["file"]["value"][0]["fileKey"]
  
  if __name__=="__main__":
      RESP=get_record(URL,API_TOKEN,APPID,RECORDID)
      RSP=get_file(URL,API_TOKEN,RESP)
      print(RSP)
  
````

The image will be generated in the same directory as `download.png`.

## Reference

> ▼ How to use kintone (Database)  
> <https://qiita.com/RyBB/items/daabb9b60d804ee2242f>
> ▼ About kintone REST API (GET)  
> <https://qiita.com/RyBB/items/08cf511f1dbce6cf76bf>
> ▼ About kintone REST API (POST)  
> <https://qiita.com/RyBB/items/94c13ca56887558bb227>
