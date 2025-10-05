#!/bin/bash

# Jekyll Build Script
echo "Starting Jekyll build..."

# Set bundle path to avoid permission issues
echo "Setting bundle configuration..."
bundle config set --local path 'vendor/bundle'

# Clean previous build
echo "Cleaning previous build..."
rm -rf _site _site_clean

# Install dependencies
echo "Installing dependencies..."
bundle install --jobs 4 --retry 3

# Build site
echo "Building site..."
bundle exec jekyll build --verbose

echo "Build completed!"
