deploy: 
	npm run build
	cd dist
	git add .
	git commit -am "Deploy"
	git push origin gh-pages
