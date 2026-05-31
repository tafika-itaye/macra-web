# MACRA Migration Notes

## Excluded Junk and Template Content

- Spectrum Department modal: A full-page overlay ad injected on the homepage containing
  regulatory Spectrum Management copy. Not a real page section. It is a WordPress ad widget
  with a 20-second auto-dismiss timer. The Spectrum page will be a stub until proper page
  content is sourced directly from MACRA.

- Dismissable ad overlay ("This will close in 20 seconds"): WordPress template widget. Excluded.

- [ays_poll id=3] shortcode: WP poll plugin shortcode found inside the modal. Not renderable. Excluded.

- Slider Revolution: Homepage hero was a Slider Revolution WordPress plugin carousel.
  Replaced with a clean static hero section. Source proper hero images from MACRA and place
  in public/images/ before launch.

- Duplicate navigation: WordPress theme rendered the full nav block twice in the DOM.
  Rebuild uses a single responsive nav component.

- Duplicate topbar: Phone, email, and social appeared in two separate header strips.
  Rebuild uses one consolidated topbar.

- "Connect With Us" repeated three times in footer area: WordPress widget duplication.
  Footer uses this heading once.

- modal-check div with demo description: Template placeholder content. Excluded.

## Content Gaps Requiring Manual Work

- /board-of-directors/ - page not successfully fetched. Add board members manually once
  sourced from the live site. Update src/data/management.ts with a boardMembers array.

- /macrawebsite/contact-us/ - fetch timed out. Contact page uses verified static data
  (address, phone, email). A contact form requires manual implementation or a form service.

- All directorate sub-pages: stub pages created. Fill in from the live site manually.

- All service sub-pages (telecom, broadcasting, postal subsections): stubs only.

- Management headshots: images are lazy-loaded placeholders in the fetched output.
  Download actual headshot images from the live site and place in public/images/management/.

- Hero images: not retrievable via fetch. Source from MACRA and place in public/images/.

## Known External Links Preserved As-Is

- https://muuni.mw (Muuni Innovation Fund)
- https://mvera.mw (Mvera Innovation City)
- ATI Form 1: https://tinyurl.com/yh6c4kxe
- ATI Form 2: https://tinyurl.com/4j3h7257
- Request for Decision Review: https://tinyurl.com/4a9s2e33
- Access to Information: https://tinyurl.com/yc4d7h2h
- Google Maps: https://maps.app.goo.gl/nEuGKirFqkSKNzfg6

## Asset Instructions

1. Download MACRA logo PNG from:
   https://macra.mw/wp-content/uploads/2024/03/cropped-png-logo-1-270x270.png
   Save to: public/images/macra-logo.png

2. Download each PDF listed in asset-manifest.csv and save to public/downloads/ using
   the local filename in the manifest.

3. Download management headshots from macra.mw/management/ and place in
   public/images/management/ using kebab-case filenames. Update the imageFile field
   for each member in src/data/management.ts.
