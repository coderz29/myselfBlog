import{_ as e,o as a,c as t,U as i}from"./chunks/framework.70292381.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/views/guide.md","filePath":"column/views/guide.md"}'),o={name:"column/views/guide.md"},r=i('<h2 id="diff算法" tabindex="-1">diff算法 <a class="header-anchor" href="#diff算法" aria-label="Permalink to &quot;diff算法&quot;">​</a></h2><h3 id="无key的情况下" tabindex="-1">无key的情况下 <a class="header-anchor" href="#无key的情况下" aria-label="Permalink to &quot;无key的情况下&quot;">​</a></h3><p>如果无key，那么diff算法就只有三个步骤：</p><p>第一步：patch的时候会根据顺序使用新的节点替换掉旧的节点。</p><p>第二步：如果发现新的节点有多的，就会做新增的操作，插入这个新的节点。</p><p>第三步：如果新的节点比旧的节点少，就会删除旧的节点。</p><h3 id="有key的情况下" tabindex="-1">有key的情况下 <a class="header-anchor" href="#有key的情况下" aria-label="Permalink to &quot;有key的情况下&quot;">​</a></h3><p>在有key的情况下：</p><p>第一步：会先进行 前序对比算法，先从头部开始对比新旧节点是否一样，如果一样就会复用，如果不一样，就会break，</p><p>第二步：之后进行 尾序对比算法，从尾部对比新旧节点是否一样，如果一样也会复用，如果不一样，就break，</p><p>第三步：新节点如果多出来了，就会挂载上去，</p><p>第四步：旧节点如果多出来就会卸载，</p><p>第五步：特殊情况乱序： 先构建新节点的映射关系，然后记录新节点在旧节点中的位置数组，然后对比，如果有多余的旧节点就删除，如果新节点不包含旧节点也删除，如果节点出现交叉，说明是要移动，要去求最长递增子序列，求最长递增子序列升序，求出来之后，如果当前遍历的节点不在子序列中就说明要进行移动，如果节点在序列中就直接跳过。</p>',13),p=[r];function d(n,s,c,_,l,h){return a(),t("div",null,p)}const k=e(o,[["render",d]]);export{u as __pageData,k as default};
