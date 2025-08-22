I got the following error when trying to debug a VitePress project:

> npm run docs:dev
>
> 
```bash
Please help me debug

> tokyo-geek@1.0.0 docs:dev
> vitepress dev docs

failed to start server. error:
can not read a block mapping entry; a multiline key may not be an implicit key at line 3, column 1:

    ^
YAMLException: can not read a block mapping entry; a multiline key may not be an implicit key at line 3, column 1:

    ^
    at generateError (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:20079:11)
    at throwError (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:20085:10)
    at readBlockMapping (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:20985:10)
    at composeNode (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:21271:13)
    at readDocument (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:21437:4)
    at loadDocuments (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:21500:6)
    at load (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:21526:20)
    at Object.safeLoad (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:21549:11)
    at parse$2 (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:22878:18)
    at parseMatter (file:///Users/user/GitHub/tokyo-geek/node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js:22996:18)
```

This command helped me to debug the issue:

```bash
node -e "const glob=require('glob');const matter=require('gray-matter');glob.sync('docs/**/*.md',{nodir:true}).forEach(f=>{try{matter.read(f)}catch(e){console.log(f);console.log(e.message);}})"
```
