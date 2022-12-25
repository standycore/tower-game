import path from 'path';
import react from '@vitejs/plugin-react';

export default {
    plugins: [react()],
    base: '/tower-game/',
    build: {
        outDir: './dist'
    },
    resolve: {
        alias: {
            $lib: path.resolve(__dirname, 'lib'),
            $src: path.resolve(__dirname, 'src')
        }
    }
};
