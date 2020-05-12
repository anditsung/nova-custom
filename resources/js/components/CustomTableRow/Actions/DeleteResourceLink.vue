<template>
    <div>
        <button
            :data-testid="`${testId}-delete-button`"
            :dusk="`${resource['id'].value}-delete-button`"
            class="inline-flex appearance-none cursor-pointer text-70 hover:text-primary mr-3"
            v-tooltip.click="__(viaManyToMany ? 'Detach' : 'Delete')"
            v-if="
                resource.authorizedToDelete &&
                  (!resource.softDeleted || viaManyToMany)
              "
            @click.prevent="openDeleteModal"
        >
            <icon />
        </button>

        <portal
            to="modals"
            transition="fade-transition"
            v-if="deleteModalOpen"
        >
            <delete-resource-modal
                v-if="deleteModalOpen"
                @confirm="confirmDelete"
                @close="closeDeleteModal"
                :mode="viaManyToMany ? 'detach' : 'delete'"
            >
                <div slot-scope="{ uppercaseMode, mode }" class="p-8">
                    <heading :level="2" class="mb-6">{{
                        __(uppercaseMode + ' Resource')
                        }}</heading>
                    <p class="text-80 leading-normal">
                        {{ __('Are you sure you want to ' + mode + ' this resource?') }}
                    </p>
                </div>
            </delete-resource-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        props: [
            'testId',
            'resource',
            'viaManyToMany',
            'deleteResource',
        ],

        data: () => ({
            deleteModalOpen: false,
        }),

        methods: {

            openDeleteModal() {
                this.deleteModalOpen = true
            },

            confirmDelete() {
                this.deleteResource(this.resource)
                this.closeDeleteModal()
            },

            closeDeleteModal() {
                this.deleteModalOpen = false
            },
        },
    }
</script>

<style scoped>

</style>
