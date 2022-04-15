# Japanese Version
## はじめに

ハッカソンは時間との勝負です。なるべくフロントの開発に注力したいはずです。  
データベースとかデータの格納方法とかはちゃちゃっと済ませたいはずです。

そんなあなたに **kintone!!**

kintoneを使えばデータベースが **爆速** で作成できます。  
REST APIもあるので外部からデータの抜き出しも簡単にできます。

これはもう、kintone使うしかないですよね・・・・！？！？  
ということで、この記事ではハッカソンで即使えるkintoneについて説明します。

## 開発者ライセンスの取得方法

通常は1ユーザー1500円の有料契約をしないと使えません。  
でも、ハッカソンで使うのにお金払うとか嫌ですよね（僕も嫌です）

ただ、kintoneには開発者ライセンスがあり、こちらを使えばkintoneが
**無償** で利用できます。  
`ユーザーは5名まで / 本番運用はしない`
などの制限はありますがハッカソン利用であれば問題ありません。

cybozu developer network から申請が可能です。

> ▼ cybozu developer network  
> <https://developer.cybozu.io/hc/ja>

<img src="https://res.cloudinary.com/zenn/image/fetch/s--2E0kHqXp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/153051/459ee342-a42b-a067-b275-4ee4aae3bdac.png" loading="lazy" alt="トップ画像" />

トップページに「kintone開発者ライセンスを取得」があるのでこちらから申請が可能です。

> **cybozu developer network に登録するだけではダメです！！**  
> アカウント登録後、開発者ライセンスを申請してください！

アカウント登録時に利用したメールアドレス宛に「開発者ライセンスの準備ができました」的なメールが来ると思います。その中に記載されている
**URL / ログイン名 / パスワード**
を使ってkintoneにアクセスしてください。

## アプリの作成

kintoneでは、いわゆる一般的なデータベースでいうテーブルを **アプリ**
と呼びます。  
このアプリを複数作って、さまざまなデータベースをkintone上に構築するのが一般的な使い方です。

アプリの作り方ですが、

1. アプリの右側の `+` よりアプリを新規作成
2. `はじめから作成` を選択
3. 必要な `フィールド` を配置する
4. アプリの公開

のような手順で進めます。`フィールド`
はテーブルのカラムにと思ってもらえれば大丈夫です。

<img src="https://res.cloudinary.com/zenn/image/fetch/s--vw4PGC44--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://docs.google.com/drawings/d/e/2PACX-1vSWpzpd802oJ9psA7_xPqopK2Lg59zLKS1yDFynY2ASJ6_YGi06ZPVkWg-3tdhdkjbP-REe5u8rwVm0/pub%3Fw%3D955%26h%3D572" loading="lazy" alt="アプリ作成" />

このフィールドを右のエリアにドラッグ&ドロップで配置していきます。ハッカソンでよく使われるフィールドだと、

  - 文字列（１行）
  - 数値
  - 作成日時 ※値は自動で入る
  - ラジオボタン / ドロップダウン（プルダウン）
  - チェックボックス
  - 添付ファイル

とかですね。あとで修正することも簡単なので、とりあえず最小限のフィールドを配置してまずやってみることをおすすめします。  
あとは画面右上の `アプリの作成`
をクリックすれば、それだけでもうデータベースの完成です！爆速！

## GUIによるデータの登録・編集・削除

ブラウザからGUIで操作もできるので、エンジニアではない人でもサンプルデータの登録とかはできます。  
ハッカソンはエンジニアが忙しくなりがちですが、kintoneを使えばうまいこと役割分担もできるので便利です。

### レコード登録

ブラウザからデータを操作する場合も操作は簡単です。  
アプリの作成後、 `一覧画面` に遷移するので、そこで `+`
よりデータ（レコード）を追加します。

### レコード編集

登録したレコードを編集する場合は、一度その編集したいレコードを開き、`ペンマーク`
より編集モードへ切り替えます。

<img src="https://res.cloudinary.com/zenn/image/fetch/s--dntJ7SAH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://docs.google.com/drawings/d/e/2PACX-1vROL2vEVGTcgkibxINj6lTQOaNKbF9jzofY6BQALf7JXgBFzWJ0ajWowqvlxW64FFqfGJAPuNUaJr5j/pub%3Fw%3D960%26h%3D504" loading="lazy" alt="レコード編集時のボタン" />

### レコード削除

あまり使うことはないですが、ペンマークの右にある `・・・`
より、レコード削除を選択します。

------------------------------------------------------------------------

ここまでが基本機能です。  
これだけだと、正直ハッカソンでは扱いにくいところなのですが、次からがkintoneの真骨頂です。  
APIによるデータ操作について説明します。

## kintone API

kintoneはAPIも用意されており、

  - kintone REST API
  - kintone JavaScript API

があります。ダントツでハッカソンでよく使われるのは `REST API` です！

## kintone REST API

いわゆるRestfulなAPIです。kintoneのデータ（フィールドやレコード、アプリなど）を外部から操作することが可能です。

メソッドとしては `取得GET / 追加POST / 更新PUT / 削除DELETE`
が用意されています。

### 調べ方

kintoneの特定のURLに対してヘッダーとボディを書いてリクエストを投げることでデータの操作が可能です。

ここらへんからドキュメントが大事になり、REST
APIを実行するために必要な情報は全て  
[cybozu developer network](https://developer.cybozu.io/hc/ja)
に記載されています。

### ヘッダー

`kintone REST APIの共通仕様` を確認すれば、必要な `ヘッダー`
が確認できます。

> ▼ kintone REST APIの共通仕様  
> <https://developer.cybozu.io/hc/ja/articles/201941754>

### 認証

外部からkintoneのデータを操作する場合、認証が必要になります。  
認証には大きく２つ

  - パスワード認証
  - APIトークン認証

の２つの認証があり、おすすめは `APIトークン認証` です。

トークンの発行方法は、

  - アプリの設定画面を開く
  - 設定タブから `APIトークン` を開く
  - `生成する` をクリックしてトークンを生成する
    - 必要な `アクセス権` を設定する
  - 保存して `アプリを更新` する

❗よく最後の アプリの更新 をし忘れるので注意してください❗

APIトークンの場合、ヘッダーの書き方は

``` language-json
{
    "X-Cybozu-API-Token": "XXXXXXXXXXXX",
    "Content-Type": "application/json", // POST, PUT, DELETEの場合
  }
  
```


となります。

### URL/ボディ

`kintone REST API一覧` を確認すれば、必要な `URL/メソッド`
、そこから詳細ページを見ることで `パラメータ・ボディ` が確認できます。

> kintone REST API 一覧  
> <https://developer.cybozu.io/hc/ja/articles/360000313406>

例えば、 `レコード１件の登録` をしたい場合は、

<img src="https://res.cloudinary.com/zenn/image/fetch/s--DlLC7Opa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://docs.google.com/drawings/d/e/2PACX-1vTNTgnkiOfSlUhfUr1lz4yt75Q2y5C0tNsQ_IHW-39LWEbsV8sJeqTRqj_aD2NYaJiCBlK_mfmTwDda/pub%3Fw%3D960%26h%3D720" loading="lazy" alt="RESTAPI一覧" />

  - URL
    - <https://(サブドメイン名).cybozu.com/k/v1/record.json>
  - メソッド
    - POST
  - リクエストボディ
    - app / record

だと確認ができます。

## kintone JavaScript API

kintoneの画面自体をいじることができるAPIです。ボタンを配置したり、地図を埋め込んだりできます。  
kintoneは、ただのDBではなく `フロントもあるDB`
というのが結構大きな特徴です。  
データが入ってるかどうかブラウザで簡単に確認できるのも大きなメリットです
（デモ映え！）

ただ、ハッカソンではそこまで使われることはないので、今回は割愛します
m(\_ \_)m  
（Charts.jsでグラフをリッチにして表示する、とかはたまにありますね。でもそれkintone上じゃなくても良くね？感もありますw）

## サンプル

簡単なコードを載せてみます。チートシートです。  
ハッカソンでよく使われるものもあるので良かった使ってみてください。

1. Node.js でテキストデータを登録
2. Node.js で画像ファイルをアップロード
3. Python でテキストデータを登録し
4. Python で画像ファイルをアップロード
5. Python で画像ファイルをダウンロード

### 1. Node.jsでテキストデータを登録

Node.js用のSDK
[@kintone/rest-api-client](https://www.npmjs.com/package/@kintone/rest-api-client)
があるので、こちらを利用すると楽です

・ リポジトリ作成&移動

``` language-bash
mkdir kin-hack; cd $_
  
```


・ package.jsonの作成

``` language-bash
npm init
  
```


・ rest-api-clientのインストール

``` language-bash
npm i --save-dev @kintone/rest-api-client
  
```


・ プログラムの作成

``` language-bash
touch index.js
  
```

・ プログラムの中身

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
        value: '追加したいテキスト'
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
  
  
```

・ Node.jsの実行

``` language-bash
node index.js
  
```

・ レスポンス  
こんな感じのレスポンスがあれば成功です。

``` language-bash
{ id: '2', revision: '1' }
  
```

### 2. Node.js で画像ファイルをアップロード

次はテキストではなく `画像ファイル` のアップロードです。  
別の画像じゃなくてもPDFとかでも問題ないです。

・ プログラムの中身

<div class="code-block-filename-container">

<span class="code-block-filename">index.js</span>


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
      path: '追加したいファイルパス',
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
  
```


レスポンス自体は先ほどと同じ形式になります。  
コードを見ればなんとなくわかるとは思いますが、kintoneでファイルをアップロードする際は

1. まずファイル自体をkintoneにアップロードする
2. `ファイルのキー` を受け取る
3. その `ファイルのキー` をレコードに登録する

という流れになります。２回APIを実行していることになります！  
（コピペで動くと思うので、今後はこのコードをコピペすればOK!）

### 3. Pythonでテキストデータを登録

次はハッカソンで非常によく使われるPythonでのやり方です。

・ Pythonファイルの作成

``` language-bash
touch sample.py
  
```


・ プログラムの中身

``` language-python
#!/usr/bin/python
  # _*_ coding: utf-8 _*_
  
  import requests
  
  URL="https://SUB_DAMIN.cybozu.com/k/v1/"
  APPID=〇〇
  API_TOKEN="YOUR_API_TOKEN"
  PARAMS={
    "app":APPID,
    "record":{
      "text":{
        "value":"Pythonで追加したいテキスト"
      }
    }
  }
  
  def post_kintone(url,api_token,params):
      """kintoneにレコードを1件登録する関数"""
      headers={"X-Cybozu-API-Token":api_token,"Content-Type":"application/json"}
      resp=requests.post(url+"record.json",json=params,headers=headers)
  
      return resp
  
  if __name__=="__main__":
      RESP=post_kintone(URL,API_TOKEN,PARAMS)
  
      print(RESP.text)
  
```


・ Python実行

``` language-bash
python sample.py
  
```


### 4. Pythonで画像ファイルをアップロード

Pythonで画像ファイルのアップロードです。  
`ラズパイで撮影した写真をkintoneへ登録`
などのシナリオはよく聞くので、これは結構使えますよ!

``` language-python
#!/usr/bin/python
  # _*_ coding: utf-8 _*_
  
  import requests
  import json
  
  URL="https://SUB_DOMAIN.cybozu.com/k/v1/"
  APPID=〇〇
  API_TOKEN="YOUR_API_TOKEN"
  
  def post_file(url,api_token):
      """kintoneにファイルをアップロードする関数"""
      headers={"X-Cybozu-API-Token":api_token,'X-Requested-With':'XMLHttpRequest'}
      image=open('./hoge.jpg','rb')
      files={'file':('image.png',image,'image/png')}
      resp=requests.post(url+"file.json",files=files,headers=headers)
  
      return resp
  
  def post_record(url,api_token,params):
      """kintoneにレコードを1件登録する関数"""
      headers={"X-Cybozu-API-Token":api_token,"Content-Type":"application/json"}
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
              "type":"FILE",
              "fileKey":RSP["fileKey"]
            }]
          }
        }
      }
      RP=post_record(URL,API_TOKEN,PARAMS)
      print(RP.text)
  
  
```

### 5. Pythonで画像ファイルをダウンロード

Pythonで画像ファイルのダウンロードです。

``` language-python
#!/usr/bin/python
  # _*_ coding: utf-8 _*_
  
  import requests
  import json
  
  URL="https://SUB_DOMAIN.cybozu.com/k/v1/"
  APPID=〇〇
  RECORDID=××
  API_TOKEN="YOUR_API_TOKEN"
  
  def get_file(url,api_token,filekey):
      """kintoneにファイルをダウンロードする関数"""
      headers={"X-Cybozu-API-Token":api_token,'X-Requested-With':'XMLHttpRequest'}
      resp=requests.get(url+"file.json"+'?fileKey='+filekey,headers=headers)
      f=open("download.png",'bw')
      f.write(resp.content)
  
  def get_record(url,api_token,app,id):
      """kintoneのレコードを1件取得する関数"""
      headers={"X-Cybozu-API-Token":api_token}
      resp=requests.get(url+'record.json'+'?app='+str(app)+'&id='+str(id),headers=headers)
  
      return json.loads(resp.text)["record"]["file"]["value"][0]["fileKey"]
  
  if __name__=="__main__":
      RESP=get_record(URL,API_TOKEN,APPID,RECORDID)
      RSP=get_file(URL,API_TOKEN,RESP)
      print(RSP)
  
```

`download.png` として同じディレクトリ内に画像が生成されます。

## 参考

> ▼ kintoneの使い方 (データベース編)  
> <https://qiita.com/RyBB/items/daabb9b60d804ee2242f>
> ▼ kintone REST API について (GET編)  
> <https://qiita.com/RyBB/items/08cf511f1dbce6cf76bf>
> ▼ kintone REST API について (POST編)  
> <https://qiita.com/RyBB/items/94c13ca56887558bb227>
