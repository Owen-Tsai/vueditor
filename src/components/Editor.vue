<template>
  <div class="vueditor-container">
    <div class="vueditor-toolbar"></div>
    <div class="vueditor-main">
      <textarea class="vueditor-input-area" :value="input" @input="HandleInputUpdate"></textarea>
      <div class="vueditor-preview" v-html="compiledContent"></div>
    </div>
  </div>
</template>

<script>
  import Debounce from '../scripts/utility'
  import md from '../scripts/mark'
  import HL from 'highlight.js'

  export default {
    data: () => ({
      input: '',
    }),
    computed: {
      compiledContent: function() {
        return md.render(this.input)
      }
    },
    methods: {
      HandleInputUpdate: Debounce(function (e) {
        this.input = e.target.value;
        document.querySelectorAll('pre code').forEach((block) => {
          HL.highlightBlock(block)
        });
      }, 300)
    }
  }
</script>

<style>

</style>