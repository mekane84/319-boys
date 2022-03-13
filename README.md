# 

## Project setup
Download git: https://git-scm.com/downloads

Download node.js https://nodejs.org/en/download/ - I clicked the "Windows Installer" image
```
npm install
```
Install tailwind
```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npx tailwindcss init -p
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy to GitHub pages
```
npm run deploy
```
I needed to configure shell on Windows 10
```
npm config set script-shell "C:\Program Files\Git\git-bash.exe"
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Fix email setting
go to github -> settings -> Emails
then either uncheck "Keep my email address private"
or, grab email on this page that looks like this:
99999999+username@users.noreply.github.com and modify 
```
git config user.email "99999999+username@users.noreply.github.com"
git commit --amend --reset-author
```
if intellij opens vim window, type control-c or control-x and then type ":qa" and press enter 

# TODO LIST

* improve some font sizes
* flicker for scrolling?
* work more on light / dark theme colors
* some kind of animation for page load before presenting champion images?
