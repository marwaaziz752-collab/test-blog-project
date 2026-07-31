import { visit } from 'unist-util-visit';
import path from 'path';

export function remarkFallbackAlt() {
  return function (tree, file) {
    visit(tree, 'image', (node) => {
      if (!node.alt || node.alt.trim() === '') {
        let derivedAlt = '';
        if (node.url) {
          try {
            // Try to parse as URL
            const urlObj = new URL(node.url, 'https://example.com');
            const filename = path.basename(urlObj.pathname);
            const nameWithoutExt = path.parse(filename).name;
            const decodedName = decodeURIComponent(nameWithoutExt);

            // Replace common separators with spaces
            let cleanedName = decodedName.replace(/[-_.+]/g, ' ').trim();

            // Filter out random google doc image strings like APuouO...
            if (cleanedName.length >= 3 && !/^[a-fA-F0-9]{10,}$/.test(cleanedName) && !cleanedName.includes('APuouO')) {
              derivedAlt = cleanedName;
            }
          } catch (e) {
            // Fallback for relative paths / file paths
            const filename = path.basename(node.url);
            const nameWithoutExt = path.parse(filename).name;
            let cleanedName = nameWithoutExt.replace(/[-_.+]/g, ' ').trim();
            if (cleanedName.length >= 3 && !/^[a-fA-F0-9]{10,}$/.test(cleanedName)) {
              derivedAlt = cleanedName;
            }
          }
        }

        // Fallback to title if derivedAlt is empty
        if (!derivedAlt) {
          const title = file.data?.astro?.frontmatter?.title;
          derivedAlt = title ? `Image for ${title}` : 'Blog post illustration';
        }

        node.alt = derivedAlt;
      }
    });
  };
}
