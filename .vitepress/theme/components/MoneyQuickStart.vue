<template>
  <div>
    <p class="money-section-label">Quick start paths</p>
    <div class="money-quickstart">
      <article class="money-qs-card">
        <div class="money-qs-head">
          <p class="money-qs-step">Step 1 · Try without credentials</p>
          <h3 class="money-qs-title">Demo mode</h3>
          <p class="money-qs-desc">Bundled sample data; safe to run anywhere. <code>meta.demo: true</code> on every envelope.</p>
        </div>
        <div class="money-qs-code">
          <pre><code><span class="comment"># Install via Homebrew</span>
<span class="prompt">$ </span>brew install --cask thedavidweng/tap/money

<span class="comment"># Or via Go</span>
<span class="prompt">$ </span>go install github.com/thedavidweng/money/cmd/money@latest

<span class="comment"># Try with sample data</span>
<span class="prompt">$ </span><span class="cmd">money</span> demo accounts list <span class="flag">--json</span>
<span class="prompt">$ </span><span class="cmd">money</span> demo transactions search <span class="str">"coffee"</span></code></pre>
        </div>
      </article>
      <article class="money-qs-card">
        <div class="money-qs-head">
          <p class="money-qs-step">Step 2 · Connect a provider</p>
          <h3 class="money-qs-title">Real sync (BYOK)</h3>
          <p class="money-qs-desc">Bring your own Plaid / Bridge credentials. Stored in your encrypted local DB.</p>
        </div>
        <div class="money-qs-code">
          <pre><code><span class="comment"># Interactive setup</span>
<span class="prompt">$ </span><span class="cmd">money</span> setup

<span class="comment"># Link an institution, then sync</span>
<span class="prompt">$ </span><span class="cmd">money</span> link
<span class="prompt">$ </span><span class="cmd">money</span> sync
<span class="prompt">$ </span><span class="cmd">money</span> accounts list <span class="flag">--json</span></code></pre>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.comment { color: var(--money-term-comment); font-style: italic; }
.prompt { color: var(--money-term-prompt); }
.cmd { color: #eef1ee; }
.flag { color: var(--money-term-string); }
.str { color: var(--money-term-string); }
</style>
