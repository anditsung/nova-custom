<template>
    <div class="flex w-full justify-end items-center">
        <component v-if="hasComponent" :is="component"/>
    </div>
</template>

<script>
    export default {
        props: ['resourceName'],
        computed: {
            component(){
                return this.resourceName + '-index-toolbar';
            },
            hasComponent()
            {
                return this.component in this.$options.components;
            }
        }
    }
</script>
