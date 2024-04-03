# [Plugin to generate QR code from kintone field value - Qiita](https://qiita.com/spica/items/6f7eed5efa8cf4f74167)

* [kintoneのフィールド値からQRコードを生成するプラグイン](#kintoneのフィールド値からqrコードを生成するプラグイン)
* [概要](#概要)
* [カスタマイズ](#カスタマイズ)
  * [QR Code script](#qr-code-script)
* [プラグイン化もしました](#プラグイン化もしました)
* [プラグインの設定](#プラグインの設定)
* [Spicaについて](#spicaについて)


## kintoneのフィールド値からQRコードを生成するプラグイン


## 概要

kintoneのフィールド値からQRコードを生成してみます。 やることとしてはとってもシンプルですが、リンクの読み取りだけじゃなくハッシュ値なんかをQRコードで印刷して、電子チケットや入館管理システムなんかもkintoneと連携して作ることができちゃいます。

さくっとできる割には応用範囲の広いカスタマイズではないかということで、スクリプトの例とプラグインを作ってみましたので公開します。


## カスタマイズ

とりあえずGETリクエストでQRコード画像を作ることができる <https://goqr.me/api/> を使わせてもらってやってみました。

アプリに必要なフィールドは

* 文字列のフィールド（一行文字列、複数行文字列、リンク など）
* スペース

です。 以下のコード例では、 文字列フィールドのコードは「文字列_*1行*」 スペースのコードは「output」 というアプリで作っています。


### QR Code script

```javascript
  kintone.events.on([
      "app.record.detail.show", // PCのレコード詳細表示イベント
      "mobile.app.record.detail.show" //モバイルのレコード詳細表示イベント
  ], function (event) {
      try {
          const code_str = event.record['文字列__1行_'].value;
          // スペース要素の取得（PCとモバイルで要素取得のメソッドが違います）
          const space = kintone.app.record.getSpaceElement('output') || kintone.mobile.app.record.getSpaceElement('output');
          // QRコード用のimg要素を作ります
          const img = document.createElement('img');
          // GETクエリにQRコード化したい文字列を含めて画像のソースとして使うことができます。
          // サイズを 150 x 150 に指定しています。
          img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + code_str;
          // スペース要素に追加して表示完了
          space.appendChild(img);
          return event;
      } catch (ex) {
          console.warn("Exception KintoneEventsOn Queue", ex);
      }
  });
```


## プラグイン化もしました

ここまでやってみて、あまりに簡単なのでちょっとこれだけじゃなあ......ということでプラグインも作ってみました。 kintoneと連携する以上は外部のAPIに文字列を送信しないでQRコードにしたい場合が多いと思うので、プラグインでは <https://github.com/davidshimjs/qrcodejs> を使わせてもらっています。

![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F67365%2Fd8463110-639d-2ff4-0e18-1b2419eba684.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=2938013568dd2a0099554c3afae16022)

<https://spica-git.github.io/gh-projects/zip/kintone_qr_generator.zip>

↑プラグインのzipファイルが **ダウンロード** できます。


## プラグインの設定

こんな感じの設定ができます。 QRコードにしたい文字列フィールドとスペースを選択してサイズを指定。（80～1000ピクセルまで指定できます）

![qr_generator_plugin.png](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F67365%2Fbbc0280c-5803-9c37-4172-4ba50b4e3ef6.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=a8fb96b4c2007914bb86395bd08a0f67)

設定したレコードをアプリで見てみるとちゃんとQRコードが出力されました。

![](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F67365%2F3407f8b3-7b22-f3d7-8103-9423919b0546.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&s=cf4415d8c41dbb6689ddc343f798da18)

よしよし。大丈夫ですね！


## Spicaについて

さていかがでしたでしょうかー。もうkintoneハックしまくりの方にはちょっとつまらない内容だったかもしれないですが。 昨年のkintone AdventCarendarでは[俺とPTAとkintone](https://qiita.com/spica/items/6e7e086dbc9f650bf8e0)とか言って、kintoneの非営利団体向けライセンスで挫折しちゃった体験記を書いたのですが、本当はコロナ禍のなかでこそ活きる活動だったなあと色々タイミングが噛み合わなかったのいまだに悔しい今日このごろであります。

Spicaでは[機能拡張スタンダードAll-In](https://spica.tokyo/bluelaunch)というプラグインを販売しております。 かなり細かく自動計算したりフィールドの編集可不可とかPDF出力レイアウト作成とか一文字検索とかとかとかとかいろいろできるようになるプラグインでございます。よければトライアルで使ってみてもらえたらと。

ではでは、どクラウドです！
