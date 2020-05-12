Nova.booting((Vue, router, store) => {

    // ICONS
    Vue.component('icon-arrow-narrow-left', require('./components/Icons/ArrowNarrowLeft'))
    Vue.component('icon-user-minus', require('./components/Icons/UserMinus'))
    Vue.component('icon-user-plus', require('./components/Icons/UserPlus'))
    Vue.component('icon-minus', require('./components/Icons/Minus'))
    Vue.component('icon-plus', require('./components/Icons/Plus'))

    // COMPONENTS
    Vue.component('progress-button-danger', require('./components/ProgressButtonDanger'))

    // OVERRIDE TOOLBAR ON LARAVEL NOVA
    Vue.component('custom-detail-toolbar', require('./components/CustomToolbar/Detail'))
    Vue.component('custom-index-toolbar', require('./components/CustomToolbar/Index'))

    // OVERRIDE TABLEROW ACTIONS
    Vue.component('resource-table-row', require('./components/CustomTableRow/ResourceTableRow'))
    // DEFAULT ACTIONS FOR TABLEROW
    Vue.component('default-actions', require('./components/CustomTableRow/Actions/DefaultActions'))
    Vue.component('view-resource-link', require('./components/CustomTableRow/Actions/ViewResourceLink'))
    Vue.component('edit-resource-link', require('./components/CustomTableRow/Actions/EditResourceLink'))
    Vue.component('delete-resource-link', require('./components/CustomTableRow/Actions/DeleteResourceLink'))
    Vue.component('restore-resource-link', require('./components/CustomTableRow/Actions/RestoreResourceLink'))
})
