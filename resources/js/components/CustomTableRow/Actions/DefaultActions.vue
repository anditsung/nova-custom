<template>
    <div class="flex justify-center">
        <!-- View Resource Link -->
        <view-resource-link
            :resource="resource"
            :resource-name="resourceName"
            :test-id="testId"
        />

        <!-- Edit Resource Link -->
        <edit-resource-link
            :resource="resource"
            :resource-name="resourceName"
            :relationship-type="relationshipType"
            :via-resource="viaResource"
            :via-resource-id="viaResourceId"
            :via-relationship="viaRelationship"
        />

        <!-- Delete Resource Link -->
        <delete-resource-link
            :test-id="testId"
            :resource="resource"
            :via-many-to-many="viaManyToMany"
            :delete-resource="deleteResource"
        />

        <!-- Restore Resource Link -->
        <restore-resource-link
            :test-id="testId"
            :resource="resource"
            :via-many-to-many="viaManyToMany"
            :restore-resource="restoreResource"
        />
    </div>
</template>

<script>
    export default {
        props: [
            'resource',
            'resourceName',
            'testId',
            'relationshipType',
            'viaResource',
            'viaResourceId',
            'viaRelationship',
            'viaManyToMany',
            'deleteResource',
            'restoreResource',
        ]
    }
</script>
