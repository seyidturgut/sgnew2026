# High-Conversion Service Page Template (Transfer Pricing Style)

This template is based on the `/servisler/vergi-finans/vergi/transfer-fiyatlandirmasi` page, which has been identified as having a superior UI/UX for service content.

## JSON Structure

```json
{
  "slug": "service-slug",
  "title": "Main Title",
  "title_highlighted": "Highlighted Title",
  "category": "Category Name",
  "hero": {
    "title": "Hero Section Title",
    "description": "Short, punchy description of the service.",
    "image": "/images/path-to-hero-image.webp",
    "buttons": [
      { "text": "Call to Action 1", "link": "#contact", "variant": "primary" },
      { "text": "Call to Action 2", "link": "#services", "variant": "outline" }
    ]
  },
  "sections": [
    {
      "type": "content_with_image",
      "title": "Introduction to Service",
      "content": "<p>Detailed HTML content describing the service and its importance.</p>",
      "image": "/images/section-image.webp",
      "image_position": "right"
    },
    {
      "type": "icon_grid",
      "title": "Who is this for? / Kimler İçindir?",
      "items": [
        { "title": "Segment 1", "desc": "Description for segment 1.", "icon": "LucideIconName" },
        { "title": "Segment 2", "desc": "Description for segment 2.", "icon": "LucideIconName" }
      ]
    },
    {
      "type": "benefits_grid",
      "title": "What does it bring? / Ne Kazandırır?",
      "benefits": [
        { "title": "Benefit 1", "desc": "Description of benefit 1.", "icon": "LucideIconName" },
        { "title": "Benefit 2", "desc": "Description of benefit 2.", "icon": "LucideIconName" }
      ]
    },
    {
      "type": "service_cards",
      "title": "Highlights / Öne Çıkanlar",
      "cards": [
        { "title": "Feature 1", "desc": "Details about feature 1.", "icon": "LucideIconName", "color": "blue" },
        { "title": "Feature 2", "desc": "Details about feature 2.", "icon": "LucideIconName", "color": "green" }
      ]
    },
    {
      "type": "cta_box",
      "title": "Final Call to Action",
      "description": "Encouraging final message.",
      "button_text": "Main Button Label",
      "secondary_button": "Secondary Button Label"
    }
  ]
}
```

## Section Details

### 1. Hero
- Used in `ServicePageLayout`.
- Background image with overlay.
- Title split into `title` (orange/primary) and `titleHighlighted` (white).

### 2. content_with_image
- Large image next to text.
- Good for the main "What is this?" content.
- `image_position` can be `right` or `left`.

### 3. icon_grid
- 3-column grid for target segments.
- Uses Lucide icons.
- Title and short descriptions.

### 4. benefits_grid
- 2-column list of cards.
- Each benefit has an icon and background shading.

### 5. service_cards
- Premium look with colorful icon boxes.
- 3-column grid.
- `color` options: `blue`, `green`, `red`, `purple`, `orange`, `indigo`.

### 6. cta_box
- Full-width box with centered content.
- Encourages contact.

## Usage in Scripts
When generating new pages, prioritize this exact order and structure to maintain UI consistency.
