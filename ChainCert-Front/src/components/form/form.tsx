import React, { useState } from 'react';
import './form.scss'

const Form = () => {
  const [publicKey, setPublicKey] = useState('')
  const [comment, setComment] = useState('')
  const [documentSelect, setDocumentSelect] = useState('Diploma')

  function handleSubmit() {
    console.log("publicKey:", publicKey)
    console.log("comment:", comment)
  }

  return (
    <form className="roundBox">
      <div>
        <h1 className="formTitle">
          Deliver a document
        </h1>
        <select className="formDocumentSelect">
          <option>
            Diploma
          </option>
          <option>
            Work experience
          </option>
        </select>
        <label for="publicKey" className="formLabel">
          Public Key
        </label>
        <input
          onChange={(e) => {setPublicKey(e.currentTarget.value)}}
          placeholder="Type the public key here..."
          name="publicKey"
          id="publicKey"
          type="text"
          className="formInput"
        />

        <label for="name" className="formLabel">
          Comment
        </label>
        <textarea
          onChange={(e) => {setComment(e.currentTarget.value)}}
          placeholder="Write a comment here..."
          name="comment"
          id="comment"
          type="text"
          className="formInput formComment"
        />

        <button type="button" onClick={handleSubmit} className="formButton">
          Send
        </button>
      </div>
    </form>
  )
}

export default Form;
