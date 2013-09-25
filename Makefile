COMMAND = s3cmd sync --exclude '*.git*' --exclude '.gitignore' --exclude 'Makefile' --exclude-from '.gitignore' ./ s3://manugoyal.com

sync:
	$(COMMAND)

dry-run:
	$(COMMAND) --dry-run
