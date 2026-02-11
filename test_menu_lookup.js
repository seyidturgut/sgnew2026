
import { serviceMenu } from './src/data/serviceMenu.js';

const targetSlug = 'pazara-giris-projeleri-destegi';
console.log("Looking for:", targetSlug);

const findServiceInMenu = (targetSlug) => {
    if (!targetSlug) return null;
    for (const cat of serviceMenu) {
        // console.log("Checking cat:", cat.slug);
        for (const sub of cat.subcategories || []) {
            // console.log("  Checking sub:", sub.slug);
            const found = sub.items?.find(item => {
                const ends = item.href.endsWith('/' + targetSlug);
                const exact = item.href === targetSlug;
                // console.log(`    Item: ${item.href} | Ends: ${ends} | Exact: ${exact}`);
                return ends || exact;
            });
            if (found) {
                console.log("FOUND:", found.title);
                return { category: cat, subcategory: sub, item: found };
            }
        }
    }
    return null;
};

const result = findServiceInMenu(targetSlug);
if (result) {
    console.log("Success!");
    console.log("Category:", result.category.title);
    console.log("Subcategory:", result.subcategory.title);
} else {
    console.log("FAILED to find service.");
}
