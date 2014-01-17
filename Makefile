ADDRESS = s3://manugoyal.com
COMMAND = s3cmd sync --exclude '*.git*' --exclude '.gitignore' --exclude 'Makefile' --exclude-from '.gitignore' ./ $(ADDRESS)

sync:
	$(COMMAND)

dry-run:
	$(COMMAND) --dry-run

size:
	s3cmd du $(ADDRESS)

deps:
	bower install angular
	bower install bootstrap
	mkdir vendor
	cp bower_components/bootstrap/dist/css/bootstrap.min.css vendor/
	cp bower_components/angular/angular.min.js vendor/
