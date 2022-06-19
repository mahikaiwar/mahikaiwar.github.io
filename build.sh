rm -rf docs
npm run build
mv dist docs
git add .
git commit -m 'run build'
git push
