import React from 'react';

//  Components
import { IconButton } from '.';

const FileUpload = ({children}) => {

    return (
        <IconButton>
            {children}
            <input 
                type="file"
                title=""
                value=""
            />
        </IconButton>
    )
}

export default FileUpload;
