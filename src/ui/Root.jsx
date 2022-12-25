import UI from '$src/ui/UI';
import './Root.css';

// hooks dont work in the root react component
export default function Root() {

    return (
        <UI />
    );

}
