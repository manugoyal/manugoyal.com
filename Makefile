BUCKET = s3://manugoyal.com
COMMAND = s3cmd sync --delete-removed dist/ $(BUCKET)

# S3 gets the MIME type for style.css wrong, so we have to repush it
# manually
CSSCMD = s3cmd -m text/css put dist/styles.css $(BUCKET)

sync:
	$(COMMAND)
	$(CSSCMD)

dry-run:
	$(COMMAND) --dry-run
	$(CSSCMD) --dry-run

size:
	s3cmd du $(BUCKET)

deps:
	bower install
	npm install
