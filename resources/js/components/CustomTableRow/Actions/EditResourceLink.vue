<template>
    <span v-if="resource.authorizedToUpdate" class="inline-flex">
      <!-- Edit Pivot Button -->
      <router-link
          v-if="
          relationshipType == 'belongsToMany' ||
            relationshipType == 'morphToMany'
        "
          class="inline-flex cursor-pointer text-70 hover:text-primary mr-3"
          :dusk="`${resource['id'].value}-edit-attached-button`"
          v-tooltip.click="__('Edit Attached')"
          :to="{
          name: 'edit-attached',
          params: {
            resourceName: viaResource,
            resourceId: viaResourceId,
            relatedResourceName: resourceName,
            relatedResourceId: resource['id'].value,
          },
          query: {
            viaRelationship: viaRelationship,
          },
        }"
      >
        <icon type="edit" />
      </router-link>

    <!-- Edit Resource Link -->
      <router-link
          v-else
          class="inline-flex cursor-pointer text-70 hover:text-primary mr-3"
          :dusk="`${resource['id'].value}-edit-button`"
          :to="{
          name: 'edit',
          params: {
            resourceName: resourceName,
            resourceId: resource['id'].value,
          },
          query: {
            viaResource: viaResource,
            viaResourceId: viaResourceId,
            viaRelationship: viaRelationship,
          },
        }"
          v-tooltip.click="__('Edit')"
      >
        <icon type="edit" />
      </router-link>
    </span>
</template>

<script>
    export default {
        props: [
            'resource',
            'resourceName',
            'relationshipType',
            'viaResource',
            'viaResourceId',
            'viaRelationship',
        ]
    }
</script>

<style scoped>

</style>
