<script setup lang="ts">
import { ref } from 'vue'

const promoVideoId = 'vjHybT9BPU4'
// Load the YouTube player only on click: the embed sets third-party cookies and ships its player JS on page load.
const promoEmbedUrl = `https://www.youtube-nocookie.com/embed/${promoVideoId}?rel=0&autoplay=1`
const promoPosterUrl = `https://i.ytimg.com/vi/${promoVideoId}/maxresdefault.jpg`
const promoWatchUrl = `https://youtu.be/${promoVideoId}`
const playing = ref(false)
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
          v-if="playing"
          :src="promoEmbedUrl"
          title="money — product introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <button v-else type="button" class="money-video-play" @click="playing = true">
          <img :src="promoPosterUrl" alt="" width="1280" height="720" loading="lazy" decoding="async" />
          <span class="money-video-play-icon" aria-hidden="true" />
          <span class="visually-hidden">Play video: money — product introduction</span>
        </button>
      </div>
    </div>
    <p class="money-video-caption">
      Hosted on YouTube ·
      <a :href="promoWatchUrl" target="_blank" rel="noopener noreferrer">Open in new tab</a>
    </p>
  </section>
</template>
