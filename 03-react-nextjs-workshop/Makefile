# Makefile for React & Next.js Workshop

.PHONY: help check install dev build clean

# Default target
help:
	@echo "React & Next.js Workshop - Available Commands"
	@echo "=============================================="
	@echo ""
	@echo "  make check     - Check if all required tools are installed"
	@echo "  make install   - Install project dependencies"
	@echo "  make dev       - Start development server"
	@echo "  make build     - Build production bundle"
	@echo "  make clean     - Clean node_modules and build artifacts"
	@echo ""

# Check for required tools
check:
	@echo "Checking required tools..."
	@echo ""
	@command -v node >/dev/null 2>&1 || { echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"; exit 1; }
	@echo "✅ Node.js: $$(node --version)"
	@command -v npm >/dev/null 2>&1 || { echo "❌ npm is not installed. Please install npm."; exit 1; }
	@echo "✅ npm: $$(npm --version)"
	@echo ""
	@echo "All required tools are installed! ✨"
	@echo ""
	@echo "Next steps:"
	@echo "  1. Run 'make install' to install dependencies"
	@echo "  2. Run 'make dev' to start the development server"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install
	@echo ""
	@echo "✅ Dependencies installed successfully!"

# Start development server
dev:
	@echo "Starting development server..."
	npm run dev

# Build for production
build:
	@echo "Building for production..."
	npm run build

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf .next
	rm -rf node_modules
	@echo "✅ Clean complete!"
