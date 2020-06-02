<!-- .vuepress/components/TagLinks.vue -->
<template lang="html">
  <div style="margin-top:20px;">
    Tags:
    <small 
    	v-for="tag in $page.frontmatter.tags"
      	:key="tag">{{tag}}, </small>
  </div>
</template>