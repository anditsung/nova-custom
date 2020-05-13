<template>
    <div>
        <button
            :data-testid="`${testId}-restore-button`"
            :dusk="`${resource['id'].value}-restore-button`"
            class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
            v-if="
            resource.authorizedToRestore &&
              resource.softDeleted &&
              !viaManyToMany
          "
            v-tooltip.click="__('Restore')"
            @click.prevent="openRestoreModal"
        >
            <icon type="restore" with="20" height="21" />
        </button>

        <portal
            to="modals"
            transition="fade-transition"
            v-if="restoreModalOpen"
        >
            <restore-resource-modal
                v-if="restoreModalOpen"
                @confirm="confirmRestore"
                @close="closeRestoreModal"
            >
                <div class="p-8">
                    <heading :level="2" class="mb-6">{{
                        __('Restore Resource')
                        }}</heading>
                    <p class="text-80 leading-normal">
                        {{ __('Are you sure you want to restore this resource?') }}
                    </p>
                </div>
            </restore-resource-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        props: [
            'testId',
            'resource',
            'viaManyToMany',
            'restoreResource',
        ],

        data: () => ({
            restoreModalOpen: false,
        }),

        methods: {
            openRestoreModal() {
                this.restoreModalOpen = true
            },

            confirmRestore() {
                this.restoreResource(this.resource)
                this.closeRestoreModal()
            },

            closeRestoreModal() {
                this.restoreModalOpen = false
            },
        }
    }
</script>
