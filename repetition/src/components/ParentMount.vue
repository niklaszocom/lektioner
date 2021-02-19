<template>
  <div>
    <p>
        Hej jag är en p-tag!
    </p>

    <ChildMount />
    <child-mount />
  </div>
</template>

<script>

import ChildMount from './ChildMount.vue';

export default {

    components: {
        ChildMount
    }
}
</script>

<style>

</style>