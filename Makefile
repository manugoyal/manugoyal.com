BUCKET = s3://manugoyal.com
PREFIX = aws --profile manu.goyal2013 s3
SYNCCMD = $(PREFIX) sync --delete dist/ $(BUCKET)

sync:
	$(SYNCCMD)

dryrun:
	$(SYNCCMD) --dryrun

size:
	$(PREFIX) ls --recursive $(BUCKET) | awk '{print $$3}'

deps:
	bower install
	npm install
