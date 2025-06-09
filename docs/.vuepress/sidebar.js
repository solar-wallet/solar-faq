import fs from 'fs';
import path from 'path';

// Function to extract the H1 headline from markdown content
function getH1Headline(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const h1Match = content.match(/^#\s+(.*)/m);
    if (h1Match && h1Match[1]) {
      return h1Match[1].trim();
    }
  } catch (e) {
    return null;
  }
  return null;
}

// Function to format filename into a title (fallback)
function formatFilenameToTitle(filename) {
  return filename
    .replace(/^\d+-/, '') // Remove leading numbers like '01-'
    .replace(/\.md$/, '') // Remove .md extension
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function getChildren(dirPath) {
  const list = [];
  try {
    const files = fs.readdirSync(dirPath);

    files.sort(); // Sort to maintain order, relies on numeric prefixes

    for (const file of files) {
      if (file.toLowerCase() === 'readme.md' || !file.endsWith('.md')) {
        continue; // Skip README.md and non-markdown files
      }

      const filePath = path.join(dirPath, file);
      const headline = getH1Headline(filePath);
      const filenameBase = file.replace(/\.md$/, '');
      const linkText = headline || formatFilenameToTitle(filenameBase);
      
      list.push({
        text: linkText,
        link: `/guide/${filenameBase}.html` 
      });
    }
  } catch (e) {
    // Return an empty list or some default if directory reading fails
    return []; 
  }

  // Add the static link to solarwallet.io at the end of the list
  list.push({ text: 'solarwallet.io', link: 'https://solarwallet.io' });

  return list;
}