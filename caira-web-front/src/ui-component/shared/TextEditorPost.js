import React, { useRef, useState } from "react";
import { convertToRaw, EditorState, AtomicBlockUtils } from "draft-js";
import { blue } from '@mui/material/colors';
import Editor from "@draft-js-plugins/editor";
import createImagePlugin from "@draft-js-plugins/image";
import { Alert, AlertTitle, Divider, IconButton, Input } from "@mui/material";
import PurpleButton from "ui-component/buttons/PurpleButton";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import BasicModal from "ui-component/editor/ModalImage";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import validateSession from '../../utils/validate-session';
import config from 'config';
import { SET_ON_REFRESH } from '../../store/actions'; 
import RichTextEditor from "@mantine/rte";


const { url } = config;

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];

const CreatePost = () => {

    const dispatch = useDispatch();
    const userSession = useSelector( ( _state ) => _state.user );

    const [ content, setContent ] = useState( '' );
    const [ buttonDisabled, setButtonDisabled ]= useState( true );
    const [ alertSuccess, setAlertSuccess ] = useState( false );
    const [ animation, setAnimation ] = useState( 'animate__fadeInRight' );

    const onChange = ( _value ) => {

        // Obtains the content inside the tags
        setContent( _value );
        
        const pureContent = _value?.replace( /(<([^>]+)>)/ig, '' );
        ( !pureContent )
        ?
            setButtonDisabled( true )
        :
            setButtonDisabled( false );


    };


    const onClick = async() => {

        try {

            const payload = {
                content,
                userId: userSession?._id,
                name: userSession?.name,
                surnames: userSession?.surnames
            };

            const { token } = validateSession();

            const config = {
                headers: {
                    Authorization: `Bearer ${ token }`
                }
            };

            const response = await axios.post( `${ url }/post`, payload, config );

            const { status } = response?.data;

            switch ( status ) {

                case 201:

                    setContent( '' );
                    setAlertSuccess( true );

                    dispatch({ type: SET_ON_REFRESH });

                   
                    setTimeout(() => {
                        setAnimation( 'animate__fadeOutRight' );
                       
                        setTimeout(() => {

                            setAlertSuccess( false );
                            setAnimation( 'animate__fadeInRight' );
                      
                        }, 1000)
                    }, 5000 );


                break;

                case 400:

                break;

                case 401:
                    
                break;

                case 500:

                break;

                default:

                break;

            };

        } catch ( _error ) {

            console.log( "Error try/catch ( create-post )", `(${typeof _error}): `, _error);

        };

    };

    return (
        <>
            <RichTextEditor 
                controls={[
                    ['bold', 'italic', 'underline', 'link', 'image'],
                    ['unorderedList', 'h1', 'h2', 'h3'],
                    ['sup', 'sub'],
                    ['alignLeft', 'alignCenter', 'alignRight'],
                ]}
                value={ content } 
                onChange={ onChange } 
            />

            <div className='flex'>

                <div className='mla mt1'>

                    <PurpleButton 
                        width='10%'
                        disabled={ buttonDisabled }
                        customColor={ blue[500] }
                        customColorHover={ blue[700] }
                        onClick={ onClick }
                    >
                        Post
                    </PurpleButton>
                
                </div>

            </div>

            { 
                alertSuccess
                &&
                <div className={ `animate__animated ${ animation }` } style={{ position: 'fixed', bottom: 30, right: 40 }}>

                    <Alert color="info" severity="success">
                        <AlertTitle style={{ fontFamily: 'Poppins'}}>Well done</AlertTitle>
                        <strong className="ff-poppins fw-400">Post created successfully!</strong>
                    </Alert>

                </div>
            }
        </>
    );

    /* const [ state, setState ] = useState({ editorState: EditorState.createEmpty() })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const inputFile = useRef(null);

    const [ fileName, setFileName ] = useState( 'Subir una imagen' );
    const [ selectedFile, setSelectedFile ] = useState( null );

    const onChange = editorState =>  setState({ editorState })

    const handleClick = () => {
      const base64 =
        "data:image/png;base64,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";
      const newEditorState =  insertImage( state.editorState, base64);
       onChange(newEditorState);
       handleClose();
    };
  
    const insertImage = (editorState, base64) => {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        "image",
        "IMMUTABLE",
        { src: base64 }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity
      });
      return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
    };

    const onClick = (e) => {
        inputFile.current.click();
    };

    const onChangeImage = ( _event ) => {
        
        const file = _event.target.files[0];

        setFileName( file.name );
        setSelectedFile( file );

        const reader = new FileReader();
        reader.onloadend = () => {
            const newEditorState =  insertImage( state.editorState, reader.result);
            onChange(newEditorState);
            
        }
        reader.readAsDataURL( file );


    };
    

    return (
        <div>
            <div className="shadow p1">
                <Editor
                    editorState={ state.editorState }
                    onChange={ onChange }
                    plugins={ plugins }
                />

                <div className='mt1'>
                    <Divider />
                </div>

                <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                    
                    onChange={ ( _event ) => onChangeImage( _event ) }
                />
                <IconButton 
                    onClick={ onClick }
                >
                    <InsertPhotoIcon />
                </IconButton>


                <pre>
                {JSON.stringify(
                    convertToRaw( state.editorState.getCurrentContent()),
                    null,
                    "  "
                )}
                </pre>
        
            </div>
            <PurpleButton 
                className="mt1"
                customColor={ blue[500] }
                customColorHover={ blue[700] }
                onClick={ () => console.log( state )}
            >
                Post
            </PurpleButton>
        </div>
    );
   */

};

export default CreatePost;


/*  */