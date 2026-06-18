import { createInertiaApp } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';


const appName = import.meta.env.VITE_APP_NAME || 'Shopee';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return null;
        }
    },
    strictMode: true,
    
});



