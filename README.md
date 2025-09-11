# City-Of-Pittsburgh-2024-Open-Data-Report

## Local Development

To run the site locally for development and testing:

### Prerequisites
- Python 3 (for the built-in HTTP server)

### Running Locally

1. Navigate to the parent directory of the project:
   ```bash
   cd ..
   ```

2. Start the local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Visit the site at: http://localhost:8000/City-Of-Pittsburgh-2024-Open-Data-Report/

### Why run from the parent directory?

This site uses absolute paths (e.g., `/City-Of-Pittsburgh-2024-Open-Data-Report/styles.css`) that match the GitHub Pages deployment structure. Running the server from the parent directory ensures these paths work correctly in both local development and production.

### Alternative: Using Node.js

If you have Node.js installed, you can also use:
```bash
cd ..
npx http-server -p 8000
```

### Pages
- Home: http://localhost:8000/City-Of-Pittsburgh-2024-Open-Data-Report/
- Contact: http://localhost:8000/City-Of-Pittsburgh-2024-Open-Data-Report/contact.html
- About: http://localhost:8000/City-Of-Pittsburgh-2024-Open-Data-Report/about.html