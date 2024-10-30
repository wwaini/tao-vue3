<template>
  <Tinymce ref="tiny" v-model="fullText" :toolbar="toolbar" height="400px" :menubar="''"></Tinymce>
</template>
<script>
import Tinymce from '../Tinymce/index.vue'
export default {
  components: { Tinymce },
  data() {
    return {
      fullText: '',
      toolbar: [
        'searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample hr bullist numlist link image charmap preview insertdatetime emoticons forecolor backcolor',
        'formatselect fontselect fontsizeselect'
      ],
    }
  }
}
</script>
