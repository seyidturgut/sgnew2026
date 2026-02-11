import React from 'react';
import { useParams } from 'react-router-dom';
import { productsMenu } from '../data/productsMenu';
import SubCategoryPage from '../pages/SubCategoryPage';
import DynamicServicePage from '../pages/DynamicServicePage';

const ProductDispatcher = () => {
    const params = useParams();
    let { category, subcategory, slug } = params;

    // Normalization Map for Aliased Slugs if any
    const slugAliases = {
        'mevzuat-ve-uyum': 'mevzuat-ve-uyum',
        'globallesme-ve-ihracat': 'globallesme-ve-ihracat',
        'ar-ge-ve-fikri-mulkiyet': 'ar-ge-ve-fikri-mulkiyet',
        'vergi-ve-finans': 'vergi-ve-finans',
        'online-danismanlik-ve-egitim': 'online-danismanlik-ve-egitim'
    };

    // Scenario 0: Root Category Page (e.g. /dijital-urunler/ar-ge-ve-fikri-mulkiyet)
    if (!category && slug) {
        const potentialCategorySlug = slugAliases[slug] || slug;
        const isCategory = productsMenu.some(c => c.slug === potentialCategorySlug);

        if (isCategory) {
            return <SubCategoryPage forcedCategory={potentialCategorySlug} isProduct={true} />;
        }
    }

    const realCategorySlug = slugAliases[category] || category;
    const categoryObj = productsMenu.find(c => c.slug === realCategorySlug);

    if (!categoryObj) {
        // Not a known category in productsMenu, fallback to DynamicServicePage (might be a direct product)
        return <DynamicServicePage />;
    }

    // SCENARIO 1: We have 2 segments (category / segment2)
    if (subcategory && !slug) {
        const potentialSubcatSlug = subcategory;

        // Check if this segment is a real subcategory (e.g. 'dijital-cozumler')
        const isRealSubcategory = categoryObj.subcategories?.some(s => s.slug === potentialSubcatSlug);

        if (isRealSubcategory) {
            return <SubCategoryPage isProduct={true} />;
        } else {
            // It is a specific Product page (no subcat grouping in URL)
            return <DynamicServicePage forcedSlug={potentialSubcatSlug} forcedSubcategory={null} />;
        }
    }

    // SCENARIO 2: 3 Segments (category / subcategory / slug)
    if (subcategory && slug) {
        return <DynamicServicePage />;
    }

    // Fallback
    return <DynamicServicePage />;
};

export default ProductDispatcher;
