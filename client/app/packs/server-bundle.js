// import basic
import ReactOnRails from 'react-on-rails';

import HelloWorld from "../components/HelloWorld";

ReactOnRails.register({
    HelloWorld,
})

console.log("Registered components:", ReactOnRails.getRegisteredComponents());