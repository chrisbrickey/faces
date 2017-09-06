import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {
        photo_url: "z"
      },
    };

    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onImageDrop(files) {

  }

  handleSubmit(event) {
    
  }


  render() {

    return (
        <div className="upload-page">

            <div className="dropZone">
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <div className="insideDropZone">
                        <div>
                            Drag/drop an image here or double-click to select a file to upload
                        </div>
                    </div>
                </Dropzone>
            </div>

            <button
                onClick={this.handleSubmit}
                type="submit"
                value="Submit"
                className="manual-submit">
                Post it
            </button>

            <div>
                {this.state.photo.photo_url === 'z' ? null :
                    (<div>
                        <img
                          src={this.state.photo.photo_url}
                          className="downloaded-photo"
                          />
                     </div>)}
            </div>

        </div>


    );

  }


}

export default Upload;
