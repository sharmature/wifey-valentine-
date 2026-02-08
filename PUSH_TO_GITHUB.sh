#!/bin/bash
# Commands to push to GitHub
# Run these in your terminal

# Add remote (if not already added)
git remote add origin https://github.com/sharmature/wifey-valentine.git

# Or if remote already exists, update it:
# git remote set-url origin https://github.com/sharmature/wifey-valentine.git

# Set branch to main
git branch -M main

# Push to GitHub
git push -u origin main

# If you get authentication errors, you might need to:
# 1. Use a Personal Access Token instead of password
# 2. Or use SSH: git remote set-url origin git@github.com:sharmature/wifey-valentine.git

