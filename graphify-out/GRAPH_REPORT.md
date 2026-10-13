# Graph Report - . (2026-10-12)

## Corpus Check

- Corpus is ~3,729 words - fits in a single context window. You may not need a graph.

## Summary

- 50 nodes · 40 edges · 14 communities (7 shown, 7 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 1,200 input · 450 output

## Community Hubs (Navigation)

- Linting & Dev Dependencies
- Core Framework Dependencies
- NPM Lifecycle Scripts
- Root Layout & Font Configuration
- Documentation & Branding Assets
- Package Manifest Metadata
- TypeScript/JS Path Aliases
- ESLint Configuration
- JARIGASME Lab JRG-01 Switch Landing
- Next.js Build Configuration
- File Icon Asset
- Globe Icon Asset
- Window Icon Asset

## God Nodes (most connected - your core abstractions)

1. `scripts` - 5 edges
2. `Project Documentation` - 3 edges
3. `compilerOptions` - 2 edges
4. `next` - 2 edges
5. `react` - 2 edges
6. `react-dom` - 2 edges
7. `@tailwindcss/turbopack` - 2 edges
8. `babel-plugin-react-compiler` - 2 edges
9. `eslint` - 2 edges
10. `eslint-config-next` - 2 edges

## Surprising Connections (you probably didn't know these)

- `Project Documentation` --references--> `Next.js Logo Asset` [EXTRACTED]
  README.md → public/next.svg
- `Project Documentation` --references--> `Vercel Logo Asset` [EXTRACTED]
  README.md → public/vercel.svg
- `Project Documentation` --conceptually_related_to--> `Next.js Agent Rules` [INFERRED]
  README.md → AGENTS.md
- `Next.js Logo Asset` --conceptually_related_to--> `Vercel Logo Asset` [INFERRED]
  public/next.svg → public/vercel.svg

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Next.js Starter Brand & UI Assets** — public_file_svg, public_globe_svg, public_next_svg, public_vercel_svg, public_window_svg [INFERRED 0.85]

## Communities (14 total, 7 thin omitted)

### Community 0 - "Linting & Dev Dependencies"

Cohesion: 0.18
Nodes (11): babel-plugin-react-compiler, eslint, eslint-config-next, devDependencies, babel-plugin-react-compiler, eslint, eslint-config-next, tailwindcss (+3 more)

### Community 1 - "Core Framework Dependencies"

Cohesion: 0.29
Nodes (7): next, dependencies, next, react, react-dom, react, react-dom

### Community 2 - "NPM Lifecycle Scripts"

Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 3 - "Root Layout & Font Configuration"

Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

### Community 4 - "Documentation & Branding Assets"

Cohesion: 0.67
Nodes (4): Next.js Agent Rules, Next.js Logo Asset, Vercel Logo Asset, Project Documentation

### Community 5 - "Package Manifest Metadata"

Cohesion: 0.50
Nodes (3): name, private, version

## Knowledge Gaps

- **26 isolated node(s):** `eslintConfig`, `paths`, `nextConfig`, `name`, `version` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Linting & Dev Dependencies` to `Package Manifest Metadata`?**
  _High betweenness centrality (0.170) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Core Framework Dependencies` to `Package Manifest Metadata`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Why does `scripts` connect `NPM Lifecycle Scripts` to `Package Manifest Metadata`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `paths`, `nextConfig` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._
