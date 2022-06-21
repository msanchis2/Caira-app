
const validateSession = () => {

    let result = false;

    const session = JSON.parse( window.localStorage.getItem( 'SESSION' ) );

    if ( session?.token && session?.rol && session?.userId ) {
        
        result = {
            rol: session.rol,
            token: session.token,
            userId: session.userId
        };

    };

    return result;

};

export default validateSession;