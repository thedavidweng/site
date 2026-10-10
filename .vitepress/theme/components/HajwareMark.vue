<script setup lang="ts">
// The Hajware shark, drawn as one stroke. Strokes don't scale with the box, so the line stays
// the same weight at nav size and at display size; set --mark-stroke and --mark-eye to change it.
defineProps<{ title?: string }>()
</script>

<template>
  <svg
    class="hajware-mark"
    viewBox="62 132 396 230"
    :role="title ? 'img' : undefined"
    :aria-label="title"
    :aria-hidden="title ? undefined : 'true'"
    focusable="false"
  >
    <path
      class="hajware-mark-body"
      pathLength="1"
      d="M450 262C420 226 362 212 302 212C285 186 270 162 250 140C246 168 240 194 232 213C190 218 142 226 112 240C100 216 86 196 70 176C78 214 90 244 100 256C88 272 78 290 72 308C98 292 114 278 124 272C170 290 240 300 300 298C290 320 274 338 254 354C290 346 320 322 342 296C390 292 428 282 450 262Z"
    />
    <path class="hajware-mark-eye" d="M388 245h0" />
  </svg>
</template>

<style>
.hajware-mark {
  display: block;
  overflow: visible;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hajware-mark-body {
  stroke-width: var(--mark-stroke, 1.75px);
  vector-effect: non-scaling-stroke;
}

/* A zero-length segment with a round cap draws the eye as a dot sized in screen pixels. */
.hajware-mark-eye {
  stroke-width: var(--mark-eye, 3.5px);
  vector-effect: non-scaling-stroke;
}
</style>
