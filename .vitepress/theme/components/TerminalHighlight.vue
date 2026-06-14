<template>
  <div class="money-terminal-wrap">
    <div class="money-terminal" aria-label="Example money commands">
      <div class="money-terminal-bar">
        <div class="money-terminal-dots" aria-hidden="true">
          <span class="red"></span>
          <span class="yellow"></span>
          <span class="green"></span>
        </div>
        <span class="money-terminal-title">~/projects/finance — money</span>
      </div>
      <div class="money-terminal-body">
        <span class="line comment"># no credentials needed</span>
        <span class="line"><span class="prompt">$ </span><span class="cmd">money</span> demo accounts list <span class="flag">--json</span></span>
        <span class="line output">{</span>
        <span class="line output">  <span class="key">"meta"</span>: { <span class="key">"schema"</span>: <span class="str">"1.0.0"</span>, <span class="key">"demo"</span>: <span class="num">true</span> },</span>
        <span class="line output">  <span class="key">"data"</span>: { <span class="key">"accounts"</span>: [</span>
        <span class="line output">    { <span class="key">"name"</span>: <span class="str">"Chase Checking"</span> },</span>
        <span class="line output">    { <span class="key">"name"</span>: <span class="str">"Amex Gold"</span> }</span>
        <span class="line output">  ] },</span>
        <span class="line output">  <span class="key">"errors"</span>: []</span>
        <span class="line output">}</span>
        <span class="blank" aria-hidden="true"></span>
        <span class="line"><span class="prompt">$ </span><span class="cmd">money</span> tx search <span class="str">"Costco"</span><span class="cursor" aria-hidden="true"></span></span>
      </div>
    </div>
  </div>
</template>
