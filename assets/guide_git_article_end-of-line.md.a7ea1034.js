import{_ as a,c as s,o as n,Q as l}from"./chunks/framework.197c3ce4.js";const u=JSON.parse('{"title":"End_of_line","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/git/article/end-of-line.md"}'),e={name:"guide/git/article/end-of-line.md"},t=l(`<h1 id="end-of-line" tabindex="-1">End_of_line <a class="header-anchor" href="#end-of-line" aria-label="Permalink to &quot;End_of_line&quot;">​</a></h1><p>查看项目的行尾序列</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ls-files</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--eol</span><span style="color:#BABED8;"> [path]</span></span></code></pre></div><h2 id="crlf-与-lf-换行到底是什么" tabindex="-1">CRLF 与 LF：换行到底是什么？ <a class="header-anchor" href="#crlf-与-lf-换行到底是什么" aria-label="Permalink to &quot;CRLF 与 LF：换行到底是什么？&quot;">​</a></h2><p>要真正理解 CRLF 与 LF 换行的问题，我们需要复习一些排版历史。</p><p>人们使用字母、数字和符号来相互交流。但是计算机只能理解和处理数字。由于计算机上的文件由人类可读的字符串组成，因此我们需要一个允许我们在这两种格式之间来回转换的系统。 ASCII 标准就是这样的系统——它将 A 和 z 等字符映射到数字，弥合了人类语言和计算机语言之间的鸿沟。</p><p>有趣的是，ASCII 标准不仅仅适用于字母和数字等可见字符。某个子集是控制字符，也称为非打印字符。它们不用于渲染可见字符；相反，它们用于执行独特的操作，例如删除前一个字符或插入换行符。</p><p>LF 和 CR 就是两个这样的控制字符，它们都与文件中的行尾有关。它们的历史可以追溯到打字机时代，因此我将简要介绍其工作原理，以便了解为什么我们有两个不同的控制字符而不是一个。然后，我们将看看这如何影响开发人员的体验。</p><h3 id="lf-换行" tabindex="-1">LF：换行 <a class="header-anchor" href="#lf-换行" aria-label="Permalink to &quot;LF：换行&quot;">​</a></h3><p>LF（Line Feed）代表“换行”，但你可能更熟悉术语换行符（转义序列 \\n）。简单地说，这个字符代表一行文本的结束。在 Linux 和 Mac 上，这相当于新文本行的开始。这种区别很重要，因为 Windows 不遵循此约定。我们了解回车之后再讨论为什么不同。</p><h3 id="cr-回车" tabindex="-1">CR：回车 <a class="header-anchor" href="#cr-回车" aria-label="Permalink to &quot;CR：回车&quot;">​</a></h3><p>CR（Carriage Return）代表回车（转义序列\\r），将光标移动到当前行的开头。终端上的下载进度条就是通过 CR 实现的，通过使用回车符，你的终端可以通过将光标返回到当前行的开头并覆盖任何先前呈现的文本来将文本动画化。</p><h3 id="打字机和回车-cr" tabindex="-1">打字机和回车（CR） <a class="header-anchor" href="#打字机和回车-cr" aria-label="Permalink to &quot;打字机和回车（CR）&quot;">​</a></h3><p>将一张纸固定在称为托架的机械卷上，为设备送入一张纸。每次击键时，打字机都会使用墨水在您的纸张上打印字母，将笔架向左移动以确保键入的下一个字母会出现在前一个字母的右侧。</p><p>当然，一旦当前行的空间用完，打字员就需要向下移动到纸张上的下一行。这是通过旋转滑架将纸张相对于打字机的“笔”向上移动一定距离来完成的。但是还需要重置托架（carriage），以便键入的下一个字符将与纸张的左侧边距对齐。换句话说，打字员需要某种方式将托架返回到其起始位置。而这正是回车的工作：一个金属杆连接到托架的左侧，当推动时，将托架返回到其起始位置。</p><h3 id="电传打字机和回车换行-crlf" tabindex="-1">电传打字机和回车换行（CRLF） <a class="header-anchor" href="#电传打字机和回车换行-crlf" aria-label="Permalink to &quot;电传打字机和回车换行（CRLF）&quot;">​</a></h3><p>进入 20 世纪初，出现了电传打字机。基本上，它的工作方式与手动打字机相同，除了不是打印到物理纸上，而是通过传输器通过物理电线或无线电波将消息发送给接收方。</p><p>虽然打印方式不同，但是同样需要使用换行符 (LF) 和回车符 (CR)，而且这些设备需要同时使用换行符 (LF) 和回车符 (CR) 以允许打字员从下一行文本的开头输入。毕竟手动打字机就是这样工作的，只是它没有任何“字符”的概念，因为它是一种机械操作的设备。</p><p>我们可以将 LF 和 CR 视为代表水平或垂直方向上的独立运动，而不是同时代表两者，这样更容易将其形象化。为了实现这个功能，电传打字机在一些最早的操作系统中设定了 CRLF 行尾的标准，比如流行的 MS-DOS。将 CR 代表“回车”——CR 控制字符将打印头（“回车”）返回到第 0 列，而无需推进纸张。 LF 代表“换行”——LF 控制字符在不移动打印头的情况下将纸张前进一行。因此，如果您想将打印头返回到第 0 列（准备打印下一行）并推进纸张（以便在新纸上打印），则需要 CR 和 LF。</p><p>MS-DOS 使用 CRLF 的两个字符组合来表示文件中的行尾，现代 Windows 计算机一直使用 CRLF 作为行尾。同时，从一开始，Unix 就使用 LF 来表示行尾，为了一致性和简单性而放弃了 CRLF。 Apple 最初仅在 Mac Classic 上使用 CR，但最终在 OS X 上改用了 LF，与 Unix 一致。</p><p>虽然这似乎是操作系统之间的差异，但 CRLF 与 LF 的这个问题已经引起人们很长时间的头痛。其实按照今天的标准 CRLF 是多余的——同时使用回车和换行是假设你受到打字机的物理限制，你必须明确地向上移动你的纸，然后重置移动到左边距。但是对于电子文件，将换行符定义为隐式完成换行和回车的工作就足够了。换句话说，只要操作系统定义换行符表示下一行从开头开始而不是从某个任意的列偏移处开始，那么除了换行之外，我们不需要显式回车——一个符号可以完成两者的工作。</p><p>现在我们知道 CRLF 和 CR 是如何起源的，接下来我们来学习以下怎么处理相关的问题。</p><h2 id="git-中的行尾" tabindex="-1">Git 中的行尾 <a class="header-anchor" href="#git-中的行尾" aria-label="Permalink to &quot;Git 中的行尾&quot;">​</a></h2><p>诚然，这需要很多背景知识！但这是值得的，因为我们终于准备好讨论与 git 相关的行尾（以及如何在任何给定的代码库中解决 CRLF 与 LF 的问题）。</p><p>我们从前面可以知道 CRLF 和 LF 是不同的字符表示，因此缺少通用行结尾为 git 等版本控制软件带来了麻烦，这类软件依赖于非常精确的字符比较来确定文件自上次签入以来是否发生了变化。如果开发人员使用 Windows 并且另一个使用 Mac 或 Linux，他们每个人都保存和提交相同的文件，他们可能会在他们的 git diff 中看到行结束更改——从 CRLF 到 LF 的转换，反之亦然。由于单字符更改，这会导致不必要的麻烦，非常烦人。</p><h3 id="使用-core-autocrlf-在-git-中配置行尾" tabindex="-1">使用 <code>core.autocrlf</code> 在 Git 中配置行尾 <a class="header-anchor" href="#使用-core-autocrlf-在-git-中配置行尾" aria-label="Permalink to &quot;使用 \`core.autocrlf\` 在 Git 中配置行尾&quot;">​</a></h3><p>可以使用 <code>core.autocrlf</code> 配置告诉 git 如何处理系统上的行尾。</p><p>可以通过以下命令完成：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">core.autocrlf</span><span style="color:#BABED8;"> [true</span><span style="color:#89DDFF;">|</span><span style="color:#82AAFF;">false</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">input]</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Autocrlf false</p><p>注意，false 值会关闭行尾转换，这通常是不可取的，除非是团队中的每个人都使用相同的操作系统。当然，我觉得这种情况很少发生，所以慎用（除非你使用 <a href="/guide/git/article/end-of-line#使用-gitattributes-在-git-中规范行尾"><code>.gitattributes</code></a> 配置，在这种情况下，它会优先于你的 git 配置）。</p><p>当 autocrlf 为 false 时，git 会彻底关闭行尾转换，无论是提交还是检出，慎用！！！</p></div><p>所以，一般来说我们只有两个选择：autocrlf true 和 autocrlf input。这两者有什么区别？</p><h4 id="autocrlf-true" tabindex="-1">autocrlf true <a class="header-anchor" href="#autocrlf-true" aria-label="Permalink to &quot;autocrlf true&quot;">​</a></h4><p>当 autocrlf 为 true 时（git 默认行为），文件将使用 git 在本地检出为 CRLF，但是每当你提交文件时，CRLF 的所有实例都将替换为 LF。基本上，此设置可确保你的代码库在所有文件的最终版本中始终使用 LF，但在获取时在本地使用 CRLF。这是 Windows 开发人员的推荐设置，因为 CRLF 是 Windows 的本机行结尾。</p><p>如果使用此选项，则每次在 Windows 上暂存文件以进行提交时可能会看到下面警告：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">warning: CRLF will be replaced by LF in &lt;file-name&gt;.</span></span>
<span class="line"><span style="color:#babed8;">The file will have its original line endings in your working directory.</span></span></code></pre></div><p>这并不是说出现问题， Git 只是警告你，根据此设置的预期行为，你的 CRLF 行结尾将在提交时规范化为 LF。</p><h4 id="autocrlf-input" tabindex="-1">autocrlf input <a class="header-anchor" href="#autocrlf-input" aria-label="Permalink to &quot;autocrlf input&quot;">​</a></h4><p>使用 autocrlf input，文件在提交时转换为 LF，但在获取时不会转换为任何内容。因此名称为“输入”——你得到是你最初输入的内容。如果一个文件最初被 Windows 开发人员意外提交为 CRLF，你会在本地看到它是 CRLF（如果你修改它，你会强制它变成 LF）。如果文件最初是作为 LF 添加的，您会看到它是 LF。这通常是一件好事，因为这意味着你将始终在代码库中获得 LF 行结尾（假设你从一开始就使用它）。</p><p>input 和 ​​true 之间的唯一区别是输入不会在本地获取时处理行尾。这是 Mac/Linux 开发人员的推荐设置，因为这些操作系统默认使用 LF。</p><h3 id="使用-gitattributes-在-git-中规范行尾" tabindex="-1">使用 <code>.gitattributes</code> 在 Git 中规范行尾 <a class="header-anchor" href="#使用-gitattributes-在-git-中规范行尾" aria-label="Permalink to &quot;使用 \`.gitattributes\` 在 Git 中规范行尾&quot;">​</a></h3><p>在你的 repo 的根目录创建一个 <code>.gitattributes</code> 文件来一劳永逸地行尾不一致的问题。 Git 会读取此文件并在您本地获取或提交文件时应用其规则，确保无论每个开发人员如何在本地配置 git 或他们使用什么操作系统，都强制执行行尾约定。</p><h4 id="一个简单的-gitattributes-配置" tabindex="-1">一个简单的 .gitattributes 配置 <a class="header-anchor" href="#一个简单的-gitattributes-配置" aria-label="Permalink to &quot;一个简单的 .gitattributes 配置&quot;">​</a></h4><p>这是一个 .gitattributes 文件，应该涵盖大多数用例：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># We&#39;ll let Git&#39;s auto-detection algorithm infer if a file is text. If it is,</span></span>
<span class="line"><span style="color:#babed8;"># enforce LF line endings regardless of OS or git configurations.</span></span>
<span class="line"><span style="color:#babed8;">* text=auto eol=lf</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># Isolate binary files in case the auto-detection algorithm fails and</span></span>
<span class="line"><span style="color:#babed8;"># marks them as text files (which could brick them).</span></span>
<span class="line"><span style="color:#babed8;">*.{png,jpg,jpeg,gif,webp,woff,woff2} binary</span></span></code></pre></div><p>提交该文件并将其推送到远程服务器。</p><p>git 使用一种简单的算法来检测你的 repo 中的特定文件是文本文件还是二进制文件（例如，可执行文件、图像或字体文件）。默认情况下，此算法用于比较已更改的文件，但它也可以用于强制行尾约定。</p><p>这就是上面配置中 text=auto 的作用——它告诉 git 应用其自动检测算法来确定文件是否是文本文件。然后， eol=lf 告诉 git 在本地获取和提交时强制执行文本文件的 LF 行结尾。这适用于 Windows 和 Linux，因为现在大多数跨平台文本编辑器都支持 LF。</p><p>Git 的自动检测算法相当准确，但如果它无法正确区分文本文件和二进制文件（如图像或字体文件），我们也可以将文件的子集显式标记为二进制文件以避免作为文本文件处理他们。这可以用下面的代码实现：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">*.{png,jpg,jpeg,gif,webp,woff,woff2} binary</span></span></code></pre></div><p>现在，提交此文件后，最后一步是重新规范化所有在添加 <code>.gitattributes</code> 之前已签入 git 的文件的所有行尾。你可以使用以下命令执行此操作：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--renormalize</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><p>这会根据 .gitattributes 配置中定义的规则重新格式化所有文件。如果先前提交的文件在 git 的索引中使用 CRLF 并且由于此重新规范化而转换为 LF，则它们的行尾将在索引中更新，并且这些文件将暂存以进行提交。唯一要做的就是提交这些更改并将它们推送到远程存储库。之后引入的新文件，其行尾都将作为 LF 签入（和签出）。</p><h3 id="git-行尾-工作树与索引" tabindex="-1">Git 行尾：工作树与索引 <a class="header-anchor" href="#git-行尾-工作树与索引" aria-label="Permalink to &quot;Git 行尾：工作树与索引&quot;">​</a></h3><p>提交这些重新规范化的文件时，您可能会看到以下消息：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">warning:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">CRLF</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">will</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">be</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">replaced</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">by</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">LF</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">in</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">file-nam</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">The</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">will</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">have</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">its</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">original</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">line</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">endings</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">in</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">your</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">working</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">directory.</span></span></code></pre></div><p>这是预期的行为——CRLF 将成为 Git 索引中的 LF，这意味着当你将这些文件推送到你的存储库时，它们将在你的远程代码库中具有 LF 行结尾。任何后来提取或获取该代码的人都会在本地看到 LF 行结尾。</p><p>但是 git 实际上并没有更改文件的本地文件（即其工作树中的那些）的行尾。因此，警告消息的最后一点表示刚刚重新规范化的文件仍会继续在本地使用 CRLF。</p><h3 id="在-git-中验证任何文件的行尾" tabindex="-1">在 Git 中验证任何文件的行尾 <a class="header-anchor" href="#在-git-中验证任何文件的行尾" aria-label="Permalink to &quot;在 Git 中验证任何文件的行尾&quot;">​</a></h3><p>如果想在所有这些步骤之后仔细检查 Git 索引中的文件是否使用正确的行结尾，可以运行以下命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ls-files</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--eol</span></span></code></pre></div><p>这将显示 git 正在跟踪的所有文件的行尾信息，格式如下：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">i/lf</span><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">w/crlf</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">attr/text=auto</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">eol=lf</span><span style="color:#BABED8;">   </span><span style="color:#C3E88D;">file.txt</span></span></code></pre></div><p>从左到右分别是：</p><ul><li>i：索引中的行尾（被推送到你的仓库的行）。应该是 LF。</li><li>w：工作树中的行尾（可能是 CRLF，但如果索引是 LF 也可以）。</li><li>attr：适用于此文件的 <code>.gitattributes</code> 规则。</li><li>文件名。</li></ul><p>或者，你可以在将代码推送到远程后，通过在 Windows 机器上重新克隆您的存储库来仔细检查 git 是否正确规范了您的行尾。你应该看到文件的索引和工作树副本都使用 LF 而不是 CRLF（假设 LF 是您选择规范化行尾的方式）。</p><h3 id="editorconfig-文件" tabindex="-1">.editorconfig 文件 <a class="header-anchor" href="#editorconfig-文件" aria-label="Permalink to &quot;.editorconfig 文件&quot;">​</a></h3><p>从技术上讲，一个 <code>.gitattributes</code> 文件是你执行代码库远程副本上显示的行尾所需的全部内容。但是，正如我们在上面看到的，你可能仍然会在本地看到你创建的文件的 CRLF 行结尾，因为 <code>.gitattributes</code> 不会告诉 git 更改文件的工作副本。</p><p>当然，这并不意味着 git 的规范化过程不起作用。但是，如果你还使用 ESLint 和 Prettier 对代码进行 linting，这可能会很烦人，在这种情况下，它们会不断抛出错误并告诉您删除那些额外的 CR。</p><p>所以，你可以使用 .editorconfig 文件更进一步；这是一个与编辑器无关的项目，旨在创建用于自定义任何给定文本编辑器行为的标准化格式。许多文本编辑器（包括 VS Code，IDEA，GitHub）支持并自动读取此文件（如果存在）。你可以将这样的内容放在工作区的根目录中，你可以在<a href="https://editorconfig.org" target="_blank" rel="noreferrer">这里</a>深入了解：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># editorconfig.org</span></span>
<span class="line"><span style="color:#FFCB6B;">root</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[*]</span></span>
<span class="line"><span style="color:#FFCB6B;">indent_style</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">space</span></span>
<span class="line"><span style="color:#FFCB6B;">indent_size</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#FFCB6B;">end_of_line</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lf</span></span>
<span class="line"><span style="color:#FFCB6B;">charset</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">utf-8</span></span>
<span class="line"><span style="color:#FFCB6B;">trim_trailing_whitespace</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#FFCB6B;">insert_final_newline</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[*</span><span style="color:#BABED8;">.md</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">trim_trailing_whitespace</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false</span></span></code></pre></div><p>除了一堆其他设置之外，你还可以指定应用于通过此文本编辑器创建的任何新文件的行尾。这样，如果使用 VS Code 在 Windows 上创建一个新文件，你将始终在工作树中看到行结尾为 LF。</p><h3 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h3><ul><li><a href="https://mdnice.com/writing/5dcb6caf12db4dcb8a05bfe55dcb044d" target="_blank" rel="noreferrer">一文搞懂 CRLF 和 LF - mdnice 墨滴</a></li><li><a href="https://www.aleksandrhovhannisyan.com/blog/crlf-vs-lf-normalizing-line-endings-in-git" target="_blank" rel="noreferrer">CRLF vs. LF: Normalizing Line Endings in Git | Aleksandr Hovhannisyan</a></li><li><a href="https://stackoverflow.com/a/56858538/5323344" target="_blank" rel="noreferrer">stackoverflow</a></li><li><a href="https://editorconfig.org" target="_blank" rel="noreferrer">.editorconfig</a></li></ul>`,73),o=[t];function p(r,i,c,d,y,h){return n(),s("div",null,o)}const B=a(e,[["render",p]]);export{u as __pageData,B as default};