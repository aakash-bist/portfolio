import Typewriter from "typewriter-effect";

function Type() {
    return ( <
        Typewriter options = {
            {
                strings: [
                    "Making things awesome at ALGOSCALE"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }
        }
        />
    );
}

export default Type;