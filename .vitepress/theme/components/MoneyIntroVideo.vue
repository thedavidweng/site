<script setup lang="ts">
const promoVideoId = 'vjHybT9BPU4'
const promoEmbedUrl = `https://www.youtube.com/embed/${promoVideoId}?rel=0`
const promoWatchUrl = `https://youtu.be/${promoVideoId}`
</script>

<template>
  <section id="intro-video" class="money-intro-video" aria-labelledby="intro-video-heading">
    <p class="money-section-label">Introduction</p>
    <h2 id="intro-video-heading">See money in action</h2>
    <p class="money-intro-video-lede">
      A product introduction: what money does, how the CLI fits in, and how JSON contracts work for external agents.
    </p>
    <div class="money-video-shell">
      <div class="money-video-frame">
        <iframe
          :src="promoEmbedUrl"
          title="money — product introduction"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>
    <p class="money-video-caption">
      Hosted on YouTube ·
      <a :href="promoWatchUrl" target="_blank" rel="noopener noreferrer">Open in new tab</a>
    </p>
  </section>
</template>
