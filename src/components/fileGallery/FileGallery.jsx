import { useState, useContext } from "react"
import { AutenticacionContext } from "../../context/AutenticationContext";

const EntryImages = ({ entry }) => {
  const [photos, setPhotos] = useState(entry.photos)
  const {token} = useContext(AutenticacionContext);
  const userActions = useUserActions()

  const handlePhoto = e => {
    const photo = e.target.files[0]
    const fd = new FormData()
    fd.append('photo', photo)
    userActions.addPhoto(entry.id, fd)
      .then(res => {
        setPhotos([...photos, res.data.photo])
      })
  }

  return (
    <div className="entry-images">
      {photos.map(p =>
        <img key={p.id} src={'https://viajes.anxoso.com/' + p.name} />
      )}
      {entry.owner && photos.length < 3 &&
        <form className="add-image">
          <label>
            <span>+</span>
            <input type="file" onChange={handlePhoto} />
          </label>
        </form>
      }
    </div>
  )
}

export default EntryImages
