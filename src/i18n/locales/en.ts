// English UI strings.
// Adding a new key? Add it to every locale file and to the `Strings` type below.

export const en = {
  'nav.about': 'about',
  'nav.projects': 'projects',
  'nav.blog': 'blog',
  'nav.resume': 'resume',
  'nav.contact': 'contact',
  'nav.menu': 'Menu',
  'nav.theme_picker': 'Theme picker',
  'nav.language_picker': 'Language',

  'hero.view_projects': 'View Projects →',
  'hero.say_hello': 'Say hello',
  'hero.scroll': 'scroll',

  'section.about': 'About',
  'section.projects': 'Projects',
  'section.case_studies': 'Case Studies',
  'section.writing': 'Writing',
  'section.experience': 'Experience',
  'section.contact': 'Contact',

  'projects.heading': "Things I've built",
  'projects.filter_all': 'All',

  'about.stack': 'Stack',

  'case_studies.heading_line_1': 'How I think',
  'case_studies.heading_line_2': 'at scale',

  'blog.heading': 'Blog',
  'blog.read_all': 'Read all posts →',
  'blog.page_title': 'Blog — Luisa Martins',
  'blog.tagline_title': 'Notes & writeups',
  'blog.tagline_sub': 'Things I learned, broke, or shipped.',
  'blog.search_placeholder': 'Search posts...',
  'blog.tag_all': 'all',
  'blog.empty_state': 'No posts match your search.',
  'blog.back_to_index': '← all posts',
  'blog.toc_title': 'on this page',
  'blog.toc_mobile_label': 'sections',

  'resume.heading': 'Career',
  'resume.download_cv': '↓ Download CV',

  'contact.heading_line_1': "Let's build",
  'contact.heading_line_2': 'something.',
  'contact.description':
    'Open to senior mobile / platform infra roles. Also happy to chat KMP, Rust, or which Valve game is the best (it’s Portal 2).',
  'contact.email_label': 'email',
  'contact.github_label': 'github',
  'contact.linkedin_label': 'linkedin',

  'project.back': '← Back to Portfolio',
  'project.view_github': 'View on GitHub ↗',

  'footer.made_with': 'made with love & blåhaj 🏳️‍⚧️',
  'footer.copyright': '© 2026 Luisa Martins',

  'banner.ai_translated': 'AI Translated',
  'banner.ai_translated_hint': 'This page was machine-translated. Original: English.',
} as const;

export type Strings = typeof en;
