BUCKET = s3://manugoyal.com
COMMAND = s3cmd sync --exclude '*.git*' --exclude '.gitignore' --exclude 'Makefile' --exclude-from '.gitignore' --delete-removed ./ $(BUCKET)

# S3 gets the MIME type for style.css wrong, so we have to repush it
# manually
CSSCMD = s3cmd -m text/css put styles.css $(BUCKET)

sync:
	$(COMMAND)
	$(CSSCMD)

dry-run:
	$(COMMAND) --dry-run
	$(CSSCMD) --dry-run

size:
	s3cmd du $(BUCKET)

deps:
	bower install bootstrap
	mkdir -p vendor
	cp bower_components/bootstrap/dist/css/bootstrap.min.css vendor/
	cp bower_components/angular/angular.min.js vendor/
	cp bower_components/angular/angular.min.js.map vendor/
