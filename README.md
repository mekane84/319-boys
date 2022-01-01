# 

## Project setup
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
