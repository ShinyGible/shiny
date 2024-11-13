## for user:

If you meet some bugs,
try to reset your config setting by url paramerter `reset=1`:
`https://rplus.github.io/pokemongo-shiny/?reset=1`

## for updating shiny list data:

1. pokemon data save on `src/assets/data/pm.csv`  
  you can open that with any spreadsheet software or just notepad.

  all csv columns/properties:

  | property | required? | type | description |
  | -------- | -------- | ----- | ----- |
  | `index`  | required | number | uni index, **SHOULD NOT CHANGE** after save |
  | `debut`  | required | string | released date |
  | `pid`    | required | string | uni key, image file name |
  | `group`  | required | string | grouping key, just write for free |
  | `order`  | -        | number | group position, will use `index` when no order number~  |
  | `tag`    | -        | string | tags for pokemon, combine tags with `=`.<br> e.q. `tag1=tag2=tag3` |
  | `suffix` | -        | string | suffix name, write mega or other types.<br>e.q. `(Y)`, `#7` |
  | `style`  | -        | string | custom image style,<br>e.q. `--w:140%;--l:-10%;--t:-10%;`
  | `src`    | -        | string | image url, custom image source, will overwrite the image of pid <br> could be https://ooxx.png |

2. you could host data by youself!

  1. open custom section in side-panel
  2. input the data url in the latest input
  3. choise right file type (json or csv)
  4. reload to see, or reset that wuth url [/?reset=1](https://rplus.github.io/pokemongo-shiny/?reset=1)


## for dev:

1. init & install dependency
	```
	make init;
	```

2. just dev~
	```
	make dev
	```
