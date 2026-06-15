<script setup lang="ts">
import { useData } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { categories } from '../projects'

const { site } = useData()

function projectIconSrc(src: string) {
  const base = site.value.base.endsWith('/') ? site.value.base : `${site.value.base}/`
  return `${base}${src.replace(/^\//, '')}`
}
</script>

<template>
  <div class="HubLayout">
    <section class="hub-hero">
      <div class="hub-hero-inner">
        <p class="hub-eyebrow">Developer tools by David Weng</p>
        <h1>Apps</h1>
        <p class="hub-lead">
          A growing collection of developer tools — CLI utilities, desktop apps, and more.
          Each app has its own landing page, documentation, and source code.
        </p>
        <div class="hub-hero-actions">
          <VPLink class="hub-btn primary" href="https://github.com/thedavidweng">
            GitHub
          </VPLink>
          <VPLink
            class="hub-btn secondary"
            href="https://github.com/thedavidweng/homebrew-tap"
          >
            Homebrew Tap
          </VPLink>
        </div>
      </div>
    </section>

    <template v-for="category in categories" :key="category.id">
      <section class="hub-category">
        <div class="hub-category-inner">
          <div class="hub-section-head">
            <h2>{{ category.label }}</h2>
            <p>{{ category.description }}</p>
          </div>

          <div class="hub-grid">
            <article v-for="project in category.projects" :key="project.slug" class="hub-card">
              <div class="hub-card-top">
                <span
                  class="hub-card-icon"
                  :class="{ 'hub-card-icon--image': project.iconSrc }"
                  aria-hidden="true"
                >
                  <img
                    v-if="project.iconSrc"
                    :src="projectIconSrc(project.iconSrc)"
                    :alt="`${project.name} logo`"
                  />
                  <template v-else>{{ project.icon }}</template>
                </span>
                <div>
                  <h3>{{ project.name }}</h3>
                  <p class="hub-card-tagline">{{ project.tagline }}</p>
                </div>
              </div>
              <p class="hub-card-copy">{{ project.description }}</p>
              <div class="hub-card-actions">
                <VPLink class="hub-btn primary" :href="project.overview">
                  Overview
                </VPLink>
                <VPLink class="hub-btn secondary" :href="project.docsEntry">
                  Guide
                </VPLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </template>

    <section class="hub-principles">
      <div class="hub-principles-inner">
        <h2>Shared principles</h2>
        <ul>
          <li><strong>Agent-friendly</strong> — stable JSON output, predictable exit codes, distinct stdout/stderr</li>
          <li><strong>Safety first</strong> — <code>--read-only</code>, <code>--dry-run</code>, <code>--confirm</code> gates on mutations</li>
          <li><strong>Single binary</strong> — no runtime, no containers, no dependencies</li>
          <li><strong>Cross-platform</strong> — Linux, macOS, Windows (amd64/arm64)</li>
          <li><strong>Homebrew distribution</strong> — <code>brew install --cask thedavidweng/tap/&lt;tool&gt;</code></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.HubLayout {
  --hub-accent: #7c3aed;
  --hub-accent-soft: #ede9fe;
  --hub-surface: var(--vp-c-bg-soft);
  --hub-border: var(--vp-c-divider);
}

.dark .HubLayout {
  --hub-accent: #a78bfa;
  --hub-accent-soft: rgba(124, 58, 237, 0.16);
}

.hub-hero {
  padding: 72px 24px 56px;
  background:
    radial-gradient(circle at top right, var(--hub-accent-soft), transparent 42%),
    linear-gradient(180deg, var(--vp-c-bg) 0%, var(--hub-surface) 100%);
  border-bottom: 1px solid var(--hub-border);
}

.hub-hero-inner,
.hub-category-inner,
.hub-principles-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.hub-eyebrow {
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hub-accent);
}

.hub-hero h1 {
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.hub-lead {
  max-width: 720px;
  margin: 18px 0 0;
  font-size: 18px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.hub-hero-actions,
.hub-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hub-hero-actions {
  margin-top: 28px;
}

.hub-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;
}

.hub-btn.primary {
  background: var(--hub-accent);
  color: #fff;
}

.hub-btn.primary:hover {
  filter: brightness(1.05);
}

.hub-btn.secondary {
  border: 1px solid var(--hub-border);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

.hub-btn.secondary:hover {
  border-color: var(--hub-accent);
  color: var(--hub-accent);
}

/* Category sections */
.hub-category {
  padding: 56px 24px 24px;
}

.hub-section-head h2,
.hub-principles h2 {
  margin: 0;
  font-size: 28px;
  letter-spacing: -0.02em;
}

.hub-section-head p {
  margin: 10px 0 0;
  color: var(--vp-c-text-2);
}

.hub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 28px;
}

.hub-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 22px;
  border: 1px solid var(--hub-border);
  border-radius: 20px;
  background: var(--vp-c-bg);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
}

.dark .hub-card {
  box-shadow: none;
}

.hub-card-top {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.hub-card-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--hub-accent-soft);
  font-size: 24px;
  flex-shrink: 0;
}

.hub-card-icon--image {
  background: transparent;
  padding: 0;
}

.hub-card-icon img {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  object-fit: cover;
  display: block;
}

.hub-card h3 {
  margin: 0;
  font-size: 20px;
}

.hub-card-tagline {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.hub-card-copy {
  flex: 1;
  margin: 0;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.hub-principles {
  padding: 48px 24px 96px;
}

.hub-principles-inner {
  padding: 28px 30px;
  border: 1px solid var(--hub-border);
  border-radius: 24px;
  background: var(--hub-surface);
}

.hub-principles ul {
  margin: 18px 0 0;
  padding-left: 20px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
}

@media (max-width: 640px) {
  .hub-hero {
    padding-top: 56px;
  }

  .hub-card-actions,
  .hub-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
