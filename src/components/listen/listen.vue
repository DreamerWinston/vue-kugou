<template>
  <div class="listen">
    <lAccount></lAccount>
    <lLocal></lLocal>
    <lSort></lSort>
  </div>
</template>

<script>
import lAccount from 'components/l-account/l-account'
import lLocal from 'components/l-local/l-local'
import lSort from 'components/l-sort/l-sort'
export default {
  components: {
    lAccount,
    lLocal,
    lSort
  }
}
</script>

<style>

</style>
