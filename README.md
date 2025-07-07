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
  | `pid`    | required | string | uni key, image file name. format: `pm25.cFALL_2018`... |
  | `group`  | required | string | grouping key. write for free, but you could use the same prefix to make groups adjacent |
  | `order`  | -        | number | group position, will use `index` when no order number~  |
  | `tag`    | -        | string | tags for pokemon, combine tags with `=`.<br> e.q. `tag1=tag2=tag3` |
  | `suffix` | -        | string | suffix name, write mega or other types.<br>e.q. `(Y)`, `#7` |
  | `style`  | -        | string | custom image style,<br>e.q. `--w:140%;--l:-10%;--t:-10%;`
  | `src`    | -        | string | image url, custom image source, will overwrite the image of pid <br> could be https://ooxx.png |

  more details:
  https://github.com/Rplus/pokemongo-shiny/discussions/2

  ※ If you use custom `src`, and try to create a custom `pid`, just follow basic format rules:

  1. starts with `pm` + pokedex-number + `.`
  2. suffix name: you could write any name for free, but there are some naming rules for tag system if you need
    * `fMEGA` => mega tag
    * `fALOLA` => alola tag
    * `fORIGIN` => origin tag
    * `fHISUIAN` => hisuian tag
    * `fGALARIAN` => galarian tag
    * you could see all rules from `get_default_tags` function in `/src/lib/pm.svelte.js` file.

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
