import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';



const CLOUDINARY_UPLOAD_PRESET = 'swicrc8u';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dckkkjkuz/image/upload';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {
        photo_url: "z"
      },
    };

    window.state = this.state;
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);

      upload.end((err, response) => {
        if (err) {
          console.error(err);
        }

        if (response.body.secure_url !== 'z') {
          this.setState({ photo: { photo_url: response.body.secure_url}});
        }

      });
  }

  handleSubmit(event) {

  }


  render() {

    return (
        <div className="upload-page">
          <div className="upload-page-inner">

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

                <div>
                    {this.state.photo.photo_url === 'z' ? null :
                        (<div>
                            <img
                              src={this.state.photo.photo_url}
                              className="downloaded-photo"
                              />
                         </div>)}
                </div>

                <button
                    onClick={this.handleSubmit}
                    type="submit"
                    value="Submit"
                    className="manual-submit">
                    Post it
                </button>

            </div>
        </div>


    );

  }


}

export default Upload;
