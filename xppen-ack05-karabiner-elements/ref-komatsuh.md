---
title: "XPPen ACK05 ショートカットリモートを macOS の Karabiner-Elements と組み合わせて使用する"
emoji: "⌨️"
type: "tech"
topics:
  - "macos"
  - "keyboard"
  - "karabiner"
published: true
published_at: "2023-08-13 23:07"
---

初稿: 2023-08-13
小松弘幸 ([@komatsuh:twitter](https://twitter.com/komatsuh), [@komatsuh:bsky](https://bsky.app/profile/komatsuh.bsky.social))


## はじめに

XPPen ACK05 ショートカットリモート（以降 ACK05）は、いわゆる左手デバイスまたはマクロパッドと呼ばれる入力デバイスです。
シンプルなデザインが気に入っています。

macOS 用の設定アプリも用意されているので、それをそのまま利用することもできますが、Karabiner-Elements と組み合わせて利用することも可能です。
この記事ではその方法を紹介します。

![XPPen ACK05](https://storage.googleapis.com/zenn-user-upload/b3998992ced4-20230813.png)

<https://www.xp-pen.jp/product/1369.html>


## Karabiner-Elements とは

Karabiner-Elements とは macOS 用のキーボードやマウスの設定を変更するためのアプリケーションです。たとえば、日本語キーボードの変換/無変換キーを macOS 用のかな/英数キーに変更したり、F11 をマウスのクリックに割り当てたりなどができます。

定番の設定項目はすでに用意されていますが、JSON ファイルを書くことでより複雑な内容も設定できます。ACK05 の設定は JSON ファイルを書いて実現しています。

<https://karabiner-elements.pqrs.org/>


## ACK05 を Karabiner-Elements で使用する

通常では ACK05 用のドライバと設定アプリをインストールして使用しますが、Karabiner-Elements を使用する場合は使いません。ドライバやアプリをインストールする必要はありません。

ドライバがない状態でも ACK05 は標準の設定で動作します。Karabiner-Elements ではその標準設定をもとに変更を行います。

![ACK05 初期設定](https://storage.googleapis.com/zenn-user-upload/2dcd937c3e24-20230813.png)
*ACK05 初期設定 (商品サイトより)*


## ひな型用設定ファイルを読み込む

ひな型用設定ファイルを読み込むと、ACK05 の各キーとホイール左右を、数字キーと l, r に割り当てます。
数字キーと l, r を指定している部分を、実際に変更したい内容に書き換えます。

作業手順は次のようになります。

1. ひな型用の JSON ファイルを `~/.config/karabiner/assets/complex_modifications/xppen_ack05.json` に保存する
2. Karabiner-Elements 起動する
3. Devices の項目で、XP-PEN の Modify events を有効にする
4. Complex Modifications の項目で、Add rule から XPPen ACK05 の設定を Enable にする
5. XPPen ACK05 の優先順位を上げる


### 1. ひな型用の JSON ファイルを保存する

下記の設定ファイルを `~/.config/karabiner/assets/complex_modifications/xppen_ack05.json` に保存します。（折りたたまれています）

:::details xppen_ack05.json

```json:xppen_ack05.json
{
  "title": "XPPen ACK05 template",
  "rules": [
    {
      "description": "XPPen ACK05 template",
      "manipulators": [
        {
          "description": "Wheel Left",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "keypad_hyphen",
            "modifiers": {
              "mandatory": [
                "left_control"
              ]
            }
          },
          "to": [
            {
              "description": "Wheel Left",
              "key_code": "l"
            }
          ]
        },
        {
          "description": "Wheel Right",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "keypad_plus",
            "modifiers": {
              "mandatory": [
                "left_control"
              ]
            }
          },
          "to": [
            {
              "description": "Wheel Right",
              "key_code": "r"
            }
          ]
        },
        {
          "description": "K4",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "s",
            "modifiers": {
              "mandatory": [
                "left_control"
              ]
            }
          },
          "to": [
            {
              "description": "K4",
              "key_code": "4"
            }
          ]
        },
        {
          "description": "K3",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "f5"
          },
          "to": [
            {
              "description": "K3",
              "key_code": "3"
            }
          ]
        },
        {
          "description": "K2",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "n",
            "modifiers": {
              "mandatory": [
                "left_control"
              ]
            }
          },
          "to": [
            {
              "description": "K2",
              "key_code": "2"
            }
          ]
        },
        {
          "description": "K1",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "o",
            "modifiers": {
              "mandatory": [
                "left_control"
              ]
            }
          },
          "to": [
            {
              "description": "K1",
              "key_code": "1"
            }
          ]
        },
        {
          "description": "K10",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "z",
            "modifiers": {
              "optional": ["any"],
              "mandatory": [
                "left_control",
                "left_shift"
              ]
            }
          },
          "to": [
            {
              "description": "K10",
              "key_code": "0"
            }
          ]
        },
        {
          "description": "K9",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "spacebar"
          },
          "to": [
            {
              "description": "K9",
              "key_code": "9"
            }
          ]
        },
        {
          "description": "K8",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "z",
            "modifiers": {
              "optional": ["any"],
              "mandatory": [
                "left_control"
              ]
            }
          },
          "to": [
            {
              "description": "K8",
              "key_code": "8"
            }
          ]
        },
        {
          "description": "K7",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "left_option"
          },
          "to": [
            {
              "description": "K7",
              "key_code": "7"
            }
          ]
        },
        {
          "description": "K6",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "left_control",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [
            {
              "key_code": "left_control",
              "lazy": true
            }
          ],
          "to_if_alone": [
            {
              "description": "K6",
              "key_code": "6"
            }
          ]
        },
        {
          "description": "K5",
          "conditions": [
            {
              "type": "device_if",
              "identifiers": [
                {
                  "vendor_id": 10429,
                  "product_id": 514,
                  "description": "XPPen ACK05"
                }
              ]
            }
          ],
          "type": "basic",
          "from": {
            "key_code": "left_shift",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [
            {
              "key_code": "left_shift",
              "lazy": true
            }
          ],
          "to_if_alone": [
            {
              "description": "K5",
              "key_code": "5"
            }
          ]
        }
      ]
    }
  ]
}
```

:::


### 2. Karabiner-Elements 起動する

起動してください。


### 3. Devices の項目で、XP-PEN の Modify events を有効にする

![Karabiner-Elements > Devices](https://storage.googleapis.com/zenn-user-upload/ce75558d9c47-20230813.png)


### 4. Complex Modifications の項目で、Add rule から XPPen ACK05 の設定を Enable にする

![Karabiner-Elements > Complex MOdifications > Add rule](https://storage.googleapis.com/zenn-user-upload/dc5d53b9d0c4-20230813.png)


### 5. XPPen ACK05 の優先順位を上げる

![Karabiner-Elements > Complex MOdifications](https://storage.googleapis.com/zenn-user-upload/864b7e1df7a1-20230813.png)

優先順位を上げるのは他の設定との競合を避けるためです。 優先順位の高い他の設定で ACK05 の標準設定で使用しているキーを使っていると、そちらの設定が使用されてしまい期待通りの動作にならないおそれがあります。ACK05 側の設定は ACK05 のみに適用されるので他の設定には影響しません。

ここまでの設定ができていたら、各キーやホイールの入力で数字キーと l, r が入力できるようになっています。


## ひな型を編集する

ひな型で数字キーや l, r を設定している部分を好みの設定に書き換えます。Karabiner-Elements でできることはなんでもできます。

各キーの設定は次の順番で並んでいます。
ホイール左右, K4, K3, K2, K1, K10, K9, K8, K7, K6, K5

順番が直感的ではないのは、K7, K6, K5 キーが標準設定では Command, Control, Shift 単体に割り当てられているからです。これらを最後に設定することで、設定が評価される優先順位を調整しています。

JSON ファイルの編集方法についてはリファレンスマニュアルが参考になります。

<https://karabiner-elements.pqrs.org/docs/json/typical-complex-modifications-examples/>


## Karabiner-Elements でやれることやれないこと

やれること
* ACK05 のホイールおよび各キーの設定変更

やれないこと
* ACK05 標準アプリのような GUI による編集

やれるだろうけれど確認していないこと
* アプリケーションごとのキーの設定
* キー設定のページ切り替え

やり方が分かっていないこと
* ホイール中央の K11 キーの認識


## まとめ

XPPen ACK05 を Karabiner-Elements で設定する方法を紹介しました。私はアプリケーションの起動や画面の操作、エディタのショートカットキーなどに割り当てて便利に使っています。

K11 キーの認識方法をご存知の方がいらっしゃいましたらぜひ教えてください。
