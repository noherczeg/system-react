((global) => {
    System.config({
        paths: {
            'npm:': './node_modules/',
            'unpkg:': 'https://unpkg.com/',
        },

        map: {
            // 'react': 'npm:react/umd/react.development.js',
            // 'react-dom': 'npm:react-dom/umd/react-dom.development.js',
            'react': 'unpkg:react/umd/react.production.min.js',
            'react-dom': 'unpkg:react-dom/umd/react-dom.production.min.js',
        },

        bundles: {

        },

        // packages tells the System loader how to load when no filename and/or no extension
        packages: {

        }
    });
})(this);
