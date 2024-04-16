# How to Avoid Japanese Characters in Your Code!


## The Problem - Do not mix `=` with `＝`

If you are working with Japanese in your code, you might have encountered a bug where you are using a "wrong" equal sign or semi-colon.

For example, I had `height＝100` instead of `height=100` in my code which caused a bug.  
Surprisingly hard to spot with the naked eye! 😅


## Unicode Ranges for Japanese Characters

5 Unicode ranges encompass Japanese characters.
These ranges are:
* Japanese-style Punctuation ( 3000 - 303f)
* Hiragana ( 3040 - 309f)
* Katakana ( 30a0 - 30ff)
* Full-Width Roman Characters and Half-Width Katakana ( ff00 - ffef)
* CJK Unified Ideographs Common and Uncommon Kanji ( 4e00 - 9faf)


## The Solution - Use the Highlight Bad Chars Extension

The [Highlight Bad Chars](https://marketplace.visualstudio.com/items?itemName=wengerk.highlight-bad-chars) extension allows you to highlight any Unicode characters you want in the VS Code editor.
Natively, it highlights some bad characters, such as the No-break space (` `) and the Greek question mark (`;`).

I added the Japanese Unicode ranges to the `highlight-bad-chars.additionalUnicodeChars` setting to see when I have Japanese characters in my code clearly.


### VS Code Settings

⚡ I recommend configuring the Japanese character highlighting setup as VS Code's [Workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) so that it is only applied to specific projects.

First, install the [Highlight Bad Chars](https://marketplace.visualstudio.com/items?itemName=wengerk.highlight-bad-chars) extension.

Then, append the following to your VS Code Workspace settings file (`.vscode/settings.json`).

```json
{
  "highlight-bad-chars.additionalUnicodeChars": [ "\u3000", "\u3001", "\u3002", "\u3003", "\u3004", "\u3005", "\u3006", "\u3007", "\u3008", "\u3009", "\u300a", "\u300b", "\u300c", "\u300d", "\u300e", "\u300f", "\u3010", "\u3011", "\u3012", "\u3013", "\u3014", "\u3015", "\u3016", "\u3017", "\u3018", "\u3019", "\u301a", "\u301b", "\u301c", "\u301d", "\u301e", "\u301f", "\u3020", "\u3021", "\u3022", "\u3023", "\u3024", "\u3025", "\u3026", "\u3027", "\u3028", "\u3029", "\u302a", "\u302b", "\u302c", "\u302d", "\u302e", "\u302f", "\u3030", "\u3031", "\u3032", "\u3033", "\u3034", "\u3035", "\u3036", "\u3037", "\u3038", "\u3039", "\u303a", "\u303b", "\u303c", "\u303d", "\u303e", "\u303f", "\u3040", "\u3041", "\u3042", "\u3043", "\u3044", "\u3045", "\u3046", "\u3047", "\u3048", "\u3049", "\u304a", "\u304b", "\u304c", "\u304d", "\u304e", "\u304f", "\u3050", "\u3051", "\u3052", "\u3053", "\u3054", "\u3055", "\u3056", "\u3057", "\u3058", "\u3059", "\u305a", "\u305b", "\u305c", "\u305d", "\u305e", "\u305f", "\u3060", "\u3061", "\u3062", "\u3063", "\u3064", "\u3065", "\u3066", "\u3067", "\u3068", "\u3069", "\u306a", "\u306b", "\u306c", "\u306d", "\u306e", "\u306f", "\u3070", "\u3071", "\u3072", "\u3073", "\u3074", "\u3075", "\u3076", "\u3077", "\u3078", "\u3079", "\u307a", "\u307b", "\u307c", "\u307d", "\u307e", "\u307f", "\u3080", "\u3081", "\u3082", "\u3083", "\u3084", "\u3085", "\u3086", "\u3087", "\u3088", "\u3089", "\u308a", "\u308b", "\u308c", "\u308d", "\u308e", "\u308f", "\u3090", "\u3091", "\u3092", "\u3093", "\u3094", "\u3095", "\u3096", "\u3097", "\u3098", "\u3099", "\u309a", "\u309b", "\u309c", "\u309d", "\u309e", "\u309f", "\u30a0", "\u30a1", "\u30a2", "\u30a3", "\u30a4", "\u30a5", "\u30a6", "\u30a7", "\u30a8", "\u30a9", "\u30aa", "\u30ab", "\u30ac", "\u30ad", "\u30ae", "\u30af", "\u30b0", "\u30b1", "\u30b2", "\u30b3", "\u30b4", "\u30b5", "\u30b6", "\u30b7", "\u30b8", "\u30b9", "\u30ba", "\u30bb", "\u30bc", "\u30bd", "\u30be", "\u30bf", "\u30c0", "\u30c1", "\u30c2", "\u30c3", "\u30c4", "\u30c5", "\u30c6", "\u30c7", "\u30c8", "\u30c9", "\u30ca", "\u30cb", "\u30cc", "\u30cd", "\u30ce", "\u30cf", "\u30d0", "\u30d1", "\u30d2", "\u30d3", "\u30d4", "\u30d5", "\u30d6", "\u30d7", "\u30d8", "\u30d9", "\u30da", "\u30db", "\u30dc", "\u30dd", "\u30de", "\u30df", "\u30e0", "\u30e1", "\u30e2", "\u30e3", "\u30e4", "\u30e5", "\u30e6", "\u30e7", "\u30e8", "\u30e9", "\u30ea", "\u30eb", "\u30ec", "\u30ed", "\u30ee", "\u30ef", "\u30f0", "\u30f1", "\u30f2", "\u30f3", "\u30f4", "\u30f5", "\u30f6", "\u30f7", "\u30f8", "\u30f9", "\u30fa", "\u30fb", "\u30fc", "\u30fd", "\u30fe", "\u30ff", "\uff00", "\uff01", "\uff02", "\uff03", "\uff04", "\uff05", "\uff06", "\uff07", "\uff08", "\uff09", "\uff0a", "\uff0b", "\uff0c", "\uff0d", "\uff0e", "\uff0f", "\uff10", "\uff11", "\uff12", "\uff13", "\uff14", "\uff15", "\uff16", "\uff17", "\uff18", "\uff19", "\uff1a", "\uff1b", "\uff1c", "\uff1d", "\uff1e", "\uff1f", "\uff20", "\uff21", "\uff22", "\uff23", "\uff24", "\uff25", "\uff26", "\uff27", "\uff28", "\uff29", "\uff2a", "\uff2b", "\uff2c", "\uff2d", "\uff2e", "\uff2f", "\uff30", "\uff31", "\uff32", "\uff33", "\uff34", "\uff35", "\uff36", "\uff37", "\uff38", "\uff39", "\uff3a", "\uff3b", "\uff3c", "\uff3d", "\uff3e", "\uff3f", "\uff40", "\uff41", "\uff42", "\uff43", "\uff44", "\uff45", "\uff46", "\uff47", "\uff48", "\uff49", "\uff4a", "\uff4b", "\uff4c", "\uff4d", "\uff4e", "\uff4f", "\uff50", "\uff51", "\uff52", "\uff53", "\uff54", "\uff55", "\uff56", "\uff57", "\uff58", "\uff59", "\uff5a", "\uff5b", "\uff5c", "\uff5d", "\uff5e", "\uff5f", "\uff60", "\uff61", "\uff62", "\uff63", "\uff64", "\uff65", "\uff66", "\uff67", "\uff68", "\uff69", "\uff6a", "\uff6b", "\uff6c", "\uff6d", "\uff6e", "\uff6f", "\uff70", "\uff71", "\uff72", "\uff73", "\uff74", "\uff75", "\uff76", "\uff77", "\uff78", "\uff79", "\uff7a", "\uff7b", "\uff7c", "\uff7d", "\uff7e", "\uff7f", "\uff80", "\uff81", "\uff82", "\uff83", "\uff84", "\uff85", "\uff86", "\uff87", "\uff88", "\uff89", "\uff8a", "\uff8b", "\uff8c", "\uff8d", "\uff8e", "\uff8f", "\uff90", "\uff91", "\uff92", "\uff93", "\uff94", "\uff95", "\uff96", "\uff97", "\uff98", "\uff99", "\uff9a", "\uff9b", "\uff9c", "\uff9d", "\uff9e", "\uff9f", "\uffa0", "\uffa1", "\uffa2", "\uffa3", "\uffa4", "\uffa5", "\uffa6", "\uffa7", "\uffa8", "\uffa9", "\uffaa", "\uffab", "\uffac", "\uffad", "\uffae", "\uffaf", "\uffb0", "\uffb1", "\uffb2", "\uffb3", "\uffb4", "\uffb5", "\uffb6", "\uffb7", "\uffb8", "\uffb9", "\uffba", "\uffbb", "\uffbc", "\uffbd", "\uffbe", "\uffbf", "\uffc0", "\uffc1", "\uffc2", "\uffc3", "\uffc4", "\uffc5", "\uffc6", "\uffc7", "\uffc8", "\uffc9", "\uffca", "\uffcb", "\uffcc", "\uffcd", "\uffce", "\uffcf", "\uffd0", "\uffd1", "\uffd2", "\uffd3", "\uffd4", "\uffd5", "\uffd6", "\uffd7", "\uffd8", "\uffd9", "\uffda", "\uffdb", "\uffdc", "\uffdd", "\uffde", "\uffdf", "\uffe0", "\uffe1", "\uffe2", "\uffe3", "\uffe4", "\uffe5", "\uffe6", "\uffe7", "\uffe8", "\uffe9", "\uffea", "\uffeb", "\uffec", "\uffed", "\uffee", "\uffef"
  ]
}
```

Then all the Japanese characters will be highlighted in your VS Code editor.


## Test

Copy the following text to your VS Code editor to verify that the Japanese characters are highlighted.

```text
| 　 | 、 | 。 | 〃 | 〄 | 々 | 〆 | 〇 | 〈 | 〉 | 《 | 》 | 「 | 」 | 『 | 』 |
| 【 | 】 | 〒 | 〓 | 〔 | 〕 | 〖 | 〗 | 〘 | 〙 | 〚 | 〛 | 〜 | 〝 | 〞 | 〟 |
| 〠 | 〡 | 〢 | 〣 | 〤 | 〥 | 〦 | 〧 | 〨 | 〩 | 〪 | 〫 | 〬 | 〭 | 〮 | 〯 |
| 〰 | 〱 | 〲 | 〳 | 〴 | 〵 | 〶 | 〷 | 〸 | 〹 | 〺 | 〻 | 〼 | 〽 | 〾 | 〿 |
```

Hope this prevents you from making the same mistake I did! 😄
