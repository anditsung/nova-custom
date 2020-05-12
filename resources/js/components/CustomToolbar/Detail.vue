<template>
    <div class="flex w-full justify-end items-center">
        <component
            v-if="hasComponent"
            :is="component"
            :resource="resource"
            :resource-name="resourceName"
            :resource-id="resourceId"
        />
    </div>
</template>

<script>
    export default {
        props: [
            'resource',
            'resourceName',
            'resourceId',
        ],

        computed: {
            component() {
                return this.resourceName + '-detail-toolbar';
            },
            hasComponent() {
                return this.component in this.$options.components;
            }
        }
    }
</script>
