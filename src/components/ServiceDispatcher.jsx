import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { serviceMenu } from '../data/serviceMenu';
import SubCategoryPage from '../pages/SubCategoryPage';
import DynamicServicePage from '../pages/DynamicServicePage';

const ServiceDispatcher = () => {
    const params = useParams();

    // URL segments from defined routes in App.jsx
    // We will capture them as variadic or check specific keys
    // But since we use specific routes in App.jsx like :p1/:p2, we can unify here.
    // Actually, easier to use a catch-all route in App.jsx or access input params.

    // Let's assume App.jsx passes params p1, p2, p3, p4
    // Or we stick to the names in App.jsx: category, subcategory, slug
    // But those names might be misleading if the depth varies.
    // e.g. /servisler/mevzuat-ve-uyum/sozlesme-risk-yonetimi
    // App.jsx route: /servisler/:category/:subcategory
    // category = mevzuat-ve-uyum
    // subcategory = sozlesme-risk-yonetimi (But this is actually a PAGE slug)

    let { category, subcategory, slug, deepSlug } = params;

    // Normalization Map for Aliased Slugs (Href -> Real Slug)
    const slugAliases = {
        'mevzuat-ve-uyum': 'mevzuat-uyum',
        'globallesme-ve-ihracat': 'globallesme-ihracat',
        'finansmana-erisim-ve-surdurulebilirlik': 'finansmana-erisim-surdurulebilirlik',
        'ar-ge-ve-fikri-mulkiyet': 'ar-ge-ve-fikri-mulkiyet', // Same, but good to have
        'vergi-finans': 'vergi-finans',
        'kurumsal-finans': 'kurumsal-finans',
        'dis-ticaret': 'dis-ticaret'
    };

    // Scenario 0: Root Category Page (e.g. /servisler/mevzuat-ve-uyum)
    // Here, category param is undefined if route is /servisler/:slug
    // So slug param holds the potential category slug.
    if (!category && slug) {
        const potentialCategorySlug = slugAliases[slug] || slug;
        const isCategory = serviceMenu.some(c => c.slug === potentialCategorySlug);

        if (isCategory) {
            return <SubCategoryPage forcedCategory={potentialCategorySlug} />;
        }
    }

    const realCategorySlug = slugAliases[category] || category;
    const categoryObj = serviceMenu.find(c => c.slug === realCategorySlug);

    if (!categoryObj) {
        // Not a known category in URL path, or it's a direct service page handled above
        return <DynamicServicePage />;
    }

    // SCENARIO 1: We have 2 segments (category / segment2)
    if (subcategory && !slug) {
        const potentialSubcatSlug = subcategory;

        // Check if this segment is a real subcategory
        const isRealSubcategory = categoryObj.subcategories?.some(s => s.slug === potentialSubcatSlug);

        if (isRealSubcategory) {
            // It is a subcategory listing page
            // e.g. /servisler/vergi-finans/vergi
            return <SubCategoryPage />;
        } else {
            // It is NOT a subcategory, so it must be a Service Page
            // e.g. /servisler/mevzuat-ve-uyum/sozlesme-risk-yonetimi
            // We need to render DynamicServicePage, but we need to pass the slug correctly.
            // React Router passed it as 'subcategory' param.

            // We can treat 'subcategory' param as the 'slug' for DynamicServicePage
            // But DynamicServicePage uses useParams(). 
            // So we might need to pass props or let it rely on URL?
            // Since DynamicServicePage uses useParams(), it will read 'category' and 'subcategory'.
            // In this case `subcategory` is actually the `slug`.
            // We should modify DynamicServicePage to handle this OR pass the slug explicitly as prop.
            // We treat 'subcategory' from params as the 'slug'. And forcedSubcategory should be null.
            return <DynamicServicePage forcedSlug={potentialSubcatSlug} forcedSubcategory={null} />;
        }
    }

    // SCENARIO 2: 3 Segments
    if (subcategory && slug) {
        return <DynamicServicePage />;
    }

    // Fallback
    return <DynamicServicePage />;
};

export default ServiceDispatcher;
