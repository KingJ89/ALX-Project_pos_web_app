# Variables
VENV_NAME = venv
FLASK_APP = app.py
PYTHON = python3
PIP = $(PYTHON) -m pip
FLASK = $(VENV_NAME)/bin/flask
PYTHONPATH = $(VENV_NAME)/bin/python
SOURCE_DIR = src
STATIC_DIR = static
TEMPLATES_DIR = templates
LINTER = pylint

# Targets

# Create a virtual environment
venv:
	@echo "Creating virtual environment..."
	$(PYTHON) -m venv $(VENV_NAME)

# Install dependencies
install: venv
	@echo "Installing dependencies..."
	$(PIP) install -r requirements.txt

# Run the Flask application
run:
	@echo "Running Flask application..."
	$(FLASK) run

# Lint Python files
lint:
	@echo "Linting Python files..."
	$(LINTER) $(SOURCE_DIR)

# Run tests
test:
	@echo "Running tests..."
	$(PYTHON) -m unittest discover -s tests

# Build static assets (if using a build tool or preprocessor, add commands here)
build:
	@echo "Building static assets..."
	# Add commands to compile or process CSS/JS here

# Clean up build artifacts
clean:
	@echo "Cleaning up..."
	rm -rf $(VENV_NAME)
	rm -rf __pycache__
	rm -rf *.pyc

# Help message
help:
	@echo "Makefile commands:"
	@echo "  make venv        - Create virtual environment"
	@echo "  make install     - Install dependencies"
	@echo "  make run         - Run Flask application"
	@echo "  make lint        - Lint Python files"
	@echo "  make test        - Run tests"
	@echo "  make build       - Build static assets"
	@echo "  make clean       - Clean up build artifacts"
	@echo "  make help        - Show this help message"

.PHONY: venv install run lint test build clean help

