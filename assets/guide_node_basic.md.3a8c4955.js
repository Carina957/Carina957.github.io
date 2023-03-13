import{_ as s,c as a,o as n,a as l}from"./app.d0ecc88b.js";const p="/assets/npm-list.b733f29e.png",o="/assets/npm-list-info.13a78447.png",h=JSON.parse('{"title":"Node","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/node/basic.md"}'),e={name:"guide/node/basic.md"},t=l(`<h1 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h1><h2 id="volta" tabindex="-1">volta <a class="header-anchor" href="#volta" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-OYLFw" id="tab-bGMMAAZ" checked="checked"><label for="tab-bGMMAAZ">curl</label><input type="radio" name="group-OYLFw" id="tab-DRzS2LY"><label for="tab-DRzS2LY">brew</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://get.volta.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">volta</span></span>
<span class="line"></span></code></pre></div></div></div><p>然后，添加 <code>volta</code> 到环境变量：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.bash_profile</span></span>
<span class="line"></span></code></pre></div><p>之后，你就可以正常使用 <code>volta</code></p><details class="details custom-block"><summary>当你在终端运行 <code>volta</code> or <code>volta -h</code>:</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">volta</span></span>
<span class="line"></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Volta 1.1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">The JavaScript Launcher ⚡</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    To install a tool in your toolchain, use \`volta install\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">    To pin your project&#39;s runtime or package manager, use \`volta pin\`.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">USAGE:</span></span>
<span class="line"><span style="color:#A6ACCD;">    volta [FLAGS] [SUBCOMMAND]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">FLAGS:</span></span>
<span class="line"><span style="color:#A6ACCD;">        --verbose    Enables verbose diagnostics</span></span>
<span class="line"><span style="color:#A6ACCD;">        --quiet      Prevents unnecessary output</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v, --version    Prints the current version of Volta</span></span>
<span class="line"><span style="color:#A6ACCD;">    -h, --help       Prints help information</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">SUBCOMMANDS:</span></span>
<span class="line"><span style="color:#A6ACCD;">    fetch          Fetches a tool to the local machine</span></span>
<span class="line"><span style="color:#A6ACCD;">    install        Installs a tool in your toolchain</span></span>
<span class="line"><span style="color:#A6ACCD;">    uninstall      Uninstalls a tool from your toolchain</span></span>
<span class="line"><span style="color:#A6ACCD;">    pin            Pins your project&#39;s runtime or package manager</span></span>
<span class="line"><span style="color:#A6ACCD;">    list           Displays the current toolchain</span></span>
<span class="line"><span style="color:#A6ACCD;">    completions    Generates Volta completions</span></span>
<span class="line"><span style="color:#A6ACCD;">    which          Locates the actual binary that will be called by Volta</span></span>
<span class="line"><span style="color:#A6ACCD;">    setup          Enables Volta for the current user / shell</span></span>
<span class="line"><span style="color:#A6ACCD;">    run            Run a command with custom Node, npm, pnpm, and/or Yarn versions</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details><details class="details custom-block"><summary>当你在终端运行 <code>volta pin node@16</code>:</summary><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">success: pinned node@16.19.1 (with npm@8.19.3) in package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>此时，你的 <code>package.json</code> 文件里就会多出一行配置：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">volta</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">16.19.1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><details class="details custom-block"><summary>此外，你还可以运行 <code>volta ls</code> 查看 <code>volta</code> 已经安装的模块：</summary><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">⚡️ Currently active tools:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    Node: v16.19.1 (current @ /Users/xuhao/Downloads/front-end/vitepress/vitepress-blog/</span></span>
<span class="line"><span style="color:#A6ACCD;">    package.json)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Yarn: v4.0.0-rc.39 (default)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Tool binaries available:</span></span>
<span class="line"><span style="color:#A6ACCD;">        nrm (default)</span></span>
<span class="line"><span style="color:#A6ACCD;">        pnpm, pnpx (default)</span></span>
<span class="line"><span style="color:#A6ACCD;">        rimraf (current @ /Users/xuhao/Downloads/front-end/vitepress/vitepress-blog/</span></span>
<span class="line"><span style="color:#A6ACCD;">    package.json)</span></span>
<span class="line"><span style="color:#A6ACCD;">        yrm (default)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">See options for more detailed reports by running \`volta list --help\`.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看全局安装的模块</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看全局安装的模块的详细信息(name, description, version number, github address, official website.)</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装到 \`devDependencies\` 中</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dayjs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装到 \`dependencies\` 中</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dayjs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span>
<span class="line"></span></code></pre></div><p><img src="`+p+'" alt="npm-list"></p><p><img src="'+o+'" alt="npm-list-info"></p>',13),c=[t];function r(i,C,y,A,d,D){return n(),a("div",null,c)}const m=s(e,[["render",r]]);export{h as __pageData,m as default};
