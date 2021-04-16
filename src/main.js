import { createApp } from "vue";
import App from "./App.vue";
import store from './store';
import "./assets/tailwind.css";
import router from "./router";
import "./index.css";
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

//! finally it works, syntax Vue 4
const app = createApp(App).use(router)
app.use(store)
app.mount('#app')



