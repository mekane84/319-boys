#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git config user.email "4631242+mekane84@users.noreply.github.com"
git commit -m 'New Deployment'
git push -f git@github.com:mekane84/319-boys.git master:gh-pages

cd -
