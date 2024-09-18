
class Animations {

    static leftToRight({ duration, direction, delay, inverse }: {
        duration: any, direction?: any, delay?: any, inverse?: any
    }) {
        return ({
            hidden: { opacity: 0, x: inverse == true ? 120 : -120, },
            show: {

                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay ?? .2
                },
            },
        });
    };

    static bottomToTop({ duration, inverse, delay }: { duration: any, inverse?: boolean, delay?: any, }) {
        return ({
            hidden: { opacity: 0, y: inverse == true ? -120 : 120, },
            show: {

                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay ?? .2
                },
            },
        });
    };
    static opacity({ duration, delay }: { duration: any, delay?: any, }) {

        return ({
            hidden: { opacity: 0, },
            show: {

                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay ?? .2
                },
            },
        });
    };

    static scale({ duration, delay }: { duration: any, delay?: any }) {

        return ({
            hidden: { opacity: 0, scale: 0, },
            show: {

                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: duration,
                    delay: delay ?? .2
                },
            },
        });
    };

}



export default Animations; 
