<template>
    <!-- View Resource Link -->
    <span v-if="resource.authorizedToView" class="inline-flex">
      <router-link
          :data-testid="`${testId}-view-button`"
          :dusk="`${resource['id'].value}-view-button`"
          class="cursor-pointer text-70 hover:text-primary mr-3 inline-flex items-center"
          v-tooltip.click="__('View')"
          :to="{
          name: 'detail',
          params: {
            resourceName: resourceName,
            resourceId: resource['id'].value,
          },
        }"
      >
        <icon type="view" width="22" height="18" view-box="0 0 22 16" />
      </router-link>
    </span>
</template>

<script>
    export default {
        props: [
            'testId',
            'resource',
            'resourceName',
        ],
    }
</script>

<style scoped>

</style>
