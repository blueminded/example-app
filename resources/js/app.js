import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import "../css/app.css";
createInertiaApp({
    resolve: async (name) => {
        return (await import(`../Pages/${name}.vue`)).default;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
