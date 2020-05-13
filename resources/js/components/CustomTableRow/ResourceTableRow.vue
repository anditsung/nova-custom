<template>
    <tr :dusk="resource['id'].value + '-row'">

        <!-- Resource Selection Checkbox -->
        <td
            :class="{
                'w-16': shouldShowCheckboxes,
                'w-8': !shouldShowCheckboxes,
            }"
        >
            <checkbox
                :data-testid="`${testId}-checkbox`"
                :dusk="`${resource['id'].value}-checkbox`"
                v-if="shouldShowCheckboxes"
                :checked="checked"
                @input="toggleSelection"
            />
        </td>

        <!-- Fields -->
        <td v-for="field in resource.fields">
            <component
                :is="'index-' + field.component"
                :class="`text-${field.textAlign}`"
                :resource-name="resourceName"
                :via-resource="viaResource"
                :via-resource-id="viaResourceId"
                :field="field"
            />
        </td>

        <td class="td-fit text-right pr-6 align-middle">
            <div class="inline-flex items-center">

                <!-- Actions Menu -->
                <inline-action-selector
                    v-if="availableActions.length > 0"
                    class="mr-3"
                    :resource="resource"
                    :resource-name="resourceName"
                    :actions="availableActions"
                    @actionExecuted="$emit('actionExecuted')"
                />

                <!-- Default Menu -->
                <default-actions
                    :resource="resource"
                    :resource-name="resourceName"
                    :test-id="testId"
                    :relationship-type="relationshipType"
                    :via-resource="viaResource"
                    :via-resource-id="viaResourceId"
                    :via-relationship="viaRelationship"
                    :via-many-to-many="viaManyToMany"
                    :delete-resource="deleteResource"
                    :restore-resource="restoreResource"
                />

                <!-- Custom Menu -->
                <component
                    v-if="hasComponent"
                    :is="component"
                    :resource="resource"
                    :resource-name="resourceName"
                    :update-resource="updateResource"
                    :via-resource="viaResource"
                    :via-relationship="viaRelationship"
                />
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    props: [
        'testId',
        'deleteResource',
        'restoreResource',
        'resource',
        'resourcesSelected',
        'resourceName',
        'relationshipType',
        'viaRelationship',
        'viaResource',
        'viaResourceId',
        'viaManyToMany',
        'checked',
        'actionsAreAvailable',
        'shouldShowCheckboxes',
        'updateSelectionStatus',
        'queryString',
    ],

    computed: {
        component() {
            return this.resourceName + '-index-row';
        },

        hasComponent() {
            return this.component in this.$options.components;
        },

        availableActions() {
            return _.filter(this.resource.actions, a => a.showOnTableRow)
        },
    },

    methods: {
        /**
         * Select the resource in the parent component
         */
        toggleSelection() {
            this.updateSelectionStatus(this.resource)
        }
    },
}
</script>
